const express = require('express')
const routers = require("./routers")

const app = express()
const port = 3000


app.set('json spaces', 10);
app.set("view engine", "ejs")

app.use(express.static('public'))
app.use('/',routers)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})