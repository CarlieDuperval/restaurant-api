import express from 'express';
import cors from 'cors';

const app = express(); // initialize express app
app.use(cors());   // 
app.use(express.json()); // allows patch in json format when using potman to CRUD







// Routes Go Here ------- > Define witch requests are allowed

app.listen(3000, () => {
    console.log('Listening on port http://localhost:3000...')
})