// Get the canvas element
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 400; // 1. Set the width
canvas.height = 400;

// Draw the yellow circle (face)
ctx.beginPath(); // 1. Begin the path
ctx.arc(200, 200, 150, 0, Math.PI * 2); // 2. Draw the circle
ctx.fillStyle = 'yellow'; // 3. Set the fill color
ctx.fill(); // 4. Fill the circle
ctx.strokeStyle = 'black'; // 5. Set the stroke color
ctx.lineWidth = 3; // 6. Set the line width
ctx.stroke(); // 7. Stroke the circle

// Draw the left eye
ctx.beginPath(); // 1. Begin the path
ctx.arc(140, 150, 20, 0, Math.PI * 2); // 2. Draw the circle
ctx.fillStyle = 'black'; // 3. Set the fill color
ctx.fill(); // 4. Fill the circle

// Draw the right eye
ctx.beginPath(); // 1. Begin a new path
ctx.arc(260, 150, 20, 0, Math.PI * 2); // 2. Draw the circle
ctx.fill(); // 3. Fill the circle

// Draw the smile
ctx.beginPath(); // 1. Begin a new path
ctx.arc(200, 200, 90, 0, Math.PI); // 2. Draw the arc
ctx.lineWidth = 5; // 3. Set the line width
ctx.stroke(); // 4. Stroke the arc
