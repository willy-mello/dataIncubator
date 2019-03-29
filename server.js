require('dotenv').config()
const express = require('express')
const cloudinary = require('cloudinary').v2
const formData = require('express-form-data')
const cors = require('cors')
const bodyParser = require('body-parser')
const { CLIENT_URL } = require('./src/config')

const app = express()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

app.use(cors({
  origin: CLIENT_URL,
}))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(formData.parse())

app.post('/image-upload', (req, res) => {
  console.log('req.files', req.files)
  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))

  Promise
    .all(promises)
    .then(results => res.json(results))
})
// try {
//   cloudinary.uploader.upload(values, (result, error) => { console.log(result) })


// } catch (error) {

// }
// const promises = values.map((image) => cloudinary.v2.uploader.upload(image.path))
// Promise
//   .all(promises)
//   .then((results) => {
//     console.log('results i imagupload route', results)
//     res.json(results)
//   })

app.post('/image-upload-single', (req, res) => {
  const path = Object.values(Object.values(req.files)[0])[0].path
  cloudinary.uploader.upload(path)
    .then((image) => {
      console.log(image)
      res.json([image])
    })
})

app.listen(process.env.PORT || 8080, () => console.log('app is listening'))