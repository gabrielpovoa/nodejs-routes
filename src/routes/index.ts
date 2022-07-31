import { Router, Response, Request } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    let age: number = 20
    let renderContent: boolean = false

    if (age > 50) {
        renderContent = true
    }

    res.render('pages/home', {
        name: 'waheed',
        lastname: 'sakir',
        renderContent,
        sentenceOfTheDay: [
            // "Pensei na noite Sonhei com a lua Quem eu entrei Foi o Exu Tranca Rua.",
            // "Era reluzente e muito elegante E quando gargalhava Tinha um poder deslumbrante Poder da lua.",
            // "Rei da encruzilhada Mora no cemitério A sua gargalhada Possui um mistério.",
            // "Pois é Tranca Rua Exu dono da Lua Salve, Salve, Salve Glorioso Tranca Rua",
        ],
        shoppingList: [
            { product: 'MAÇA', price: 2.00 },
            { product: 'BANANA', price: 1.99 },
            { product: 'BERGAMOTA', price: 0.8 },
            { product: 'MAMÃO', price: 34.6 }
        ]
    });
});

router.get('/contato', (req: Request, res: Response) => {
    res.render('pages/contato')
})

router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/sobre')
})

// EXEMPLOS DE ROTAS DINÂMICAS: SITE DE NOTÍCIAS E VOOS
router.get('/flights/:from-:to', (req: Request, res: Response) => {
    let { from, to } = req.params
    res.send(`Procurando Voos de: ${from.toUpperCase()} - ${to.toUpperCase()}`)
});


router.get('/nome', (req: Request, res: Response) => {
    let nome: string = req.query.name as string
    let age: string = req.query.age as string

    res.render('pages/nome', {
        nome,
        age
    })
})

router.get('/age', (req: Request, res: Response) => {
    let showAge: boolean = false

    let age: number = 0

    if (req.query.ano) {
        let birthydayYear: number = parseInt(req.query.ano as string)
        let currentYear: number = new Date().getFullYear();
        age = currentYear - birthydayYear;
        showAge = true

        console.log(req.query.ano)
    }

    res.render('pages/age', {
        age,
        showAge
    })
})

export default router