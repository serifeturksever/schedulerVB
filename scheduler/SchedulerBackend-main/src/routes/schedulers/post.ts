import express from 'express';
import { mongodbRead, mongodbWrite } from "../../app";
import { createScheduledScript,updateScheduledScript,deleteScheduledScript, ISCHEDULEDSCRIPT } from '../../models/scheduler';
import { ObjectId } from 'mongodb';

export const _createScheduledScripts = async(req,res) => {
    console.log("create")
    let scheduledScript: ISCHEDULEDSCRIPT = {
        "script": req.body.script,
        "date": req.body.date,
        "type": req.body.type
    }
    
    let data = await createScheduledScript(scheduledScript)
    if(data){
        res.send({
            "status": "ok",
            "msg": "Script is created successfully"
        })
    } else {
        res.send({
            "status": "error",
            "msg": "Script could not be created"
        })
    }
}

export const _updateScheduledScripts = async(req,res) => {
console.log("welcolme to update")
    let scheduledScript = {
        "_id": new ObjectId(req.body._id),
        "script": req.body.script,
        "date": req.body.date,
        "type": req.body.type
    }
    let data = await updateScheduledScript(scheduledScript)
    console.log("data", data)
    if(data){
        if(data.modifiedCount == 0){
            res.send({
                "status": "error",
                "msg": "Script could not be updated"
            })
        } else {
            res.send({
                "status": "ok",
                "msg": "Script is updated successfully"
            })
        }
    } else {
        res.send({
            "status": "error",
            "msg": "There is no data"
        })
    }
}

export const _deleteScheduledScripts = async(req,res) => {
    let scriptId = new ObjectId(req.body._id);
    let data = await deleteScheduledScript(scriptId)
    if(data){
        if(data.modifiedCount == 0){
            res.send({
                "status": "error",
                "msg": "Script could not be deleted"
            })
        } else {
            res.send({
                "status": "ok",
                "msg": "Script is deleted successfully"
            })
        }
    } else {
        res.send({
            "status": "error",
            "msg": "There is no data"
        })
    }
}