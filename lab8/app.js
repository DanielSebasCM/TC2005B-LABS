import filesystem from "fs";
import http from "http";

function average(array) {
  let sum = 0;
  for (let element of array) {
    sum += element;
  }
  let r = sum / array.length;
  return r;
}

function text_file(string) {
  filesystem.writeFileSync("text_file.txt", string);
}

function reverseNum(numero) {
  let abc = parseInt(numero.toString().split("").reverse().join(""));
  return abc;
}

const a = [1, 2, 3, 4, 5];
const s = "Hola";
const num = 84217;

console.log(average(a));
text_file(s);
console.log(reverseNum(num));

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.setHeader("Content-Type", "text/html");
  const contenido = filesystem.readFileSync("content.html").toString();
  response.write(contenido);
  response.end("");
});

server.listen(3333);
