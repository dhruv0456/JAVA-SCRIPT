let count = document.getElementById("count")

let num = 1;

let = timer;



function start() {
    count.innerText = num;
    num++;
    timer = setTimeout(()=>{
        start()
    }, 1000)
}

timer = setInterval(()=>{
    count.innerText = num;
    num++;
}, 1000);



function stop (){
    clearTimeout(timer);
}





