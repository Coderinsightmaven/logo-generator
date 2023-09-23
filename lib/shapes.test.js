const { Triangle, Circle, Square } = require("./shapes");

describe("Shapes Tests", () => {
  test("Triangle render method returns correct SVG string", () => {
    const triangle = new Triangle();
    triangle.setColor("red");
    expect(triangle.render()).toBe(
      '<polygon points="150,18 244,182 56,182" fill="red" />'
    );
  });

  test("Circle render method returns correct SVG string", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toBe(
      '<circle cx="150" cy="100" r="50" fill="blue" />'
    );
  });

  test("Square render method returns correct SVG string", () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toBe(
      '<rect x="100" y="50" width="100" height="100" fill="green" />'
    );
  });
});
