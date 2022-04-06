const express = require('express')
const router = express.Router()

router.get('/admin/add-product', (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="name"><button type="submit"> Add Product</button></form>'
  )
})
router.post('/admin/add-product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router