module.exports = {
  createUser: (req, res, next) => {
    const data = req.body
    res.json(data)
  },
  getUser: (req, res, next) => {
    res.json({ ok: true });
  },
};
