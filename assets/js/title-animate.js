
var i = 0;
var txt = 'hello' + Array(1).fill('\xa0').join('') +  'there' + Array(1).fill('\xa0').join('') + '.....';
var speed = 250;

function typeWriter() {
  if (i < txt.length) {
    document.title += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()