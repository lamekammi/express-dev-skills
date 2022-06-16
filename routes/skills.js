var express = require('express');
var router = express.Router();

// All actual paths start with "/skills"
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);

router.get('/new',skillsCtrl.new);

router.get('/:skill', skillsCtrl.show);

router.post('/', skillsCtrl.create);

module.exports = router;
