"use client";
import {useState} from "react";

export function NewItem ()
{
    //these are called a useState "hook" it involves a state variable and a setter function
    var [name, setName] = useState("");
    var [quantity, setQuantity] = useState(1);
    var [category, setCategory] = useState("produce");    


    //preventDefault stops the form from reloading the page in this case.
    //window.alert displays a message for the user they must click ok to proceed
    //console.log write themessage to the console, pressf12 to access
    //clear state function is called at the end to reset values back to intial state
    const handleSubmit = (event) => 
        {
            event.preventDefault();
            //create new object
            const newItem = {name,quantity,category};

            window.alert(newItem.name+" "+ newItem.quantity+" "+newItem.category);
            console.log(newItem.name, newItem.quantity, newItem.category);
        }
 

    //handleChange function sets the usestatehook variables to the "value" attribute which is tied to the input field
    const handleNameChange = (event) =>
        {setName(event.target.value);}
    const handleQuantityChange = (event) =>
        {setQuantity(event.target.value);}
    const handleCategoryChange = (event) =>
        {setCategory(event.target.value);}




    return(
        
            <form className="w-96 bg-cyan-800 flex flex-col rounded" onSubmit={handleSubmit}>
                {/* •	The value of the input field should be tied to the name state variable, meaning that it displays the current value of name.???
                    •	Use the setName function in an onChange event handler to update the state of name as the user types into the field.??? 
                */}
                    <input className="grow text-black rounded-md m-2 h-10" type="text" name="name" placeholder="Enter Name" value={name} 
                    onChange={handleNameChange} required/>

                <div className="flex justify-between ">   

                    <input className="text-black rounded-md m-2 h-10 w-16s" type="number" quantity="quantity" min="0" max="99" 
                    placeholder="Enter quantity" value={quantity} onChange={handleQuantityChange} required/>

                    <select className="text-black rounded-md m-2 h-10 w-40" type="text" category="category" placeholder="Enter category"
                    onChange={handleCategoryChange} required>
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry goods">Dry goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>        
                    </select>
                </div>
                <button className="text-blue-600 border rounded py-2 px-6 m-2 bg-white"  type="submit">Submit</button>
            </form>
        
    );




}


