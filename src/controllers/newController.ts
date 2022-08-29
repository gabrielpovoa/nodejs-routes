import { Request, Response } from "express";

export const Home = (req: Request, res: Response) => {
    res.send('PAGINA HOME: PAINEL DE NOTICIA');
}

export const New = (req: Request, res: Response) => {
    res.send('LISTA DE NOTCÍCIAS CADASTRADAS');
}

export const NewSlug = (req: Request, res: Response) => {
    let slug: string = req.params.slug;
    res.send(`Noticia: ${slug}`);
}