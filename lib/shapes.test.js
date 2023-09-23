const { Triangle, Circle, Square } = require("./shapes");

describe("Shapes Tests", () => {
  test("Triangle render method returns correct SVG string", () => {
    const triangle = new Triangle("red");
    expect(triangle.render()).toBe(
      '<polygon points="150,50 100,150 200,150" fill="red" />'
    );
  });

  test("Circle render method returns correct SVG string", () => {
    const circle = new Circle("blue");
    expect(circle.render()).toBe(
      '<circle cx="150" cy="100" r="50" fill="blue" />'
    );
  });

  test("Square render method returns correct SVG string", () => {
    const square = new Square("green");
    expect(square.render()).toBe(
      '<rect x="100" y="50" width="100" height="100" fill="green" />'
    );
  });
});
