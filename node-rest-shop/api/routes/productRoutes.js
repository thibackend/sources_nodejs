const express = require('express');
const productCtl = require('../../controllers/productCtl');
const router = express.Router();

router.get('/',productCtl.getListProduct);

router.get('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'Get sigle product!'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: "Create sucessful!",
    data: req?.body?.name || "Hi there!"
  })
})

router.patch('/:id', (req, res, next) => {
  res.json({
    message: "Update successful!"
  })
})

module.exports = router;
