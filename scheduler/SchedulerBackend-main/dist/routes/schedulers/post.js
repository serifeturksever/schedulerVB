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
exports._deleteScheduledScripts = exports._updateScheduledScripts = exports._createScheduledScripts = void 0;
const scheduler_1 = require("../../models/scheduler");
const mongodb_1 = require("mongodb");
const _createScheduledScripts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("create");
    let scheduledScript = {
        "script": req.body.script,
        "date": req.body.date,
        "type": req.body.type
    };
    let data = yield (0, scheduler_1.createScheduledScript)(scheduledScript);
    if (data) {
        res.send({
            "status": "ok",
            "msg": "Script is created successfully"
        });
    }
    else {
        res.send({
            "status": "error",
            "msg": "Script could not be created"
        });
    }
});
exports._createScheduledScripts = _createScheduledScripts;
const _updateScheduledScripts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let scheduledScript = {
        "_id": new mongodb_1.ObjectId(req.body._id),
        "script": req.body.script,
        "date": req.body.date,
        "type": req.body.type
    };
    let data = yield (0, scheduler_1.updateScheduledScript)(scheduledScript);
    if (data) {
        if (data.modifiedCount == 0) {
            res.send({
                "status": "error",
                "msg": "Script could not be updated"
            });
        }
        else {
            res.send({
                "status": "ok",
                "msg": "Script is updated successfully"
            });
        }
    }
    else {
        res.send({
            "status": "error",
            "msg": "There is no data"
        });
    }
});
exports._updateScheduledScripts = _updateScheduledScripts;
const _deleteScheduledScripts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let scriptId = new mongodb_1.ObjectId(req.body._id);
    let data = yield (0, scheduler_1.deleteScheduledScript)(scriptId);
    if (data) {
        if (data.modifiedCount == 0) {
            res.send({
                "status": "error",
                "msg": "Script could not be deleted"
            });
        }
        else {
            res.send({
                "status": "ok",
                "msg": "Script is deleted successfully"
            });
        }
    }
    else {
        res.send({
            "status": "error",
            "msg": "There is no data"
        });
    }
});
exports._deleteScheduledScripts = _deleteScheduledScripts;
//# sourceMappingURL=post.js.map