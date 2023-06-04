const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/sep22DB");
mongoose.connect("mongodb+srv://ankushkapoor179:BVLusytn0l2F1lMi@cluster0.0rvakmp.mongodb.net/?retryWrites=true&w=majority");

const db = mongoose.connection;
db.on("error", (err) => {
  console.log("Error connecting", err);
});

db.once("open", () => {
  console.log("Successfully connected to DB");
});

//BVLusytn0l2F1lMi