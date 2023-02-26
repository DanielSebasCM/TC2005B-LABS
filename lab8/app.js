import filesystem from "fs";
import http from "http";

const PORT = 3000;

function average(array) {
  const sum = array.reduce((a, b) => a + b);
  return sum / array.length;
}

function writeStrToFile(string) {
  filesystem.writeFileSync("text_file.txt", string);
}

function reverseNum(numero) {
  return parseInt(numero.toString().split("").reverse().join(""));
}

console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

writeStrToFile(
  "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
);

console.log(reverseNum(123456789));

const server = http.createServer((request, response) => {
  console.log(request.url);

  response.setHeader("Content-Type", "text/html");
  const contenido = filesystem.readFileSync("content.html").toString();
  response.write(contenido);

  response.end("");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
