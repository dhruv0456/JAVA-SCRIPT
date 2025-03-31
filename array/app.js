// let arr=[123,154,45451,5121.24,154]
// let arr2=["apple","banana","graps","orange"];
// let num = 0;

// function change(){
//     let heading = document.getElementById("name");
//     heading.innerText = arr2[num]
//     num++;
//     if(num >= arr2.length){
//         num=0;
//     }
// }

let arr3=["gray","orange","red","purple"];
let num = 0;

function change(){
    let heading = document.getElementById("name");
    heading.style.backgroundColor = arr3[num]
    num++;
    if(num == arr3.length){
        num = 0;
    }
}