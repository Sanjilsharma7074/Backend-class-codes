// Generic middleware
const genericMiddleware =(req, res, next) => {
  console.log("Generic middleware 1 ");
  next();
};

// Path-specific middleware for /user
const pathSpecific = ("/user", (req, res, next) => {
  console.log("Path specific middleware");
  next();
});

function verifyUser(req, res, next) {
  console.log("user verified");
  next();
}

module.exports = {
  verifyUser,
  genericMiddleware,
  pathSpecific
}