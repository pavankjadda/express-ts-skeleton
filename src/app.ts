import express, {Application, Request, Response} from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    if (req.cookies) {
        const {JSESSIONID} = req.cookies;
        res.send(JSESSIONID);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
