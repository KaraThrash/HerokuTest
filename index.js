const express = require('express')
const app = express()
const port = process.env.PORT || '3000'


app.get('/', function (request, response) {
  response.send('Hello Viking!')
})

app.listen(port, function () {
  // This function is run when the app starts up.
  console.log('Kemst þó hægt fari.')
})

console.log("what");
