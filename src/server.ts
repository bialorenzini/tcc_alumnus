import express from 'express';

const app = express();
const port = 38000;

app.listen(port, () => {
    console.log(`Server is on http://localhost:${port}`)
})

