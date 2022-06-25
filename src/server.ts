import express, { Request, Response } from 'express'
import Mainroutes from './routes';

const PORT = 3000;
const server = express();

server.use(Mainroutes)


server.listen(PORT);