const User = require("../model/User");
const bcrypt = require("bcrypt");
const salt = 10;
const jwt = require("jsonwebtoken");

// First Syntax
// const signup = () => {

// }

// module.exports = {
//   signup
// }

// Second Syntax
// exports.signup = () => {

// }

// Third Syntax

// module.exports = {
//   signup : () => {

//   }
// }

exports.signup = async (req, res) => {
  try {
    // We need to check if user is already signed up
    const userExists = await User.findOne({ email: req.body.email });
    console.log("user ---", userExists);

    // If user already exists
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User already exists, Try signin" });
    }

    // We need to encrypt the user password
    const encrypedPassword = bcrypt.hashSync(req.body.password, salt);
    console.log(encrypedPassword);

    // If not existing
    // Then we create the user
    const createUser = await User.create({
      ...req.body,
      password: encrypedPassword
    });

    res.status(200).json({ message: "User Created Successfully" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

exports.signin = async (req, res) => {
  try {
    // req -->  email, password
    // We need to verify if the user is signedup or not?

    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res
        .status(400)
        .json({ message: "User does not exist, Please Signup first" });
    }

    const { firstName, _id, role } = userExists;

    // Verify the password
    const isPasswordCorrect = bcrypt.compareSync(password, userExists.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Password is not correct" });
    }

    const token = jwt.sign({ firstName, _id, role }, "secret", {
      expiresIn: "2h"
    });

    return res.status(200).json({ token, message: "Signin success" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
