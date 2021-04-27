//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose"); // mongoose


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true }); //make db

const iteamSchema = { //schema
  name: String
}

const listSchema = {
  name: String,
  items: [iteamSchema]
}

const List = mongoose.model("List", listSchema);

const Item = mongoose.model("Item", iteamSchema); // make collection

const itemIntro = new Item({name: "Welcome to the todolist!"});
const itemAddDemo = new Item({name: "Hit the + button to add a new item."});
const itemDeleteDemo = new Item({name: "<-- Hit this to delete an item"});
const demo = new Item({name: "Eate, Sleep, Play, Repeat"});

const startingItem = [itemIntro, itemAddDemo, itemDeleteDemo, demo];



// Item.insertMany(startingItem, function(err){ //addind to collection
//   if(err) {
//     console.log(err)
//   } else {
//     console.log("Successfully added")
//   }
// })

app.get("/", function(req, res) {

  Item.find({}, function(err, foundItems){
    if(foundItems.length === 0){
      Item.insertMany(startingItem, function(err){ //addind to collection
          if(err) {
            console.log(err)
          } else {
            console.log("Successfully added")
          }
        })
        res.redirect("/");
    } else {
      res.render("list", {listTitle: "day", newListItems: foundItems});
    }
  });


  app.get("/:customListName", function(req, res){
    const customeListUrl = req.params.customListName;

    List.findOne({name: customeListUrl}, function(err, foundList){
      if(!err){
        if(!foundList){
          const list = new List({
            name: customeListUrl,
            items: startingItem
          });
          list.save();
        } else {
          res.render("list", {listTitle: foundList.name, newListItems: foundList.item})
        }
      }
    })
  });

  

});

app.post("/", function(req, res){

  const itemInput = req.body.newItem;

  const item = new Item({
    name: itemInput
  });

  item.save();
  res.redirect("/");
});

app.post("/delete", function(req, res){
  const deletingItem = req.body.checkbox;

  Item.findByIdAndRemove(deletingItem, function(err){
    if(err){
      console.log(err);
    } else {
      res.redirect("/");
    }
  })
  
})

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
