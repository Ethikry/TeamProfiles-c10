const Engineer = require("../lib/engineer");

const engineer = new Engineer("Ethan", 1111, "ethan@fakemail.com", "ethikry");

test ("Build engineer", () => {
    expect(typeof(engineer)).toBe("object");
    expect(typeof(engineer.name)).toBe("string");
    expect(typeof(engineer.id)).toBe("number");
    expect(typeof(engineer.email)).toBe("string");
    expect(typeof(engineer.github)).toBe("string");
});

test("Test getName()", () => {
    expect(engineer.getName()).toBe("Ethan");
 });
 
 test("Test getId()", () => {
    expect(engineer.getId()).toBe(1111);
 });
 
 test("Test getEmail()", () => {
    expect(engineer.getEmail()).toBe("ethan@fakemail.com");
 });
 
 test("Test getRole()", () => {
    expect(engineer.getRole()).toBe("Engineer");
 });

 test("Test getGithub()", () => {
    expect(engineer.getGithub()).toBe("ethikry");
 });