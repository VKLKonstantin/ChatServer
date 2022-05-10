import cors from 'cors';
import express, { json } from 'express';
import { testRoute } from './api/test';

const corsConfig = {
    origin: '*',
    methods: ['GET', 'POST'],
};

const PORT = 5002;
const app = express();

app.use(express.static('public'))
    .use(cors(corsConfig))
    .use(json({ limit: '20mb' }))
    .use(testRoute())
    .get('/', (req, res) => {
        res.send('Server running');
    })

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})


