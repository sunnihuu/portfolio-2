// Animated Perlin-noise dot grid background (p5.js)
const sketch = (p) => {
  let xScale = 0.012;
  let yScale = 0.014;
  let gap = 40;
  let offset = 0;

  p.setup = () => {
    const c = p.createCanvas(p.windowWidth, p.windowHeight);
    c.id('noise-bg-canvas');
    c.style('position', 'fixed');
    c.style('top', '0');
    c.style('left', '0');
    c.style('z-index', '-10');
    c.style('pointer-events', 'none');
    c.style('display', 'block');
    p.noStroke();
    p.pixelDensity(Math.min(2, p.pixelDensity()));
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.clear();
    offset += 0.35;

    // shift the noise field subtly with pointer movement
    const mx = p.map(p.mouseX, 0, p.width, -100, 100);
    const my = p.map(p.mouseY, 0, p.height, -100, 100);

    for (let x = gap / 2; x < p.width; x += gap) {
      for (let y = gap / 2; y < p.height; y += gap) {
        const noiseValue = p.noise((x + offset + mx) * xScale, (y + offset + my) * yScale);
        const diameter = noiseValue * gap * 0.9 + 2;
        // soft graphite tone to sit on a white canvas
        p.fill(40, 44, 52, 26 + 30 * noiseValue);
        p.circle(x, y, diameter);
      }
    }
  };
};

new p5(sketch);
