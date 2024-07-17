//imports to connect to the firebase service thought the firebase.js file 
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";



 // Function to get items as an array of objects
 async function getItems(db, userId) {
    const q = query(
      collection(db, "users", userId, "items"),
      where("quantity", ">", 1)
    );
  
    try {
      const querySnapshot = await getDocs(q);
      const itemsArray = [];
  
      querySnapshot.forEach((doc) => {
        itemsArray.push({ id: doc.id, ...doc.data() });
      });
  
      return itemsArray;
    } catch (error) {
      console.error("Error getting documents: ", error);
      return [];
    }
  }


// functions to connect to the firebase database

//use this fucntion to add items from your shopping list (the component with the submit button)
//to the firebase database, it will no longer add items to the .json file
async function addItem(userId, Item) {
 
    const docRef = await addDoc(collection(db, "users", "user1", "items"), {
      name: "Milk 🥛",
      quantity: 1,
      category: "Dairy",
    });
    console.log("Item is created with ID: ", docRef.id);

}

// Function to create an item
async function createItem(db, userId, itemData) {
    const docRef = await addDoc(collection(db, "users", userId, "items"), itemData);
    console.log("Item is created with ID: ", docRef.id);
    return docRef.id;
  }
  
 
  
  export { getItems };