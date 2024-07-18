import express from 'express';
import productController from '../controllers/productsController';
const productRouter = express.Router();

var product = new productController();

productRouter
.get('/List',product.ProudctList)
.get('/Show',product.ProudctShow)
.post('/Add',product.ProudctAdd)

/*.patch('/',product.ProudctUpdate)
.delete('/:id',product.ProductDelete);
*/

export default productRouter;