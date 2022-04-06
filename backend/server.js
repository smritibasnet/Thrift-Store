const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const dotenv = require('dotenv')
const adminRoutes = require('./routes/admin')
const storeRoutes = require('./routes/store')

const bodyParser = require('body-parser')

dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/admin', adminRoutes)
app.use(storeRoutes)
app.use((req, res, next) => {
  res.status(404).send('<h1>Page Not Found</h1>')
})
app.get('/api/products', async (req, res) => {
  const allProducts = await products.res.json()
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on  http://localhost:5000`
  )
)
