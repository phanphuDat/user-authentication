const { default: mongoose } = require("mongoose");
const User = require("../../models/user.model");
const jwt = require("jsonwebtoken");

mongoose.connect("mongodb://127.0.0.1:27017/auth");

module.exports = {
  authenticate: async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email, password });
    if (user) {
      var payload = {
        user: {
          email: email,
          name: user.name,
        },
      };
      var secret = "HAICHANGLANGULAMNHABAME";
      var token = jwt.sign(payload, secret, {
        expiresIn: 86400,
        audience: "phongdat.cloud",
        issuer: "phongdat.cloud",
        subject: email,
        algorithm: "HS512",
      });

      return res.status(200).json({
        ok: true,
        status: "success",
        user: user,
        token: token,
      });
    } else {
      return res.status(400).json({ status: "error" });
    }
  },
  getUser: async (req, res, next) => {
    try {
      res.json({ ok: true, status: "success" });
    } catch (error) {
      res.status(404).json({ status: "error" });
    }
  }
};
