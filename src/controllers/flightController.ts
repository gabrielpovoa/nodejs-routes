import { Request, Response } from "express"


export const Flight = (req: Request, res: Response) => {
    let { from, to } = req.params
    res.send(`Procurando Voos de: ${from.toUpperCase()} - ${to.toUpperCase()}`)
}