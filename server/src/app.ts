import express, {Application, Request, Response} from 'express';
import postRouter from './routes/post.route.js'
import errorHandler from './middlewares/errorHandler.middleware.js';
import corsMiddleware from './config/cors.cofig.js'
const app : Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(corsMiddleware)
app.use('',postRouter)

app.use(errorHandler)

export default app
