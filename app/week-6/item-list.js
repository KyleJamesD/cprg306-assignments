"use client";
import {useState} from "react";
import Item from "./item.js";



export default function ItemList({itemstate})
{


  const [sortBy,setSortBy] = useState("name");
  
  const handleSort = (event) => {
      setSortBy(event.target.name);
    }

         let sortedarray = [...itemstate].sort((a,b) => {
              if (sortBy === "name"){
              const nameA = a.name.toUpperCase();
              const nameB = b.name.toUpperCase();
              if (nameA < nameB){
                return -1;
              } 
              if (nameA>nameB){
                return 1;
              }
              return 0;
        
            } 
          else if (sortBy === "category"){
              const categoryA = a.category.toUpperCase();
              const categoryB = b.category.toUpperCase();
              if (categoryA < categoryB){
                return -1;
              } 
              if (categoryA > categoryB){
                return 1;
              }
              return 0;
            }
            });     
          
          return(
              <>
              <p>Sort By:</p>
              <button className={sortBy === 'name' ? 'bg-orange-400 rounded p-2 m-4' : 'bg-orange-700 rounded p-2 m-4'} type="button" name="name"onClick={handleSort}>Name</button> 
              <button className={sortBy === 'category' ? 'bg-orange-400 rounded p-2 m-4' : 'bg-orange-700 rounded p-2 m-4'} type="button" name="category"onClick={handleSort}>Category</button>
            <ul>
              {sortedarray.map((item) => (
                /* key is the unique identifier incase two objects inside items.json have the same values??? in any case the key is what makes each object unique and lets
                the Compiler update changes. */
                <li key={item.id}>
                  <Item name={item.name} quantity={item.quantity} category={item.category}/>
                </li>))
              }
            </ul>
            </>
          );
        }



