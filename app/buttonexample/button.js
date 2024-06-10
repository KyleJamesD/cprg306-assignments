//use client means the iems will only be rendered by the client?
"use client";
//states allow us to dynamically change our componenets on the fly as new information is processed
import {useState} from "react";

export default function CounterExample () {
    //useState(10) sets the intial value
    // declare the variable and function that will control it
    var [count, setCount] = useState(10);

    //function to contorl the increment    
    const increment = () => {
        setCount(count +1);
    };
    //funciton to control the decrement
    const decrement = () => {
        setCount(count -1);
    };
    //function the reset the count back to zero
    const reset = () => {
        setCount(count=0);
    };

    return (
        <div>
            <p>Count: {count}</p>
            {/* This is how we can do comments in our return statements
            onClick is called an event handler
            */ }
            <button onClick={increment}>Increment</button>
            <br></br>
            <button onClick={decrement}>decrement</button>
            <br></br>
            <button onClick={reset}>Reset</button>
        </div>
    )


}