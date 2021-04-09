const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

let items = ['Buy Food', 'Cook Food', 'Eat Food'];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // makes css visiable in the browser

app.get('/', function(req, res){
    // let today = new Date();
    // day = "";

    // if(today.getDay() === 0 || today.getDay === 6){
    //     day = 'Weekend';
    // } else {
    //     day = 'Weekday';
    // }

    // switch (today.getDay()) {
    //     case 0:
    //         day = 'Sunday'
    //         break;
    //     case 1: 
    //         day = 'Monday'
    //         break;
    //     case 2: 
    //         day = 'Tuesday'
    //         break;
    //     case 3:
    //         day = 'Wednesday'
    //         break;
    //     case 4:
    //         day = 'Thursday'
    //         break;
    //     case 5:
    //         day = 'Friday'
    //         break;
    //     case 6:
    //         day = 'Saturday'
    //         break;
    //     default:
    //         break;
    // }

    let day = date();
    console.log(day)
    res.render('list', {kindOfDay: day, itemArr: items})
})


app.post('/', function(req, res){
    let item = req.body.newItem;

    items.push(item);

    res.redirect('/');
})






app.listen(3000, function(){
    console.log('Server started on port 3000');
});