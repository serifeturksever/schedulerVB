import { ObjectId } from "mongodb";
import { mongodbRead, mongodbWrite } from '../app';

export interface ISCHEDULEDSCRIPT {
    "_id"?: ObjectId;
    "script"?: string;
    "date"?: number;
    "type"?: string;  // ? enum
}

const collectionRead = mongodbRead.collection('scheduled-scripts');
const collectionWrite = mongodbWrite.collection('scheduled-scripts');

export const getScheduledScript = async (): Promise<any> => {
    return collectionRead.find().toArray()
}

export const createScheduledScript = async (scheduledScript: ISCHEDULEDSCRIPT): Promise<any> => {
    return collectionWrite.insertOne(scheduledScript);
}

  export const updateScheduledScript = async (scheduledScript: ISCHEDULEDSCRIPT): Promise<any> => {
    return collectionWrite.updateOne({"_id": scheduledScript._id},{"$set": scheduledScript})
}
  
  export const deleteScheduledScript = async (scheduledScriptId: ObjectId): Promise<any> => {
    return collectionWrite.deleteOne({"_id": scheduledScriptId})
}
  