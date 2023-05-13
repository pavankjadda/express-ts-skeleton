import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Users Home');
});

router.get('/new', (req: Request, res: Response) => {
    res.send('New User');
});

router.get('/:id', (req: Request, res: Response) => {
    res.send('User with ID: ' + req.params.id);
});

module.exports = router;
