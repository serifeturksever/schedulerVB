"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const get_1 = require("./get");
const post_1 = require("./post");
exports.router = express_1.default.Router();
exports.router
    .get('/', get_1._getScheduledScripts)
    .post('/create', post_1._createScheduledScripts)
    .post('/update', post_1._updateScheduledScripts)
    .post('/delete', post_1._deleteScheduledScripts);
//# sourceMappingURL=routes.js.map