const Employee = require('../lib/Employee');
const employee = new Employee('nate', '111111', 'natenaranjodev@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('nate');
    expect(employee.id).toBe('111111');
    expect(employee.email).toBe('natenaranjodev@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('nate');
});

test('test if we can get the id from the getID() method', () => {
    expect(employee.getID()).toBe('111111');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('natenaranjodev@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});