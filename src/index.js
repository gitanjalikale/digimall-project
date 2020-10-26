const express = require("express");
const path = require("path");
const app = express();
const hbs =require("hbs");

const port=3000;


const staticpath = path.join(__dirname,"../public")
 const templatepath = path.join(__dirname,"../template")
 const partialpath = path.join(__dirname,"../template/partials")
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);

app.use(express.static(staticpath));

app.get("/",(req , res)=>{
    res.render("index");
});


app.get("/cart",(req , res)=>{
    res.render("cart");
});
app.get("/login",(req , res)=>{
    res.render("login");
});
app.get("/more",(req , res)=>{
    res.render("more");
});
app.get("/register",(req , res)=>{
    res.render("register");
});

app.get("/home",(req , res)=>{
    res.render("index");
});

app.listen(port,()=>{
    console.log(`listening the port ${port}`)
});