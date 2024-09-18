import {getCommand} from '../../models/command'
const { exec } = require('child_process');

export const _runShellScripts = async (req,res) => {
    const commandId = req.params.id;
  
  // MongoDB'den komutu çek
  const command = await getCommand(commandId);
  
  if (command) {
    // Shell komutunu çalıştır
    exec(command.script, (error, stdout, stderr) => {
      if (error) {
        console.error(`Hata: ${error.message}`);
        return res.status(500).json({ error: 'Komut çalıştırılamadı.' });
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return res.status(500).json({ error: stderr });
      }

      const formattedOutput = stdout.replace(/\n/g, '<br>');
      res.send(`<pre>${formattedOutput}</pre>`);         
      //console.log(`stdout: ${stdout}`);
      //res.json({ output: stdout });
    });
  } else {
    res.status(404).json({ error: 'Komut bulunamadı.' });
  }
 }

 
