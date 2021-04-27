// const {MongoClient} = require("mongodb");
 
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri = "mongodb://localhost:27017";
 
// const client = new MongoClient(uri, {useUnifiedTopology: true});
 
// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected Successfully to server");
 
//         const database = client.db('fruitsDB');
//         const fruitsCollection = database.collection('fruits');
        
//         const cursor = fruitsCollection.find({});
 
//         if ((await cursor.count()) === 0) {
//             console.log("No documents found!");
//         }
 
//         await cursor.forEach((fruit) => {
//             console.log(fruit);
//         });
 
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);


// const insertDocuments = function(db, callback) {
//     const collection = db.collection("fruist");

//     collection.insertMany({
//         {},
//         {},
//         {}
//     })
// }



// const { MongoClient } = require("mongodb");
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri = "mongodb://localhost:27017";
// // const uri =
// //   "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {useUnifiedTopology: true});
 
// const dbName = "fruitsDB";
 
// async function run() {
//   try {
//     await client.connect(function(){
//       console.log("Connected successfully to server!");
//     });
//   const database = client.db(dbName);
  
//   const collection = database.collection('fruits'); 
 
//   const docs = [
//   {
//     name: 'Apple',
//     score: 8,
//     review: "Great fruit"
//   },
//   {
//     name: "Orange",
//     score: 6,
//     review: "Kinda sour"
//   },
//   {
//     name: "Bananna",
//     score: 9,
//     review: "Great stuff!"
//   }
//   ];
 
//   const options = { ordered: true };
 
//   const result = await collection.insertMany(docs, options);
 
//   console.log(`${result.insertedCount} documents were inserted.`);
 
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


const mongoose = require('mongoose');

// db 
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });
// mongoose.connect("mongodb://localhost:27017/peoplesDB", {useNewUrlParser: true });

// Schema
const fruitsSchema = new mongoose.Schema({
  name: {
    type: String,
    // require: [true, "Enter a valid name"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitsSchema
});


// make collections
const Fruit = mongoose.model("Fruit", fruitsSchema); // trype singular  collection name and than the scheam

// const fruit = new Fruit({
  
//   rating: 9,
//   review: "No name"
// })

const pine = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Spongbob Squarepants"
});

pine.save()

const People = mongoose.model("People", peopleSchema);

const ppl = new People({
  name: "Amy",
  age: 34,
  favoriteFruit: pine
});

// const orange = new Fruit({
//   name: "Orange",
//   rating: 10,
//   review: "Awesome"
// })

// const bannana = new Fruit({
//   name: "Bannana",
//   rating: 8,
//   review: "It's Yellow"
// })

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 9000,
//   review: "It's over 9000"
// })


// const People = mongoose.model("People", peopleSchema);

// const ppl = new People({
//   name: "John",
//   age: 34
// });

// fruit.save();
ppl.save();

// Fruit.insertMany([orange, bannana, kiwi], function(err){
//   if (err) console.log(err)
//   console.log("Success saved all")
// })


Fruit.find(function(err, fruits){
  if(err) console.log(err)
  // console.log(fruits);

  mongoose.connection.close();

  for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i].name);
  }
})


// Fruit.updateOne({_id: "608702720ac790526ce035e7"}, {name: "Peach"}, function(err){
//   if (err) console.log(err);
//   console.log("Successfully updated");
// });


// Fruit.deleteOne({name: "Peach"}, function(err){
//   if(err) console.log(err);
//   console.log("Successfully Deleted")
// })