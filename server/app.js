var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var passport = require("passport");
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;

var userRouter = require("./routes/user");
var authRouter = require("./routes/auth");
const User = require("./models/user.model");

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// PASSPORT : JWT.
var opts = {}; //object
//object opts có các thuộc tính sau
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
(opts.secretOrKey = "HAICHANGLANGULAMNHABAME"), //là chuổi tự nghĩ ra.
  (opts.issuer = "phongdat.cloud");
opts.audience = "phongdat.cloud";

passport.use(
  new JwtStrategy(opts, function (payload, done) {
    const email = payload.sub
    User.findOne({email})
      .then((result) => {
        if (result) {
          return done(null, result);
        } else {
          return done(null, false);
        }
      })
      .catch((error) => {
        console.error(error);
        return done(null, false);
      });
  })
);

app.use("/user", userRouter);
app.use("/auth", authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
