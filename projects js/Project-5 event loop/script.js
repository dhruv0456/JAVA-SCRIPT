let images = [
    'img.1.jpg',
    'img.2.jpg',
    'img.3.jpg',
    'img.4.jpg'
];

let firstImage = 0;
let lastImage = images.length - 1;
let cnt = 0;

function slide(){
    let imageElement = document.querySelector("#image");
    imageElement.src = images[cnt];
    cnt++;
    if(cnt > lastImage) {
        cnt = firstImage;
    }
}

setInterval(()=>{
    slide();
},2000);