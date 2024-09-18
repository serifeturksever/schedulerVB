import express from 'express';

import { getCommand } from '../../models/command';
const { exec } = require('child_process');
const fs = require('fs');
export const _runPowershell = async (req: express.Request, res: express.Response) => {

  try {
    const commandId = req.body.id;
    console.log(commandId)
    const command = await getCommand(commandId);
    if (!command) {
      return res.status(404).send({ message: 'Script bulunamadı.' });
    }

    const output = await runPowerShell(command);
    res.send({ output });
  } catch (error) {
    res.status(500).send({ error: error.toString() });
  }
}


function runPowerShell(command) {
  return new Promise((resolve, reject) => {
    // const script = `
    // $headers = New-Object 'System.Collections.Generic.Dictionary[System.String,System.String]'
    // $headers.Add('Content-Type', 'application/json')
    // $headers.Add('Authorization', 'Bearer eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkIwMjgyIiwiYWNjZXNzX2xldmVsIjoiUmVhZCIsInNjb3BlIjoiZGVwbG95OioiLCJleHAiOjIzNDkyNDUyNzV9.PXIzOoyHN0f_AJc-HFT6YMRF8MVASvXF2s2dwOcwTGvOrI59KUwqH29SqhCHWZfv') 
    // echo \\"Headers oluşturuldu.\\"
    // `.replace(/\n/g, ';');

    //   exec(`powershell.exe -Command ${command.script.replace(/\r\n/g, ';')}`, (error, stdout, stderr) => {
    //     if (error) {
    //       reject(`Hata: ${error.message}`);
    //     }
    //     if (stderr) {
    //       reject(`Stderr: ${stderr}`);
    //     }
    //     resolve(stdout);
    //   });

    const scriptFilePath = './script.ps1';
    fs.writeFileSync(scriptFilePath, command.script, 'utf-8');

    // PowerShell script dosyasını çalıştır
    exec(`powershell.exe -File ${scriptFilePath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Hata: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
      }
      console.log(`Çıktı: ${stdout}`);
    });
  });
}

