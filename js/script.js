var html = '';
var rgbColor;

function generateRandomValue() {
  return Math.floor(Math.random() * 256);
}

function generateRandomColor() {
  var color = 'rgb(';
  color += generateRandomValue() + ',';
  color += generateRandomValue() + ',';
  color += generateRandomValue() + ')';
  return color;
}

for (var i = 1; i <= 10; i++) {
  rgbColor = generateRandomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);