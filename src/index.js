import express from 'express';
import userRouter from './routes/users.js';
import publicationRouter from './routes/publications.js';
import commentRouter from './routes/comments.js';
import calificationRouter from './routes/califications.js';
import { errorHandler } from './middlewares/errorHandler.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola Mundo UNICAES! El servidor está funcionando correctamente.');
});

app.use('/users', userRouter);
app.use('/publications', publicationRouter);
app.use('/comments', commentRouter);
app.use('/califications', calificationRouter);

app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3000}`);
});