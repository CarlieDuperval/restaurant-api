import connectDb from "./connectDb.js";



// Adding a New Restaurant!!!!!
// taking request , waiting fro response
export const addRestaurant = async (req, res) => {
    // check if the request is valid
    if(!req.body || !req.body.name|| !req.body.address){
        res.status(401).send('Invalid request')
        return;
    }
    // connect to Firestore
    const db = connectDb();

    // Prepare to data
    const newRestaurant = {
        name: req.body.name,
        address: req.body.address,
        rating: req.body.rating || 3,             // if you dont provide the rate they will put 3
        cuisine: req.body.cuisine || 'American',
    }
    // add data to restaurant collection
    try {
        const doc = await db.collection('restaurants').add(newRestaurant);       
    // respond success
    res.status(201).send('Restaurant created' + doc.id)

    } catch (error) {
    // response with error
    res.status(500).send(error)
    }
}    

export const getAllRestaurants = async (req, res) => {
    const db = connectDb();

    try {
        const snapshot = await db.collection('restaurants').get();
        const restaurantArrray = snapshot.docs.map(doc => {
            let restaurant = doc.data();
            restaurant.id = doc.id;
            return restaurant;
        })
        res.send(restaurantArrray);
    } catch (error ) {
        res.status(500).send(error);
        
    }
}


// doesn't work
// export const getRestaurantById = async (id) => {
//     const db = connectDb();
//     if (!id) {
//     res.status(401).send("Invalid request");
//     return;
//   }
//   try {
//     const result = await db.collection("restaurants").doc(id).get();
//     return {
//       id: result.id,  // return an object with the property id; 
//       ...result.data(),
//     };
//   } catch (error) {
//     console.error(error);
//   }
// };




// async await : doesn't work

export const getRestaurantById = async (req, res) => {
    const db = connectDb();
    const { restaurantId } = req.params
    if(!restaurantId){
        res.status(401).send('Your request is invalid');
        return;
    }
    try {
        const result = await db.collection('restaurant').doc(restaurantId).get();
        let myRestaurant = result.data();
        myRestaurant.id = result.id
        res.send(myRestaurant);
    } catch (error){
        res.status(501).send(error)
        
    }

}



// .ten works 
// export const getRestaurantById = (req, res) => {
//     const {restaurantId } = req.params
//     if(!restaurantId){
//         res.status(401).send('Your request is invalid');
//         return;
//     }
//     const db = connectDb();
//     db.collection('restaurants').doc(restaurantId).get()
//     .then(doc => {
//         let restaurant = doc.data();
//         restaurant.id = doc.id
//         res.send(restaurant)
//     })
//     .catch(err => {
//         res.status(501).send(err)
//     })
    

// }





export const updateRestaurant = async (req, res) => {
   const { restaurantId} = req.params
  const db = connectDb();
  try {
    await db.collection("restaurants") // const result = await db.collection('restaurant')
      .doc(restaurantId)
      .update(req.body);
    return await getRestaurantById(id);
  } catch (error) {
    console.error(error);
  }
};



export const deleteRestaurant = async (id) => {
  try {
    await db.collection("restaurant").doc(id).delete();
    return "Restaurant deleted";
  } catch (error) {
    res.status(500).send(error);
  }
};








