const router = require('express').Router();
const adminCtrl = require('../controllers/adminCtrl');
const auth = require('../middleware/auth');

router.get('/', auth, adminCtrl.getAllDetails);

module.exports = router;