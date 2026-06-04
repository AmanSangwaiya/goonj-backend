const router = require('express').Router();
const Member = require('../models/Member');

router.get('/', async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

router.post('/', async (req, res) => {
  const member = await Member.create(req.body);
  res.status(201).json(member);
});

module.exports = router;