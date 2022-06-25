import { Router, Response, Request } from "express";

const router = Router();

router.get('/', (res: Response, req: Request) => {
    res.send('OLA MUNDO')
})

router.get('/contact', (res: Response, req: Request) => {
    res.send('FORMULARIO DE CONTATO')
})

// EXEMPLOS DE ROTAS DINÂMICAS: SITE DE NOTÍCIAS E VOOS
router.get('/flights/:from-:to', (req: Request, res: Response) => {
    let { from, to } = req.params
    res.send(`Procurando Voos de: ${from.toUpperCase()} - ${to.toUpperCase()}`)
});


export default router