import app from "./app.js"
import {getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'



export async function subscribeToHelfireClub(subscription) {
    const db = getFirestore(app)
   const helfireClubCollection = collection(db, 'helfire-clube')
   const docRef = await addDoc(helfireClubCollection, subscription)
   return docRef.id

}