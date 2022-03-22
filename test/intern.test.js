// using intern constructor
const intern = require('../lib/intern');

// creating intern object

test('creates an intern object', () => {
    const Intern = new intern('Drusti', 301, 'drustipatel1234@gmail.com','GT');

    expect(Intern.school).toEqual(expect.any(String));
});

//gets school from getSchool()

test('gets employee school', () => {
    const Intern = new intern('Drusti', 301, 'drustipatel1234@gmail.com','GT');

    expect(Intern.getSchool()).toEqual(expect.stringContaining(Intern.school.toString()));
});

// gets role from getRole()

test('gets role of employee', () => {
    const Intern = new intern('Drusti', 301, 'drustipatel1234@gmail.com','GT');

    expect(Intern.getRole()).toEqual("intern");
});