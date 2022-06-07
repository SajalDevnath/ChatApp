const express = require("express");
const { registerUser } = require("../controllers/userControllers");

const router = express.Router();

router.post("/api/user", registerUser);

// router.get('/user',function(req, res){
//     res.send("helo world")
// });

module.exports = router;
