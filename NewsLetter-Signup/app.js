const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req, res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);

    const url = "https://us1.api.mailchimp.com/3.0/lists/3058c50447";

    const options = {
        method: "POST",
        auth: "ali1195shah:1872e6c1eb2e685f8373beb0d4ff5d2d-us1"
    }

    const request = https.request(url, options, function(response){
        if(response.statusCode === 200){
            res.sendFile(__dirname + '/success.html')
        } else {
            res.sendFile(__dirname + '/failure.html')
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
})

app.post("/failure", function(req, res){
    res.redirect("/");
})


app.listen(3000, function(){
    console.log("Server is running on port 3000")
})

// APIKey
// 1872e6c1eb2e685f8373beb0d4ff5d2d-us1

// id
// 3058c50447