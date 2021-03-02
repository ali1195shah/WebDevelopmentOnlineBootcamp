const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello World!</h1>")
})

app.get("/contact", function(req, res){
    res.send("Contact me as: ali@gmail.com")
})

app.get("/about", function(req, res){
    res.send("My name is Ali and I love food");
})

app.get("/pokemon", function(req, res){
    res.send("<h1>Pokemon</h1>")
})


// ===========================

app.listen(3000, function(){
    console.log("Server started on port 3000!");
})

