import http from "http";
import fs from "fs";

const PORT = 3000;

const server = http.createServer((request, response) => {
  const { url, method } = request;
  console.log("URL: ", url);

  try {
    if (method === "GET") {
      getHandler(url, response);
    } else if (method === "POST") {
      postHandler(request, response);
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    response.statusCode = 404;
    response.write(error.message);
    response.end("");
  }
});

function getHandler(url, response) {
  let contenido = "";
  response.setHeader("Content-Type", "text/html");
  try {
    if (url === "/") {
      const endpoints = fs.readdirSync("./src");
      contenido = endpoints.map((endpoint) => {
        return `<li><a href="${endpoint}">${endpoint}</a></li>`;
      });

      contenido = `<ul>${contenido.join("")}</ul>`;
    } else {
      contenido = fs.readFileSync(`./src${url}/index.html`).toString();
    }
  } catch (error) {
    try {
      contenido = fs.readFileSync(`./src${url}`).toString();
    } catch (error) {
      throw new Error("404 Not found");
    }
  }
  response.write(contenido);
  response.end("");
}

async function postHandler(req, res) {
  const url = req.url;
  const body = await parseBody(req);
  console.log("Body: ", body);

  switch (url) {
    case "/users":
      const path = "./src/users/users.txt";
      res.statusCode = 201;
      if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "Users: \n\n");
      }

      let contenido = "";
      contenido += `name: ${body.name}\n`;
      contenido += `lastname: ${body.lastname}\n`;
      contenido += `email: ${body.email}\n`;
      contenido += `age: ${body.age}\n\n`;
      fs.appendFileSync(path, contenido);

      res.write("User created");
      res.end("");
      break;

    default:
      throw new Error("404 Not found");
  }
}

async function parseBody(request) {
  return new Promise((resolve, reject) => {
    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = JSON.parse(Buffer.concat(body).toString());
        resolve(body);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
