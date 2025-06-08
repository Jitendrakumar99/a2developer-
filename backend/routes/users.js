var express = require('express');
var router = express.Router();
const {userdetails}=require('../Controllers/User')

router.post("/user",userdetails);

module.exports = router;
