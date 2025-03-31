let inp = document.querySelector(".inp")
    let inp1 = document.querySelector( ".inp1")
    let h1 = document.querySelector (".h1");
function sub(){
    
    h1.innerHTML = Number (inp.value) - Number (inp1.value)
    inp.value = ""
    inp1.value = ""
}
function add(){
    
    h1.innerHTML = Number (inp.value) + Number (inp1.value)
    inp.value = ""
    inp1.value = ""
}
function mul(){
    
    h1.innerHTML = Number (inp. value) * Number (inp1.value)
    inp.value = ""
    inp1.value = ""
}
function div(){
    
    h1.innerHTML = Number (inp. value) / Number (inp1.value)
    inp.value = ""
    inp1.value = ""
}