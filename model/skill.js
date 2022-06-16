const skills = [
    {skill: "creative", info: "hello" },
    {skill: "problem solving", info: "hey"},
    {skill: "time management", info: "hi"}
];

module.exports = {
    getAll,
    getOne,
    create,
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