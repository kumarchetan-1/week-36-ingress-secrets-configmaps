import express from "express";

const app = express();

console.log(process.env.DB_URL);
console.log(process.env.PORT);

app.get("/", (req, res)=>{
    res.send("<h1> Hello world </h1>")
})

app.listen(process.env.PORT)