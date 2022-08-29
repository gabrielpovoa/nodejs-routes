import { Request, Response } from "express"
import { Product } from '../models/Product'
import { Sentence } from '../models/SentenceOfTheDay'

export const Home = (req: Request, res: Response) => {
    let age: number = 20
    let renderContent: boolean = false

    if (age > 50) {
        renderContent = true
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12)

    let DailySentence = Sentence.getAll()

    res.render('pages/home', {
        name: 'waheed',
        lastname: 'sakir',
        renderContent,
        sentenceOfTheDay: DailySentence,
        shoppingList: list,
        expensives: expensiveList,
    });
}