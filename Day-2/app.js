//conditional statements 


// let  a = 5;

// if(a%2==0){
//     console.log("even");
// }else {
//     console.log("odd");
// }



let a = prompt ("Enter: \n  1 for ordering pizza \n  2 for burger \n 3 for both");

console.log(typeof(a));

if (a == 1){
    console.log("you ordered a pizza 🍕");
    
} else {
    console.log("you ordered a burger 🍔");
    
}

if (a == 1){
    console.log("you ordered a pizza");
    } else if(a == 2) {
        console.log("you ordered a burger");
        
    } else if (a == 3) {
        console.log("you ordered both ");  

    } else {
        console.log("you cancel ordered ❌");
        
    }