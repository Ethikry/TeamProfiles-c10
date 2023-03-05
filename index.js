const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const addEmployeeQs = require("./lib/addEmployeeQs");
const employeeQs = require("./lib/employeeQs");

const htmlTemplate = require("./lib/htmlTemplate.js");

let teamMembers = [];

const writeToFile = (htmlArr) => {
  return new Promise((resolve, reject) => {
    // Use team name as output file name
    outputFileName = teamMembers[0].toLowerCase();
    outputFileName = outputFileName.replace(/ /g, "-");

    fs.writeFile(
      `./dist/${outputFileName}.html`,
      htmlArr.join(""),
      function (err) {
        // If there's an error, reject the Promise and send the error to the Promise's `.catch() ` method.
        if (err) {
          reject(err);
          // Return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well.
          return;
        } else {
          // If everything went well, resolve the Promise and send the successful
          // data to the `.then()` method.
          resolve({
            ok: true,
            message:
              'File created! Your output HTML file is located in the "dist" folder.',
          });
        }
      }
    );
  });
};

function buildHtml() {
  const htmlArr = htmlTemplate.generateHtml(teamMembers);
  writeToFile(htmlArr);
}

function addTeamMember() {
  inquirer.prompt(addEmployeeQs).then(function (data) {
    switch (data.selections) {
      case "Add an engineer":
        addEmployee("engineer");
        // addEngineer();
        break;
      case "Add an intern":
        addEmployee("intern");
        // addIntern();
        break;
      case "Finish building team":
        buildHtml();
    }
  });
}

function addEmployee(employeeType) {
  inquirer.prompt(employeeQs).then(function (data) {
    const name = data.name;
    const id = data.id;
    const email = data.email;

    switch (employeeType) {
      case "manager":
        inquirer
          .prompt([
            {
              type: "input",
              name: "officeNumber",
              message:
                "Please enter the office number for your team's manager: ",
            },
          ])
          .then(function (data) {
            const officeNumber = data.officeNumber;

            const teamMember = new Manager(name, id, email, officeNumber);
            teamMembers.push(teamMember);

            addTeamMember();
          });
        break;

      case "engineer":
        inquirer
          .prompt([
            {
              type: "input",
              name: "github",
              message: "Please enter the github profile of the engineer: ",
            },
          ])
          .then(function (data) {
            const github = data.github;

            const teamMember = new Engineer(name, id, email, github);
            teamMembers.push(teamMember);

            addTeamMember();
          });
        break;

      case "intern":
        inquirer
          .prompt([
            {
              type: "input",
              name: "school",
              message: "Please enter the school the intern is attending: ",
            },
          ])
          .then(function (data) {
            const school = data.school;

            const teamMember = new Intern(name, id, email, school);
            teamMembers.push(teamMember);

            addTeamMember();
          });
        break;
    }
  });
}

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "teamName",
        message:
          "Welcome to the Team Profile Generator. Please enter a name for your team: ",
      },
    ])
    .then(function (data) {
      const teamName = data.teamName;
      teamMembers.push(teamName);
      console.log(
        "Thank you. The team name is " +
          teamName +
          ". Please continue by filling out information for your manager first."
      );

      addEmployee("manager");
    });
}

init();
