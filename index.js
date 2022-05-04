import express from 'express';
import cors from 'cors';
import { addRestaurant, deleteRestaurant, getAllRestaurants, getRestaurantById, updateRestaurant } from './src/ restaurants.js';
const app = express(); // initialize express app
app.use(cors());   // 
app.use(express.json()); // allows patch in json format when using potman to CRUD







// Routes Go Here ------- > Define witch requests are allowed
app.post('/restaurants', addRestaurant);
app.get('/restaurants', getAllRestaurants);
app.get('/restaurants/:restaurantId', getRestaurantById)
app.patch('/restaurants/:restaurantId', updateRestaurant)
app.delete('/restaurants/:restaurantId', deleteRestaurant)


app.listen(3000, () => {
    console.log('Listening on port http://localhost:3000...')
})