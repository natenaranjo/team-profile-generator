const Manager = require('../lib/Manager');
const manager = new Manager('Jax Doe', '444', 'jaxdoe@gmail.com', '42');

test('testing returning valvues of engineer object', () => {
    expect(manager.name).toBe('Jax Doe');
    expect(manager.id).toBe('444');
    expect(manager.email).toBe('jaxdoe@gmail.com');
    expect(manager.number).toBe('42');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Jax Doe');
});

test('test if we can get the id from the getID() method', () => {
    expect(manager.getID()).toBe('444');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('jaxdoe@gmail.com');
});

test('test if we can get the github form the getNumber() methos', () => {
    expect(manager.getNumber()).toBe('42');
})

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});