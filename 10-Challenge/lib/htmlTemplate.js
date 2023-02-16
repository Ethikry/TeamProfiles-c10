module.exports = {
  generateHtml(teamMembers) {
    const htmlArr = [];

    const htmlHeader = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link rel = "stylesheet" href = "../src/styles.css">
</head>

<body>
<div class = "title-bar">
<h1>${teamMembers[0]} Members</h1>
</div>

<div class = "card-container">
       `;
    htmlArr.push(htmlHeader);

    for (let i = 1; i < teamMembers.length; i++) {
      let htmlTeamMember = `
      <div class = "team-member-card">
      <div class = "team-member-card-top">
         <h2>${teamMembers[i].name}</h2>
        `;
      if (teamMembers[i].role === "Manager") {
        htmlTeamMember += `<h2 class="bi bi-cup">  ${teamMembers[i].role}</h2>`;
      } else if (teamMembers[i].role === "Engineer") {
        htmlTeamMember += `<h2 class="bi bi-lightbulb">  ${teamMembers[i].role}</h2>`;
      } else if (teamMembers[i].role === "Intern") {
        htmlTeamMember += `<h2 class="bi bi-eyeglasses">  ${teamMembers[i].role}</h2>`;
      }

      htmlTeamMember += `
      </div>
      <div class = "team-member-card-bottom">
         <p><b>Employee ID:</b> ${teamMembers[i].id}</p>
         <P><b>Email:</b><br><a href = "mailto:${teamMembers[i].email}">${teamMembers[i].email}</a></p>
   `;

      // If the team member is the manager, display the office number.
      if (teamMembers[i].officeNumber) {
        htmlTeamMember += `<p><b>Office Number:</b><br>${teamMembers[i].officeNumber}</p>`;
      }
      // If the team member is an engineer, display the Github username.
      else if (teamMembers[i].github) {
        htmlTeamMember += `<p><b>GitHub:</b><br><a href = "https://github.com/${teamMembers[i].github}">${teamMembers[i].github}</a></p>`;
      }
      // If the team member is an intern, display the intern's school name.
      else if (teamMembers[i].school) {
        htmlTeamMember += `<p><b>School:</b><br>${teamMembers[i].school}</p>`;
      }

      htmlTeamMember += `
      </div>
   </div>
   `;
      htmlArr.push(htmlTeamMember);
    }

    const htmlFooter = `
        </div>   
     </body>
     </html>
     `;
    htmlArr.push(htmlFooter);

    return htmlArr;
  },
};
