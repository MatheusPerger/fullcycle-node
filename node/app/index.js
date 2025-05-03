import { createServer } from 'node:http';
import mysql from 'mysql'

const port = 3000;
let nameCounter = 1;

const connection = mysql.createConnection({
  host: 'db',
  user: "root",
  password: "root",
  database:'mydb'
});

const server = createServer(async (req, res) => {
  if (req.url !== '/') {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    return res.end();
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Full Cycle Rocks!</h1><br>');
  insertNewName();
  fetchData(res);
});

const insertNewName = () => {
  const newName = `Matheus${nameCounter}`;
  const sql = `INSERT INTO people(name) values('${newName}')`;
  connection.query(sql);

  nameCounter++;
}

const fetchData = (response) => {
  const sql = `SELECT name FROM people`;
  connection.query(sql, function (error, result, fields) {
    if (error) throw error;

    result.map(row => row.name)
      .forEach(element => {
        response.write(`<li>${element}</li>`);
      });

      response.end();
  });
}

server.listen(port, () => {
  console.log('Listening on localhost:3000');
});