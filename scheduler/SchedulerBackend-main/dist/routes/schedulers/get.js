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
exports._getScheduledScripts = void 0;
const scheduler_1 = require("../../models/scheduler");
const _getScheduledScripts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield (0, scheduler_1.getScheduledScript)();
    console.log("merhaba");
    if (data) {
        res.send(data);
    }
    else {
        console.log("data yok");
    }
});
exports._getScheduledScripts = _getScheduledScripts;
//# sourceMappingURL=get.js.map