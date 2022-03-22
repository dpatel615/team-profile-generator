// using Employee constructor
const Employee = require('../lib/Employee');

// create employee object 
test('create an employee object', () => {
    const employee = new Employee('Drusti',301,'drustipatel1234@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


// get name from getName()
test('gets employee name', () => {
    const employee = new Employee('Drusti',301,'drustipatel1234@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
})


//get id from getID()
test('gets employee ID', () => {
    const employee = new Employee('Drusti',301,'drustipatel1234@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// get emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Drusti',301,'drustipatel1234@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//get role from getRole
test('gets role of employee', () => {
    const employee = new Employee('Drusti',301,'drustipatel1234@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
})


