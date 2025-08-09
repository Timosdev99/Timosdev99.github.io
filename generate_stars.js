function generateStars(count, minSize, maxSize) {
  let stars = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000); 
    const y = Math.floor(Math.random() * 2000); 
    const size = Math.random() * (maxSize - minSize) + minSize;
    stars.push(`${x}px ${y}px 0 ${size}px #FFF`);
  }
  return stars.join(',');
}

const smallStars = generateStars(700, 0.5, 1.5);
const mediumStars = generateStars(200, 1.5, 2.5);
const largeStars = generateStars(50, 2.5, 3.5);

process.stdout.write(`
.stars-small {
  box-shadow: ${smallStars};
}

.stars-medium {
  box-shadow: ${mediumStars};
}

.stars-large {
  box-shadow: ${largeStars};
}
`);
