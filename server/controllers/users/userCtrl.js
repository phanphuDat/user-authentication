const { default: mongoose } = require("mongoose");
const User = require("../../models/user.model");

mongoose.connect("mongodb://127.0.0.1:27017/auth");

module.exports = {
  createUser: async (req, res, next) => {
    const data = req.body;
    try {
      const user = new User(data);
      await user.save();
      
    } catch (error) {
      res.status(400).json({ status: 'error', error: 'duplicate email' });
    }
  },
  getUser: async (req, res, next) => {
    try {
      const result = await User.find();
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },
  getUserId: async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await User.findById(id);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },
  updateUser: async (req, res, next) => {
    const { id } = req.params;
    const dataUpdate = req.body;
    try {
        const result = await User.findByIdAndUpdate(id, dataUpdate, {new: true});
        res.json(result)
    } catch (error) {
        res.status(400).json({ error})
    }
  }
};
