import express from 'express';

const PORT = 5002;
const app = express();

app.use(express.static('public'))
.get('/', (req, res) => {
    res.send('Server running');
})

app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`)
})


