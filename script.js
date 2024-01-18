let c = document.getElementById("canvas");
c.height = window.innerHeight;
c.width = window.innerWidth;

let ctx = c.getContext('2d');
function randomColor(){
  let ranR = Math.floor(Math.random()*255);
  let ranG = Math.floor(Math.random()*255);
  let ranB = Math.floor(Math.random()*255);

  return `rgb(${ranR},${ranG},${ranB})`;
}
let userGive = prompt("Enter a Number:");

// ctx.fillRect(10,10,10,10);
// c.addEventListener("mousemove",cleanCanvas);

// function cleanCanvas(event){
//     let x = event.offsetX;
//     let y = event.offsetY;
//     ctx.clearRect(x,y,100,100);
// }
// // cleanCanvas();

let callCount = 0;
function makeArc(){
        ctx.clearRect(30,0,200,40);
        if(callCount >= 1000){
        ctx.clearRect(30,0,300,40);  
        }
        ctx.beginPath();
    // for(let i = 0; i<=10; i++){
        let x = Math.floor(Math.random()*2000);
        let y = Math.floor(Math.random()*1000);
        let z = Math.floor(Math.random()*10);
        ctx.arc(x, y, z, 0, Math.PI*2, false);
        ctx.strokeStyle = randomColor();
        ctx.stroke();
        ctx.closePath();
        ctx.font = '16px Arial';
        ctx.fillStyle = randomColor();
        callCount++;
        ctx.fillText(callCount,x,y);
        ctx.font = '30px Arial';
        ctx.fillText("Count:" + callCount,30,30);

    // }
}

let i = 1;
function draw(){
  if(i<=userGive){
    makeArc();
    i++;
    setTimeout(draw,100);
  }
}
draw()
console.log(makeArc);