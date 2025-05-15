// async function fetchApi() {
//     let response = await fetch('https://fakestoreapi.com/products')
//     let res = await response.json ()
//     localStorage.setItem("Data",JSON.stringify(res));
// }

// fetchApi()



// let body = document.getElementById("bd");
// async function fetchApi() {
//     let response = await fetch("https://dog.ceo/api/breeds/image/random")
//     let res = await response.json ()

//     let img = document.createElement("img");
//     img.src = res.message
//     img.style.width = "30%"

//     body.append(img)
// }

// fetchApi()



async function fetchApi() {
    let response = await fetch("https://wttr.in/jaipur?format=j1");
    let res = await response.json ()
    console.log(res);
    
}

fetchApi()
