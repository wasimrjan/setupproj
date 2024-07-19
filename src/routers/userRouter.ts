import express from 'express';
import userController from '../controllers/userController';

const productRouter = express.Router();

var user = new userController();

productRouter
.get('/Login',user.Login)

/*.patch('/',product.ProudctUpdate)
.delete('/:id',product.ProductDelete);
*/

export default productRouter;