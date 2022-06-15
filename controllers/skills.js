const Skill = require('../model/skill');

module.exports = {
    index,
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}