"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./resources/users/router"));
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var app = express_1.default();
app.use(logger("dev"));
app.use(express_1.default.json());
app.use(cookieParser());
app.use("/users", router_1.default);
app.all("*", (req, res) => {
    res.status(404).json("No route found");
});
module.exports = app;
//# sourceMappingURL=app.js.map