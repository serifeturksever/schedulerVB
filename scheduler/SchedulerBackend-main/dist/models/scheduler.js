"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteScheduledScript = exports.updateScheduledScript = exports.createScheduledScript = exports.getScheduledScript = void 0;
const app_1 = require("../app");
const collectionRead = app_1.mongodbRead.collection('scheduled-scripts');
const collectionWrite = app_1.mongodbWrite.collection('scheduled-scripts');
const getScheduledScript = () => __awaiter(void 0, void 0, void 0, function* () {
    return collectionRead.find().toArray();
});
exports.getScheduledScript = getScheduledScript;
const createScheduledScript = (scheduledScript) => __awaiter(void 0, void 0, void 0, function* () {
    return collectionWrite.insertOne(scheduledScript);
});
exports.createScheduledScript = createScheduledScript;
const updateScheduledScript = (scheduledScript) => __awaiter(void 0, void 0, void 0, function* () {
    return collectionWrite.updateOne({ "_id": scheduledScript._id }, { "$set": scheduledScript });
});
exports.updateScheduledScript = updateScheduledScript;
const deleteScheduledScript = (scheduledScriptId) => __awaiter(void 0, void 0, void 0, function* () {
    return collectionWrite.deleteOne({ "_id": scheduledScriptId });
});
exports.deleteScheduledScript = deleteScheduledScript;
//# sourceMappingURL=scheduler.js.map