"use client";
import ItemList from "./item-list";
import Link from 'next/link';
import { NewItem } from "./new-item";
import itemsData from './items';
import {useState} from "react";



export default function Page(){

    const [items,setitemsBy] = useState(itemsData);

    var handleAddItem = (addedItem) => {
        setitemsBy(items => { return[...items,addedItem]})
    }

    return(
        <main className="flex">
            <div>
                <nav className="flex">   
                    <p className=" pt-3 pl-3 text-3xl font-bold">Shopping List</p>       
                    <Link href="/" className="ml-8  pt-3 pr-10 text-3xl font-bold">Home</Link>
                </nav>
                <ItemList itemstate={items}/>
            </div>
            <div className="flex flex-col justify-center">
                {/* onAddItem= this is saying my parameter onAddItem= to this variable i am passsing. */}
            <NewItem onAddItem={handleAddItem}/>
            </div>
        </main>
    );

}