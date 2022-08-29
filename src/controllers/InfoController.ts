import { Request, Response } from "express"

export const Contact = (req: Request, res: Response) => {
    res.render('pages/contato')
};

export const About = (req: Request, res: Response) => {
    res.render('pages/sobre')
}