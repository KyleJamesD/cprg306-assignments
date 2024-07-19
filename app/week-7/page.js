"use client";
import ItemList from "./item-list";
import Link from 'next/link';
import { NewItem } from "./new-item";
import itemsData from './items';
import {useState} from "react";
import MealIdeas from "./meal-ideas";



export default function Page(){
    const [items,setitemsBy] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    var handleAddItem = (addedItem) => {
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

    return(
        <main className="flex">
            <div>
                <nav className="flex">   
                    <p className=" pt-3 pl-3 text-3xl font-bold">Shopping List</p>       
                    <Link href="/" className="ml-8  pt-3 pr-10 text-3xl font-bold">Home</Link>
                </nav>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList itemstate={items} onItemSelect={handleItemSelect}/>
                
            </div>
            <MealIdeas ingredient={selectedItemName}/>

        </main>
    );

}