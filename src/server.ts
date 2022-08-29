import express, { Request, Response } from 'express'
import path from 'path';
import mustache from 'mustache-express'
import dotenv from 'dotenv'

import Mainroutes from './routes';
import Painelroutes from './routes/painel'

dotenv.config()

const PORT = process.env.LISTENER_PORT;
const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

server.use(express.urlencoded({ extended: true }))

server.use(Mainroutes)
server.use('/', Painelroutes)

server.use((req: Request, res: Response) => {
    res.status(404).send('not found')
})


server.listen(PORT);