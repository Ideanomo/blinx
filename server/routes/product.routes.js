import express from 'express';
import productCtrl from '../controllers/product.controller';

const router = express.Router();

router.route('/api/products')
.get(productCtrl.listAll)

router.route('/api/products/:id')
    .get(productCtrl.productByID)

export default router;