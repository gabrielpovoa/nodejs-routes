import { Request, Response } from "express"


export const Name = (req: Request, res: Response) => {
    let nome: string = req.query.name as string
    let age: string = req.query.age as string
    res.render('pages/nome', {
        nome,
        age
    })
}

export const Age = (req: Request, res: Response) => {
    res.render('pages/age', {})
}

export const AgeResultPostReq = (req:Request, res:Response) => {
    let showAge: boolean = false

    let age: number = 0

    if (req.body.ano) {
        let birthydayYear: number = parseInt(req.body.ano as string)
        let currentYear: number = new Date().getFullYear();
        age = currentYear - birthydayYear;
        showAge = true

        console.log(req.body.ano)
    }
    
    res.render('pages/age',{
        showAge,
        age
    })
}