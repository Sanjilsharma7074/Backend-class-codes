1. app.use("/user", (req, res, next) => {
  console.log("Path specific middleware");
  next();
});

this will run for only those API request which starts with "/user"
eg - /user/all, /user/all/detail/order - will run this path specific middleware
/user-all, /userAll will not run this middleware

2. What's wrong?
You defined two app.get("/") routes. In Express:

Only the first matching route is used.

The second one will never be reached, because the response is already sent in the first route.

You're calling next() after sending the response using res.json(), which is incorrect.

Once a response is sent (res.json, res.send, etc.), you should not call next() or attempt to send another response — that will cause an error like "Cannot set headers after they are sent to the client."


// Home route
app.get("/", verifyUser,  (req, res, next) => {
  console.log("home api");
  res.json({ Message: "server is live" });
  next();
});
app.get("/", (req, res) => {
  console.log("home api 2");
  res.json({ Message: "server is live 2nd time" });
});
