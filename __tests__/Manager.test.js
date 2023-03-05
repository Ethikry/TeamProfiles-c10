const Manager = require("../lib/manager");

const manager = new Manager("Ethan", 1111, "ethan@fakemail.com", "01");

test ("Build employee", () => {
    expect(typeof(manager)).toBe("object");
    expect(typeof(manager.name)).toBe("string");
    expect(typeof(manager.id)).toBe("number");
    expect(typeof(manager.email)).toBe("string");
    expect(typeof(manager.officeNumber)).toBe("string");
});

test("Test getName()", () => {
    expect(manager.getName()).toBe("Ethan");
 });
 
 test("Test getId()", () => {
    expect(manager.getId()).toBe(1111);
 });
 
 test("Test getEmail()", () => {
    expect(manager.getEmail()).toBe("ethan@fakemail.com");
 });
 
 test("Test getRole()", () => {
    expect(manager.getRole()).toBe("Manager");
 });