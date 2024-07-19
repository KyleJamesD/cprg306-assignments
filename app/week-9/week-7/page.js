"use client";
import ItemList from "./item-list";
import Link from 'next/link';
import { NewItem } from "./new-item";
import {useState} from "react";
import MealIdeas from "./meal-ideas";
import {useUserAuth} from "../_utils/auth-context.js";
import {getItems} from "../_services/shopping_list_service.js"
import {addItem} from "../_services/shopping_list_service.js"
import { useEffect } from "react";
import { db } from "../_utils/firebase";


export default function Page(){
    const [items,setitemsBy] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();



    var handleAddItem = (addedItem) => {
      addItem(user.uid,addedItem)
      setitemsBy(items => { return[...items,addedItem]})
    }
// variable handleitemSelect is assigned an arrow function, this arrow funciton takes a parameter (itemname) then it calls=> another function setSelecteditemname and passes it the parameter itemname.

    var handleItemSelect = (name) => {
       // const cleanedItemName = name.split(' ')[0];
       // console.log(cleanedItemName);
       //setSelectedItemName(cleanedItemName);
        const strings = name.split(",");
        const cleanname = strings[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(cleanname);
    }
/**    useEffect(() => {
        async function loadItems() {
            if (user) {
                const itemsArray = await getItems(db, user.uid);
                console.log("the items array is:" + itemsArray);
                setitemsBy(itemsArray);
                
            }
        }
        loadItems();
    }, []);
 */

    useEffect(() => {
        const loadItems = async () => {
          if (user) {
            console.log("User is defined:", user); // Log user object
            console.log("User ID:", user.uid); // Debug log
            try {
              const itemsArray = await getItems(db, user.uid);
              console.log("The items array is:", itemsArray); // Print the items to the console
              setitemsBy(itemsArray);
            } catch (error) {
              console.error("Error fetching items:", error); // Log errors
            }
          } else {
            console.log("User is not defined"); // Log when user is not defined
          }
        };
        loadItems();
      }, []);







    
    return(

        <>
        {user ? (<main className="flex">
            <div>
                <nav className="flex">   
                    <p className=" pt-3 pl-3 text-3xl font-bold">Shopping List</p>       
                    <Link href="/" className="ml-8  pt-3 pr-10 text-3xl font-bold">Home</Link>
                    <Link href="/week-9" className="ml-8  pt-3 pr-10 text-3xl font-bold">Go Back</Link>
                </nav>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList itemstate={items} onItemSelect={handleItemSelect}/>
                
            </div>
            <MealIdeas ingredient={selectedItemName}/>

        </main>) : (

            <main className="h-96 flex flex-col justify-evenly  items-center ">
        <p className=" text-4xl ">Please sign in!</p>
        <Link href="/week-9" className="text-3xl font-bold rounded pl-10 pr-10 bg-blue-400">Go Back!</Link>
        </main>
        )}
        
        </>
    );

}