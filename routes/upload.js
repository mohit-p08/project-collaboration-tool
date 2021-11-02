const router = require('express').Router();
const uploadImage = require('../middleware/uploadImage');
const uploadCtrl = require('../controllers/uploadCtrl');
const auth = require('../middleware/auth');

// routes for various request
router.post('/upload_avatar', uploadImage, auth, uploadCtrl.uploadAvatar);
// router.post('/uploadprojectimage', uploadImage, auth, uploadCtrl.uploadAvatar)

module.exports = router;