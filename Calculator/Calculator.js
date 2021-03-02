const express = require("express");
const bodyPaser = require("body-parser");

const app = express();
app.use(bodyPaser.urlencoded({extended: true})); // allows u to tap into res.body

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html"); //the file path of the current file
    // console.log(__dirname);
});

app.get('/bmicalculator', function(req, res){

    res.sendFile(__dirname + "/bmiCalculator.html");
});

// =========================post======================


app.post('/', function(req, res){
    console.log(req.body)
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let results = num1 + num2;
    res.send('The results of the calulation is: ' + results);
});

app.post('/bmicalculator', function(req, res){
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let results = weight / (height * height);
  res.send('Thanks for submiting that, Your BMI is ' + results)
});

app.listen(3000, function(){
    console.log('Server running on port 3000')
});
