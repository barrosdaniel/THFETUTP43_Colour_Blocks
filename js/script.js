var html = '';
var red;
var green;
var blue;
var rgbColor;

function generateRandomValue() {
  return Math.floor(Math.random() * 256);
}

function generateRandomColor() {
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

for (var i = 1; i <= 10; i++) {
  red = generateRandomValue();
  green = generateRandomValue();
  blue = generateRandomValue();
  rgbColor = generateRandomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);