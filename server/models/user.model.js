var mongoose = require("mongoose");
var { isEmail } = require("validator")

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [ isEmail, 'invalid email']
    },
    password: {
      type: String,
      required: true,
    },
    qupte: {
      type: String,
    },
  },
  { collection: "user" }
);

// Include virtuals
userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });

// validateBeforeSave
userSchema.set('validateBeforeSave', true);

const User = mongoose.model('User', userSchema);

module.exports = User;

