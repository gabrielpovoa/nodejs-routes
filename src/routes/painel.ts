import { Router, Response, Request } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('PAGINA HOME: PAINEL DE NOTICIA');
});

router.get('/news', (req: Request, res: Response) => {
    res.send('LISTA DE NOTCÍCIAS CADASTRADAS');
});

router.get('/news/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug;
    res.send(`Noticia: ${slug}`);
});

export default router