const Engineer = require('../lib/Engineer');
const engineer = new Engineer('John Doe', '222', 'johndoe@gmail.com', 'johndoe');

test('testing returning valvues of engineer object', () => {
    expect(engineer.name).toBe('John Doe');
    expect(engineer.id).toBe('222');
    expect(engineer.email).toBe('johndoe@gmail.com');
    expect(engineer.github).toBe('johndoe');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('John Doe');
});

test('test if we can get the id from the getID() method', () => {
    expect(engineer.getID()).toBe('222');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('johndoe@gmail.com');
});

test('test if we can get the github form the getGithub() methos', () => {
    expect(engineer.getGithub()).toBe('johndoe');
})

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});