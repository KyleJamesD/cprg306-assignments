"use client";
import {useState} from "react";
import Item from "./item.js";
import objects from "./items.json";


export default function ItemList ()
{
          return(

            <ul>{objects.map((item) => (
                <li key={item.id}>
                  <Item name={item.name} quantity={item.quanitiy} category={item.category}/>
                </li>
              ))}
            </ul>
          );
}







  