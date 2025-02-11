// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "None") return "";

  const badges = {
    "MIT": "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    "Apache 2.0": "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
    "GPL v3": "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
  };

  return badges[license] || "";
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === "None") return "";

  const links = {
    "MIT": "https://opensource.org/licenses/MIT",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    "GPL v3": "https://www.gnu.org/licenses/gpl-3.0",
  };

  return links[license] || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "None") return "";

  return `## License

This project is licensed per the license provided in the **${license}** file. 
Please visit [${license}](${renderLicenseLink(license)}) for additional information.`            
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#tests)
  - [Contact](#contact)
  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.test}

  ## Contact
  If you have any questions, you can contact me at:
    -Github: [${data.github}](https://github.com${data.github})
    -Email: [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;
