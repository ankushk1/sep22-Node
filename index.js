const express = require("express"); // returns a express function
const app = express(); // invoking the express
const port = 8000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// app.get("/", (req, res) => {
//   res.send("<p>Nodejs server running with nodemon</p>");
// });

// app.get("/users/:id/:name", (req, res) => {
//   // console.log(req.query)
//   console.log(req.params)
//   res.status(500).json({...req.params, message: "Success"})
// });

let userArr = [
  {
    id: Math.floor(Math.random() * 1000),
    name: "user 1"
  },
  {
    id: Math.floor(Math.random() * 1000),
    name: "user 2"
  }
];

app.get("/users", (req, res) => {
  // check if users are not there or user arr is empty
  if (userArr.length === 0) {
    return res.json({ message: "Users not found" });
  }
  return res.json({ userArr });
});

app.post("/create", (req, res) => {
  // Check if we are getting user name from req.body
  const username = req.body.name;

  if (!username) {
    return res.status(400).json({ message: "user name not provided" });
  }

  const newUser = {
    id: Math.floor(Math.random() * 1000),
    name: username
  };

  userArr.push(newUser);
  return res.json({ message: "Users added successfully" });
});

app.delete("/deleteUser/:id", (req, res) => {
  // Get the id from req.params
  const { id } = req.params;
  // Now we want to find the index of elem having this id
  // Find Index
  // const elemIndex = userArr.findIndex((elem) => elem.id == id);
  // console.log(elemIndex)
  // if (elemIndex === -1) {
  //   return res.json({ message: "No user found with the id passed" });
  // }

  // userArr.splice(elemIndex, 1);
  // This comment is for git
  const filteredArr = userArr.filter((elem) => elem.id != id);
  if (filteredArr.length === userArr.length) {
    return res.json({ message: "No user found with the id passed" });
  }

  userArr = filteredArr;

  return res.json(
    { message: "User Deleted Successfully" }
    );
});

app.put("/updateUser/:id", (req, res) => {
  // Get the id from req.params
  const { id } = req.params;
  const elemIndex = userArr.findIndex((elem) => elem.id == id);
  if (elemIndex === -1) {
    return res.json({ message: "No user found with the id passed" });
  }

  const newUser = {
    id : Number(id),
    name: req.body.name
  };
  // userArr[elemIndex] = newUser;
  userArr.splice(elemIndex, 1, newUser);
  return res.json({ message: "User Updated Successfully" });
});

app.listen(port, () => {
  console.log("Sever running on port:", port);
});
