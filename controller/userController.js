const User = require("../model/User");

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
  // We need to check if user is already signedup

  try {
    const userExists = await User.findOne({ email: req.body.email });
    console.log("user ---", userExists);

    // If user already exists
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User already exists, Try signin" });
    }

    //If not existing
    // Then we create the user
    const createUser = await User.create(req.body);
    res.status(200).json({ message: "User Created Successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({err: err.message})
  }
};
