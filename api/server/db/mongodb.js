const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://DKER:Phuong2003@cluster0.n8bg2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Create a new MongoClient
const MongoDB = new MongoClient(uri);

const authentication = MongoDB.db("Login").getCollection("authentication");


module.exports = authentication;

// async function run() {
//   try {
//     // Connect the client to the server
//     await client
//     .connect()
//     .then(
//       client =>
//         client
//           .db("Login")
//           .listCollections()
//           .toArray() // Returns a promise that will resolve to the list of the collections
//     )
//     .then(cols => console.log("Collections", cols))
//     .finally(() => client.close());

//     // Establish and verify connection
    
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
