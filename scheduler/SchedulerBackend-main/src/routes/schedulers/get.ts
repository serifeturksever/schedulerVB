import { getScheduledScript } from '../../models/scheduler';


export const _getScheduledScripts = async (req,res) => {
    let data = await getScheduledScript()
    console.log("merhaba")
    if(data){res.send(data)} else {console.log("data yok")}
 }

 