// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer object

test('create an Engineer object', () => {
    const engineer = new Engineer('Drusti',301,'drustipatel1234@gmail.com');

    expect(engineer.github).toEqual(expect.any(String));
});

// gets github from getgithub()

test('gets engineer github value', () => {
    const engineer = new Engineer('Drusti',301,'drustipatel1234@gmail.com');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role fron getrole()
 
test('gets role of employee', () => {
    const engineer = new Engineer('Drusti',301,'drustipatel1234@gmail.com');

    expect(engineer.getRole()).toEqual("Engineer");


});
