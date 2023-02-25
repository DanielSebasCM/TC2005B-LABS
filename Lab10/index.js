import http from "http";
import fs from "fs";

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
    contenido = fs.readFileSync(`./src${url}/index.html`).toString();
  } catch (error) {
    try {
      contenido = fs.readFileSync(`./src${url}`).toString();
    } catch (error) {
      throw new Error("Not found");
    }
  }
  response.write(contenido);
  response.end("");
}

async function postHandler(request, response) {
  const { url } = request;

  const body = await parseBody(request);
  console.log("Body: ", body);

  switch (url) {
    case "/users":
      const path = "./src/users/users.txt";
      response.statusCode = 201;
      if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "Users: \n");
      }
      const contenido = `
name: ${body.name}
lastname: ${body.lastname}
email: ${body.email}
age: ${body.age}
`;
      fs.appendFileSync(path, contenido);

      response.write("User created");
      response.end("");
      break;
    default:
      throw new Error("Not found");
  }
}

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

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
