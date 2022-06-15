var express = require('express');
var router = express.Router();

// All actual paths start with "/skills"
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/:skill', skillsCtrl.show);

module.exports = router;
