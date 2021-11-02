const router = require('express').Router();
const adminCtrl = require('../controllers/adminCtrl');
const auth = require('../middleware/auth');

// route to get details
router.get('/', auth, adminCtrl.getAllDetails);

module.exports = router;