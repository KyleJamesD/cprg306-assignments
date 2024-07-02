'use client'
import ItemList from "./item-list";
import items from "./items.json"
import MealIdeas from "../week-7/meal-ideas";
import { useState } from "react";
export default function Page() {
    const [selectedItemName,setSelectedItemName] = useState("");



function handleItemSelect(name){
    const strings = name.split(",");
    const cleanname = strings[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
setSelectedItemName(cleanname);

}

    

return(


<main>

    <ItemList items={items} onItemSelect={handleItemSelect}></ItemList>



</main>

);


}