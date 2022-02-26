const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const {connectDB} = require("./DBconnection/dbconnect")
const AuthRouter = require("./routers/AuthRouter")

connectDB()
const app = express();

//middleware
app.use(bodyParser.json())
app.use(cors());
app.use("/api/Auth" ,AuthRouter)

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
