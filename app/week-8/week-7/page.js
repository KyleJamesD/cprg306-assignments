"use client";
import ItemList from "./item-list";
import Link from 'next/link';
import { NewItem } from "./new-item";
import itemsData from './items';
import {useState} from "react";
import MealIdeas from "./meal-ideas";
import {useUserAuth} from "../_utils/auth-context.js";

export default function Page(){
    const [items,setitemsBy] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    
    var handleAddItem = (addedItem) => {
        setitemsBy(items => {return[...items,addedItem]})
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


    
    return(

        <>
        {user ? (<main className="flex">
            <div>
                <nav className="flex">   
                    <p className=" pt-3 pl-3 text-3xl font-bold">Shopping List</p>       
                    <Link href="/" className="ml-8  pt-3 pr-10 text-3xl font-bold">Home</Link>
                    <Link href="/week-8" className="ml-8  pt-3 pr-10 text-3xl font-bold">Go Back</Link>
                </nav>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList itemstate={items} onItemSelect={handleItemSelect}/>
                
            </div>
            <MealIdeas ingredient={selectedItemName}/>

        </main>) : (

            <main className="h-96 flex flex-col justify-evenly  items-center ">
        <p className=" text-4xl ">Please sign in!</p>
        <Link href="/week-8" className="text-3xl font-bold rounded pl-10 pr-10 bg-blue-400">Go Back!</Link>
        </main>
        )}
        
        </>
    );

}