import express, {Application, Request, Response} from 'express';

export const app: Application = express();

app.get('/', (req: Request, res: Response) => {
   res.send('hello');
});

app.listen(5000);