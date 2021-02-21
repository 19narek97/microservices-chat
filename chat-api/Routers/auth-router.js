const {Router} = require('express')
const {
    AuthController:{SignUp}
} = require('../Controllers')

const router = Router();

router.post('/signUp',SignUp)

module.exports = router
