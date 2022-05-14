const express = require('express')

const app = express()
const port = 3000
const zuelApi = require('./routes/zuelApi')
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
  res.send('hey there!')
})
app.use('/billFetch', zuelApi);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports = app;