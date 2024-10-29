const express= require('express');
const {handleusersignup} = require("../controllers/users")
const router = express.Router();

router.post('/',  handleusersignup)

module.exports = router;

