import express from 'express';
import cors from 'cors';
import { getAllRestaurants, addRestaurant } from './src/restaurant.js';


const app = express(); // initialize express app
app.use(cors());   // 
app.use(express.json()); // allows patch in json format when using potman to CRUD




// Routes Go Here ------- > Define witch requests are allowed
app.get('/restaurants', getAllRestaurants);
app.post('/restaurants', addRestaurant);


app.listen(3000, () => {
    console.log('Listening on port http://localhost:3000...')
});







