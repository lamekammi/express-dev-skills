const skills = [
    {id: 0421, skill: "creative", info: "hello" },
    {id: 0814, skill: "problem solving", info: "hey"},
    {id: 0216, skill: "time management", info: "hi"}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
};

function getAll() {
    return skills;
}

function getOne(skill) {
    return skills.find(currentSkill => currentSkill.skill === skill);
}

function create(skill) {
    skills.push(skill);
}

function deleteOne(skill) {
    const index = skills.findIndex(currentSkill => currentSkill.skill === skill);
    skills.splice(index, 1);
}

function update(editContent, skill) {
    const skillUpdate = skills.find(currentSkill => currentSkill.skill === skill)
    skillUpdate.skill = editContent.skill
}