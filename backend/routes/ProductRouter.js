const EnsureAuth = require('../middlewares/Auth');

const router = require('express').Router();

router.get('/', EnsureAuth, (req, res)=> {
    res.status(200).json([
        {
            name : 'X',
            price : 10000
        },
        {
            name : 'Y',
            price : 15000
        }
    ])
});

module.exports = router;
