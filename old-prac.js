// Promise Concept

let ritaPromise = new Promise((resolve, reject) => {
    let i = 0;
    if(i == 5){
        resolve("This is True")
    }else {
        reject("This is False");
    }
})

ritaPromise.then((res)=>{
 console.log(res)
}).catch((err) => {
  console.log(err)
})


// creating a table

// let a = 10;
// let b = 1;

// for(let i = 0; i <= a; i++){
//     console.log(a + " * " + b + " = " + b*a);
//     b++;
// }


// Star prints

// let a = 10;
// let b = "*";

// for (let i = 0; i <= a; i++) {
//   console.log(b);
//   b = b + "*";
// }

// creating function 

// function printStar(){
//     let b = "*";
//     for(let i = 0; i <= 10; i++){
//         console.log(b);
//         b = b + "*";
//     }
// }

// printStar();

// function with tables

    
// function theTable(y){
//     for(var i = 0; i <= 10; i++){
//         console.log(y, "x", i, "=", y*i)
//     }
// }

// theTable(3);
// console.log("another table");
// theTable(10);

// function with return

// function theSum(a, b){
//     let add = a + b;
//     return add;
// }

// const theValue = theSum(10, 200);
// console.log("The Output is:" + theValue + 5);
// console.log("the end");

// var text = " This is a string with long text"

// console.log(text.slice(-8));
