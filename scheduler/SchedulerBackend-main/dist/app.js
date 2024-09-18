"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodbWrite = exports.mongodbRead = exports.VARIABLES = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
exports.VARIABLES = process.env;
if (exports.VARIABLES.NODE_ENV == "test") {
    dotenv_1.default.config();
}
const mongodb_1 = require("mongodb");
const mongoClient = new mongodb_1.MongoClient("mongodb+srv://serifeturksever:Turksever7.@cluster0.5wf6fdn.mongodb.net/");
exports.mongodbRead = mongoClient.db("SchedulerDB");
exports.mongodbWrite = mongoClient.db("SchedulerDB");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes/schedulers/routes");
//For env File 
// dotenv.config();
const app = (0, express_1.default)();
const port = exports.VARIABLES.PORT || 8000;
app
    .use(body_parser_1.default.json())
    .use(body_parser_1.default.urlencoded({ extended: true }))
    .use((0, cors_1.default)())
    .use('/', routes_1.router);
app.get('/', (req, res) => {
    res.send('Welcome to Express & TypeScript Server');
});
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map