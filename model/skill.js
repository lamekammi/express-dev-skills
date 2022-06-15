const skills = [
    {skill: "creative", info: "hello" },
    {skill: "problem solving", info: "hello"},
    {skill: "time management", info: "hello"}
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
}

function getOne(skill) {
    skill = skills.skill;
    return skills.find(skill => skill.skill === skill);
}