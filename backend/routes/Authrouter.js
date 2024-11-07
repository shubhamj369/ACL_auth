const { signup, login } = require('../controllers/AuthController');
const { signupValidation, loginValidation } = require('../middlewares/Validator');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
module.exports = router;
