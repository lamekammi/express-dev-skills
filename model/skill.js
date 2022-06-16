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

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id)
    const index = skills.findIndex(skill => skill.id === id);
    skills.splice(index, 1);
}

function update(editContent, id) {
    id = parseInt(id)
    const skillUpdate = skills.find(skill => skill.id === id)
    skillUpdate.skill = editContent.skill
    const infoUpdate = skills.find(updateInfo => updateInfo.id === id)
    infoUpdate.info = editContent.info
}