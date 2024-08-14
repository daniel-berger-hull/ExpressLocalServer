import  express from 'express';
import chalk from 'chalk';


const app = express();

const SERVER_PORT = 4000;

app.get('/', function (req, res) {
  res.send(`Local Express Server replied on port ${SERVER_PORT}!`);
})



app.listen(SERVER_PORT);
console.log(`Local Express Server listening on port ` + chalk.green(SERVER_PORT));

