const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/sep22DB");
mongoose.connect("mongodb+srv://ankushkapoor179:vkBxJEwXbQ8AAVjX@cluster0.84gopwa.mongodb.net/?retryWrites=true&w=majority");

const db = mongoose.connection;
db.on("error", (err) => {
  console.log("Error connecting", err);
});

db.once("open", () => {
  console.log("Successfully connected to DB");
});

//vkBxJEwXbQ8AAVjX