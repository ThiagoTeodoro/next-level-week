import express, {Request, Response} from 'express';

const app = express();

app.get('/users', (request: Request, response: Response) => {

    console.log('Listagem de usuários');
    
    response.json([
        'Thiago',
        'Diego',
        'Robson'
    ]);
})

app.listen(3333);