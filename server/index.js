const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();

app.use(morgan('tiny'));
app.use(cookieParser());

app.options('/',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Methods", "PUT");
  res.header("Access-Control-Max-Age", 600);
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(200);
})

app.get("/",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080")
  res.send({
    hola: "mundo"
  });
})


app.put("/", (req, res) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  console.log(req.cookies);
  res.send({
    hola: "mundo"
  });
})


app.listen(3000,()=> console.log("Server started"));