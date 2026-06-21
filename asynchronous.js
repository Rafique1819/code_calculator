function display(some){
    return some;
}

console.log( display("A")
);

setTimeout(() => {
   console.log( display("B"));
   
}, 4000);

console.log(display("C"));

// ----------------------------------------------promise------------------------------------------------------------------

let promis = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("Task is competed")
    }
    else{
        reject("Task is incomplete")
    }
})

promis.then((result)=>{
console.log(result);

})

promis.catch((error)=>{
    console.log(error);
    
})
