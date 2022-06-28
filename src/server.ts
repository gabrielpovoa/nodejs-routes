import express, { Request, Response } from 'express'
import path from 'path';
import mustache from 'mustache-express'

import Mainroutes from './routes';

const PORT = 3000;
const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

server.use(Mainroutes)

server.use((req: Request, res: Response) => {
    res.status(404).send('not found')
})


server.listen(PORT);