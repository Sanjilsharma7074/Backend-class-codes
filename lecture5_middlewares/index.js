const express = require("express");
const { genericMiddleware, pathSpecific, verifyUser } = require("./middleware/practice.middleware");
const app = express();
const PORT = 5000;

app.use(genericMiddleware);
app.use("/user", pathSpecific);
// app.use(verifyUser);

// Home route
app.get("/", verifyUser,  (req, res, next) => {
  console.log("home api");
  res.json({ Message: "server is live" });
  // next();
});
// app.get("/", (req, res) => {
//   console.log("home api 2");
//   res.json({ Message: "server is live 2nd time" });
// });

// /user route
app.get("/user", (req, res) => {
  console.log("/user api");
  res.json({ Message: "/user server is live" });
});

// Start server with PORT
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
