const router = require('express').Router();
const contactCtrl = require('../controllers/contactCtrl');

router.post('/', contactCtrl.postRequest);

module.exports = router;