import Express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mainRouter from './routes/index';

dotenv.config();

const server = Express();
//configuração abaixo e o mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(Express.static(path.join(__dirname, '../public')));

//esse o caminho absoluto da pasta public
server.use(Express.static(path.join(__dirname)));

//habilitando os dados no corpo da requisição para ser acessiveis dentro da minha rota
server.use(Express.urlencoded({extended:true}));

//aqui a configuração das rotas
server.use(mainRouter);

//configuração da pagina 404 pagina não encontrada
server.use((req:Request, res:Response)=>{
    res.status(404).send('not found page');
});
//aqui esta startando o servidor na porta 3000 no localhost
const porta = process.env.PORT;
server.listen(porta,()=>{
    console.log("Servidor OnLine no \n http://localhost:"+porta);
});