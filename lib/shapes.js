class Shape {
  constructor(color) {
    this.color = color;
  }

  render() {
    throw new Error("This method should be implemented by the subclasses.");
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}

function generateShapeSVG(shape, color) {
  switch (shape) {
    case "circle":
      return new Circle(color).render();
    case "triangle":
      return new Triangle(color).render();
    case "square":
      return new Square(color).render();
    default:
      return "";
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
  generateShapeSVG,
};
