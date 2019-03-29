const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://pacific-fortress-71039.herokuapp.com/'
  : 'http://localhost:8080'
const CLIENT_URL = 'http://localhost:3000'

//https://pacific-fortress-71039.herokuapp.com/ 

module.exports = { API_URL, CLIENT_URL }