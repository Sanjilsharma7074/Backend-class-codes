const express = require("express");
const router = express.Router();

// called if the request if of GET type and has a path of /user/bulk/upload
router.get("/bulk/upload", async (req, res) => {
  try {
    await bulkUserUpload();
    res.status(200).json({ message: "users uploaded successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// called if the request is POST and has the path of /user/create
router.post("/create", async (req, res) => {
  try {
    const { name, email, age, DOB } = req.body;
    //DOB will occur in string , hence when you insert it into your DB typecast it to the Date type
    const user = await User.create({
      name: name, //l-value is the key name the name which we destructured above while  r-value is the value we got from the user
      email: email,
      age: age,
      DOB: new Date(DOB),
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;