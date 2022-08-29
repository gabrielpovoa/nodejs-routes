import { Router, Response, Request } from "express";
import { Home, New, NewSlug } from "../controllers/newController";

const router = Router();

router.get('/', Home);

router.get('/news', New);

router.get('/news/:slug', NewSlug);

export default router