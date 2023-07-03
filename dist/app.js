"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./db/config"));
const body_parser_1 = require("body-parser");
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/posts", routes_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
config_1.default.sync({ force: true }).then(() => {
    console.log("Database connected succesfully");
}).catch((err) => {
    console.log("Err", err);
});
app.listen(8080);
