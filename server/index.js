const express = require("express")
const app = express()
const port = 8000
const cors = require("cors")
const morgan = require("morgan")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(morgan());

app.get("/", cors(), async(req, res) => {
  res.send("This is working")
})

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})