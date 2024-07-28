"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const currency_1 = __importDefault(require("./routes/currency"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.use('/api', currency_1.default);
app.listen(port, () => {
    console.log(`Currency converter API listening at http://localhost:${port}`);
});
