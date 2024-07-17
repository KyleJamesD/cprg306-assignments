// Import the useUserAuth hook

'use client';
import Link from 'next/link';
import {useUserAuth} from "./_utils/auth-context.js";

 
// Use the useUserAuth hook to get the user object and the login and logout functions


//
//create async function hande add to call add items from the services.js file

//also create handle get items and 

export default function Page(){

    //this is a custom hook
    //when it starts with use then it is a hook
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    // Sign in to Firebase with GitHub authentication


    async function signin(){
        try{
            await gitHubSignIn();
        }
        catch(error){
        console.log(error)
        }
    }

    async function signout(){
        try{
            await firebaseSignOut();
        }
        catch(error){
        console.log(error)
        }
        
    }

    return(
    <>
            {user ? (<main className="">
            <p>
          Welcome{user.displayName} ({user.email})
            </p>
            
            <Link href="./week-9/week-7">Go to Shopping list</Link>
            <br></br>
            <button className="" onClick={signout}>sign out</button>
            <></>
        </main>):(
        <main className="">
            <p>
            Welcome, Please Sign in Below
            </p>
            <Link href="./week-9/week-7">Go to Shopping list</Link>
            <br></br>
            <button className="rounded to-blue-600" onClick={signin}>sign in</button>
        </main>
        )}
    </>
    );
}
 
//{user.displayName} ({user.email})
