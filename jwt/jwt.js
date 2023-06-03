const jwt = require("jsonwebtoken");

exports.validateJWT = (req, res, next) => {
  try {
    const token = req.headers["access-token"];
    if (!token) {
      return res.status(400).json({ message: "Jwt Token in required" });
    }

    // Verify this token
    jwt.verify(token, "secret", function (err, data) {
      if (err) {
        if (err.message === "jwt expired") {
          return res.status(400).json({ message: "Token Invalid" });
        }
        console.log(err);
        return res.status(400).json({ message: err.message });
      }

      req.body.userId = data._id;
      next();
    });
  } catch (err) {
    return res.status(500).json({ err });
  }
};


