"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsController_1 = __importDefault(require("../controllers/productsController"));
const productRouter = express_1.default.Router();
var product = new productsController_1.default();
productRouter
    .get('/List', product.ProudctList)
    .get('/Show', product.ProudctShow)
    .post('/Add', product.ProudctAdd);
/*.patch('/',product.ProudctUpdate)
.delete('/:id',product.ProductDelete);
*/
exports.default = productRouter;
