import { Router, Response, Request } from "express";

const router = Router();

router.get('/', (res: Response, req: Request) => {
    res.send('PAGINA HOME: PAINEL DE NOTICIA');
});

router.get('/news', (res: Response, req: Request) => {
    res.send('LISTA DE NOTCÍCIAS CADASTRADAS');
});

router.get('/news/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug;
    res.send(`Noticia: ${slug}`);
});

export default router