import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';

const PowerShell = require("powershell");

// Start the process
let ps = new PowerShell("echo 'powershell is awesome'");
console.log(ps)
// Handle process errors (e.g. powershell not found)
ps.on("error", err => {
    console.error(err);
});

export const VARIABLES = process.env;
if (VARIABLES.NODE_ENV == "test") {
    dotenv.config();
  }

import { Db, Decimal128, MongoClient, ObjectId } from 'mongodb';
const mongoClient: MongoClient = new MongoClient("mongodb://localhost:27017/");
export const mongodbRead: Db = mongoClient.db("SchedulerDB");
export const mongodbWrite: Db = mongoClient.db("SchedulerDB");

import cors from 'cors';
import bodyParser from 'body-parser';

import { router as schedulersRoute } from './routes/schedulers/routes';
import { router as commandsRoute } from './routes/commands/routes';

//For env File 
// dotenv.config();

const app: Application = express();
const port = VARIABLES.PORT || 8000;

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cors())
  .use('/', schedulersRoute)
  .use('/run-script', commandsRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

// const { exec } = require('child_process');
// import {getCommand} from './models/command'
// Komutu çekip sunucuda çalıştırma
// app.get('/run-script/:id', async (req, res) => {
//   const commandId = req.params.id;
  
//   // MongoDB'den komutu çek
//   const command = await getCommand(commandId);
  
//   if (command) {
//     // Shell komutunu çalıştır
//     exec(command.script, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Hata: ${error.message}`);
//         return res.status(500).json({ error: 'Komut çalıştırılamadı.' });
//       }
//       if (stderr) {
//         console.error(`stderr: ${stderr}`);
//         return res.status(500).json({ error: stderr });
//       }

//       const formattedOutput = stdout.replace(/\n/g, '<br>');
//       res.send(`<pre>${formattedOutput}</pre>`);         
//       //console.log(`stdout: ${stdout}`);
//       //res.json({ output: stdout });
//     });
//   } else {
//     res.status(404).json({ error: 'Komut bulunamadı.' });
//   }
// });


// app.get('/run-powershell/:id', async (req, res) => {
//   const commandId = req.params.id;
  
//   // MongoDB'den komutu çek
//   const command = await getCommand(commandId);
//   //const command = 'Get-Process | ConvertTo-Json'
//   if (command) {
//     // Shell komutunu çalıştır
//     exec(`powershell -Command "${command.script}"`, {maxBuffer: 1024 * 1024 * 10}, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Hata: ${error.message}`);
//         return res.status(500).json({ error: 'Komut çalıştırılamadı.' });
//       }
//       if (stderr) {
//         console.error(`stderr: ${stderr}`);
//         return res.status(500).json({ error: stderr });
//       }

//       const formattedOutput = stdout.replace(/\n/g, '<br>');
//       res.send(`<pre>${formattedOutput}</pre>`);         
//       //console.log(`stdout: ${stdout}`);
//       //res.json({ output: stdout });
//     });
//   } else {
//     res.status(404).json({ error: 'Komut bulunamadı.' });
//   }
// });

// PowerShell komutunu çalıştıran fonksiyon
// function runPowerShell(command) {
//   return new Promise((resolve, reject) => {
//     exec(`powershell.exe ${command.script}`, (error, stdout, stderr) => {
//       if (error) {
//         reject(`Hata: ${error.message}`);
//       }
//       if (stderr) {
//         reject(`Stderr: ${stderr}`);
//       }
//       resolve(stdout);
//     });
//   });
// }

// // Bir script'i çalıştırmak için API
// app.post('/api/run-script/powershell', async (req, res) => {
//   try {
//     const commandId = req.body.id;
//     console.log(commandId)
//     const command =  await getCommand(commandId);
//     if (!command) {
//       return res.status(404).send({ message: 'Script bulunamadı.' });
//     }

//     const output = await runPowerShell(command);
//     res.send({ output });
//   } catch (error) {
//     res.status(500).send({ error: error.toString() });
//   }
// });