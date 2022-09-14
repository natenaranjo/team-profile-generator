const Intern = require('../lib/Intern');
const intern = new Intern('Jane Doe', '333', 'janedoe@gmail.com', 'University of Texas');

test('testing returning valvues of engineer object', () => {
    expect(intern.name).toBe('Jane Doe');
    expect(intern.id).toBe('333');
    expect(intern.email).toBe('janedoe@gmail.com');
    expect(intern.school).toBe('University of Texas');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Jane Doe');
});

test('test if we can get the id from the getID() method', () => {
    expect(intern.getID()).toBe('333');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('janedoe@gmail.com');
});

test('test if we can get the github form the getSchool() methos', () => {
    expect(intern.getSchool()).toBe('University of Texas');
})

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});