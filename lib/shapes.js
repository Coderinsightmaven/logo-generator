class Shape {
  constructor() {
    this.color = "black"; // default color
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error("This method should be implemented by the subclasses.");
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
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

function generateShapeSVG(shapeType, color) {
  const shape = new shapeType();
  shape.setColor(color);
  return shape.render();
}

module.exports = {
  Triangle,
  Circle,
  Square,
  generateShapeSVG,
};
