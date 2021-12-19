const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const {connectDB} = require("./DBconnection/dbconnect")
const productRouter = require("./routers/dataRouter")
const salesmanRouter = require("./routers/SalemanRouter")
const cartRouter = require("./routers/cartRouter")



connectDB()
const app = express();


//middleware
app.use(bodyParser.json())
app.use(cors());
app.use("/api/product" ,productRouter)
app.use("/api/salesman" ,salesmanRouter)
app.use("/api/cart" ,cartRouter)

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
