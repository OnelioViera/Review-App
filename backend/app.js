const express = require("express")

const app = express()

app.get('/', (req, res) => {
  res.send('<h2>Hi, I from your backend server</h2>')
})


app.listen(8000, () => {
  console.log("Server is running on port 8000")
})