//readfilesync will make our program read a file line by line, in order. it is not asynchronous
const {readFileSync,writeFileSync,readFile} = require("fs");

const data1 = readFileSync("first.txt", "utf-8")
const data2 = readFileSync("second.txt", "utf-8")
console.log(data1);
console.log(data2);


// this is like hadden written fetch method
const getData = (path) =>{
    //promise takes a callback?
    //inside the promise is where we want to put async code.
    //whenever we have async code we need to wrap it in a promise.
    // a promise can return resolve or reject
    return new Promise((resolve,reject)=>{
        //data is what we ahve after reading the file and geting the data (stored in dat varaible?)
        readFile(path, "utf-8",(err,data)=>{
            //
            if (err)
                reject(err);

            else 
            resolve(data);
        })
    })
}

//we will use away instead of .then and .catch
//useing our function
//this is the old way
getData("first.txt").then((result)=>{
console.log(result);
}).catch((err)=>{
console.log(err);
})



const fetch  = (url) => {
    return new Promise ((resolve,reject)=>{

    })
}


//to do async 


// what are we awaiting? the function that returns a promise in this case getData?
//this si the code we will use 
//we can have several getdata or fetches inside this function.
//THIS NEEDS GETDATA FUNCTION, THIS FUNCTION MUST PUT THE DATA INSIDE OF A PROMISE!!!
const start = async()=>{
try{
    const data = await getData("./first.txt")
    const data2 = await getData("./second.txt")
    console.log("This is the start function:")
    console.log(data);
    console.log(data2);
}catch(error){
console.log(error);

}

}


start();