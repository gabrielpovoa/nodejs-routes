import { Router } from "express";
import { Home } from "../controllers/homeController";
import * as Info from '../controllers/InfoController';
import { Flight } from "../controllers/flightController";
import { Name, Age, AgeResultPostReq } from '../controllers/userController'

const router = Router();

router.get('/', Home);

router.get('/contact', Info.Contact)

router.get('/about', Info.About)

// EXEMPLOS DE ROTAS DINÂMICAS: SITE DE NOTÍCIAS E VOOS
router.get('/flights/:from-:to', Flight);

router.get('/nome', Name)

router.get('/age', Age)

router.post('/age_result', AgeResultPostReq)

export default router