const Employee = require( "../lib/Employee" );

const employee = new Employee("Ethan", 1111, "ethan@fakemail.com");

test ("Build employee", () => {
    expect(typeof(employee)).toBe("object");
    expect(typeof(employee.name)).toBe("string");
    expect(typeof(employee.id)).toBe("number");
    expect(typeof(employee.email)).toBe("string");
});

test("Test getName()", () => {
    expect(employee.getName()).toBe("Ethan");
 });
 
 test("Test getId()", () => {
    expect(employee.getId()).toBe(1111);
 });
 
 test("Test getEmail()", () => {
    expect(employee.getEmail()).toBe("ethan@fakemail.com");
 });
 
 test("Test getRole()", () => {
    expect(employee.getRole()).toBe("Employee");
 });