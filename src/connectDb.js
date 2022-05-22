//import tools from firebase
import { initializeApp, getApps, cert} from "firebase-admin/app";

// import firestore from firebase
import { getFirestore } from 'firebase-admin/firestore';

// // import my credentials to  connect to firebase
 import myCredentials from '../credentials.js'


// // Write a function to connect to Firebase
 export default function connectDb () {
//   // First Check  to see if we are already connected to the database (Firebase), if we are not connected the array will be empty
    if(getApps().length === 0){  
//         // if not connect , Please connect to firebase project "my-first-firebase-project-cd"
         initializeApp({     
             credential: cert(myCredentials) 
        })
   }
//      // Either way ....
//     // return the connection to Firestore
    return getFirestore();  
}


