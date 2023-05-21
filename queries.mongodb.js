use("testDB");

// Comparison - > , < , >= , <= , !=
// gt, gte, lt, lte
// db.movies.find(
//   {
//     weight: {$ne: 58 }
//   },
//   { weight: 1}
// );

// Logical operators
// $and , $or

// db.movies.find(
//   {
//     type: "Scripted",
//     language: "English"
//   },
//   { type: 1, language: 1 , name: 1}
// );

// db.movies.find(
//   {
//     $or: [{ type: "Scripted" }, { language: "Japanese" }]
//   },
//   { type: 1, language: 1, name: 1 }
// );

// db.movies.find(
//   {
//     $and: [
//       {$or: [{ type: "Scripted" }, { language: "Japanese" }]},
//       {$or : [{runtime: {$gt: 50}}, {weight: 58}]}
//     ]
//   },
//   { type: 1, language: 1, name: 1 , runtime:1}
// );

// db.movies.find({"network.country.name": "United States"}, {
//   "network.country.name": 1
// })

// Find, Insert, Update , Delete

// DeleteOne , DeleteMany
// remove

// db.movies.deleteOne({type: ObjectId("639d6fc3d4419cb75adc2bf0") });
// db.movies.findOne({ _id: ObjectId("639d6fc3d4419cb75adc2be5") });

// Update -> UpdateOne, UpdateMany

// db.movies.updateOne({ _id: ObjectId("639d6fc3d4419cb75adc2be5") },
//   {
//     $unset : {
//       ratingsss: 1,
//       "movie status": 1
//     }
//   }
// );

// $in , $nin
// db.movies.find(
//   { genres :{$nin : ["Action", "Thriller"] }},
//  {genres: 1}
// );

// push, pop, shift , unshift

// db.movies.updateOne({ _id: ObjectId("639d6fc3d4419cb75adc2be5") },
// {
//   $pull: {
//     genres: "Action"
//   }
// });

//$pop takes -1 and 1
// -1 removes element from the start
// 1 removes element from end

// db.movies.updateOne({ _id: ObjectId("639d6fc3d4419cb75adc2be5") },
// {
//   $push: {
//     genres : {
//       $each : ["Comedy", "Thriller", "Suspense"]
//     }
//   }
// });

// db.movies.updateOne(
//   { _id: ObjectId("639d6fc3d4419cb75adc2be5") },
//   {
//     $pullAll: {
//       genres: ["Comedy", "Thriller", "Suspense"]
//     }
//   }
// );

// db.movies.updateOne(
//   { _id: ObjectId("639d6fc3d4419cb75adc2be5") },
//   {
//     $inc: {
//       runtime: -5
//     }
//   }
// );

db.movies.find({_id: ObjectId('639d6fc3d4419cb75adc2c5e')}).explain("executionStats")



// Indexing in mongoDB
// Why we need Indexing
// Sharding and replication
// execution stats 