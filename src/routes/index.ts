import { Router, Response, Request } from "express";

const router = Router();

router.get('/', (req:Request, res:Response)=> {
    let age: number = 20
    let renderContent: boolean = false

    if(age > 50) {
        renderContent = true
    } 

    res.render('home', {
        name: 'waheed',
        lastname: 'sakir',
        renderContent,
        sentenceOfTheDay: [
            "Pensei na noite Sonhei com a lua Quem eu entrei Foi o Exu Tranca Rua.",
            "Era reluzente e muito elegante E quando gargalhava Tinha um poder deslumbrante Poder da lua.",
            "Rei da encruzilhada Mora no cemitério A sua gargalhada Possui um mistério.",
            "Pois é Tranca Rua Exu dono da Lua Salve, Salve, Salve Glorioso Tranca Rua",
        ],
        shoppingList: [
            {product: 'MAÇA', price: 2.00},
            {product: 'BANANA', price: 1.99},
            {product: 'BERGAMOTA', price: 0.8},
            {product: 'MAMÃO', price: 34.6}
        ]
    });
});

router.get('/contact', (req: Request, res: Response) => {
    res.send('FORMULARIO DE CONTATO')
})

// EXEMPLOS DE ROTAS DINÂMICAS: SITE DE NOTÍCIAS E VOOS
router.get('/flights/:from-:to', (req: Request, res: Response) => {
    let { from, to } = req.params
    res.send(`Procurando Voos de: ${from.toUpperCase()} - ${to.toUpperCase()}`)
});


export default router