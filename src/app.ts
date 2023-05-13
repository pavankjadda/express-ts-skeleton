import express, {Application, Request, Response} from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

// Add routes
app.use('/user', require('./web/user'));
app.use('/employee', require('./web/employee'));

// Start server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
