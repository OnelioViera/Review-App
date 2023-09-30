const express = require("express")

const app = express()

app.get('/', (req, res) => {
  res.send('<h2>Backend server id running on port 8000.</h2>')
})

app.listen(8000, () => {
  console.log("Server is running on port 8000")
})