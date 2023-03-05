const Intern = require("../lib/intern");

const intern = new Intern("Ethan", 1111, "ethan@fakemail.com", "University of Utah");

test ("Build intern", () => {
    expect(typeof(intern)).toBe("object");
    expect(typeof(intern.name)).toBe("string");
    expect(typeof(intern.id)).toBe("number");
    expect(typeof(intern.email)).toBe("string");
    expect(typeof(intern.school)).toBe("string");
});

test("Test getName()", () => {
    expect(intern.getName()).toBe("Ethan");
 });
 
 test("Test getId()", () => {
    expect(intern.getId()).toBe(1111);
 });
 
 test("Test getEmail()", () => {
    expect(intern.getEmail()).toBe("ethan@fakemail.com");
 });
 
 test("Test getRole()", () => {
    expect(intern.getRole()).toBe("Intern");
 });

 test("Test getSchool()", () => {
    expect(intern.getSchool()).toBe("University of Utah");
 });