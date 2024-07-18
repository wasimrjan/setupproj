"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = __importDefault(require("./env"));
const productsRouter_1 = __importDefault(require("./routers/productsRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/product', productsRouter_1.default);
app.get('/', (req, res) => {
    res.send("Ok");
});
app.listen(env_1.default.apiPort, () => {
    console.log("http://localhost:" + env_1.default.apiPort);
    console.log("is ready to connect");
});
