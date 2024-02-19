const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt =require("bcrypt")
const jwt = require("jsonwebtoken")
const jwtSecret= "mynameisamitdhadangefoodapknode#"

router.post("/createUser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 2 }),
    body("password", "min lentgh 6").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt=await bcrypt.genSalt(10);
    let secpassword =await bcrypt.hash(req.body.password, salt)
    try {
      await User.create({
        name: req.body.name,
        password: secpassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
router.post("/LoginUser",
  [
    body("email").isEmail(),
    body("password", "min lentgh 6").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userdata = await User.findOne({ email });
      if (!userdata) {
        return res
          .status(400)
          .json({ errors: "try login with currect credintals" });
      }

      const pwdcompare =await bcrypt.compare(req.body.password,userdata.password)
      if (!pwdcompare) {
        return res
          .status(400)
          .json({ errors: "try login with currect credintals" });
      }
      const data={
        user:{
          id:userdata.id
        }
      }
  const authtoken = jwt.sign(data,jwtSecret)
      return res.json({ success: true,authtoken:authtoken});
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
