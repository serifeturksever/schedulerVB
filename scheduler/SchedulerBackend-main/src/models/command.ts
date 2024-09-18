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

export const getCommand = async (commandId: string): Promise<any> => {
    console.log("Burhan", commandId)
    return collectionRead.findOne({"_id":new ObjectId(commandId)});
}

