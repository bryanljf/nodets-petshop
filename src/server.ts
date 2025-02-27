import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import router from './routes';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.json());
server.use(express.urlencoded({ extended:true }));
server.use(express.static(path.join(__dirname, '../public')));
server.use(router);

server.use((req,res) => {
    res.status(404).send('Page not found!')
})

server.listen(process.env.PORT, () => {
    console.log(`Server running on: http://localhost:${process.env.PORT}`);
});

