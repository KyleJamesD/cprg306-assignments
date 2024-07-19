//imports to connect to the firebase service thought the firebase.js file 
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";



 // Function to get items as an array of objects
 async function getItems(db, userId) {
    const q = query(
      collection(db, "users", userId, "items")
    );
  
    try {
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      var itemsArray = [];
  
      querySnapshot.forEach((doc) => {
        console.log('Document Data:', doc.data());
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
    const docRef = await addDoc(collection(db, "users", userId, "items"), 
    //Item is the object we are passing looks like  this  { } 
    Item
  );
    console.log("Item is created with ID: ", docRef.id);

}

/* 

//this is how it is shown in the lab but we can just pass the object in directly like above.
async function addItem(userId, Item) {
 
    const docRef = await addDoc(collection(db, "users", "user1", "items"), {
      name: "Milk 🥛",
      quantity: 1,
      category: "Dairy",
      id:"this should be unique fora key value rendered in a list with the map function"
    });
    console.log("Item is created with ID: ", docRef.id);
}






*/






// Function to create an item-- I dontunderstand the purpose of this method compared to add item???
async function createItem(db, userId, itemData) {
    const docRef = await addDoc(collection(db, "users", userId, "items"), itemData);
    console.log("Item is created with ID: ", docRef.id);
    return docRef.id;
  }
  
 
  
  export { getItems, addItem, createItem };