var inquirer = require("inquirer");
var fs = require("fs");
var { generateShapeSVG } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Please enter text (up to three characters):",
    validate: (input) => {
      return input.length <= 3
        ? true
        : "The text can only be up to 3 characters.";
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color keyword (OR a hexadecimal number):",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape's color (keyword or hexadecimal):",
  },
];

inquirer.prompt(questions).then((answers) => {
  const svgContent = generateSVG(answers);

  // Ensure the examples folder exists, if not create it
  if (!fs.existsSync("examples")) {
    fs.mkdirSync("examples");
  }

  fs.writeFileSync("examples/logo.svg", svgContent);
  console.log("Generated examples/logo.svg");
});

function generateSVG(answers) {
  const baseSvg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

  const shapeSvg = generateShapeSVG(answers.shape, answers.shapeColor);
  const textSvg = `<text x="150" y="105" font-family="Arial" font-size="48" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`;

  return `${baseSvg}${shapeSvg}${textSvg}</svg>`;
}
