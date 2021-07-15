import { Router } from 'express';
import { getProductsByDate, getTopics } from '../controllers/products.controller';

const initRouter = (router: Router) => {
    router.route('/posts/:date').get(getProductsByDate)
    router.route('/topics').get(getTopics)
}

export default initRouter;