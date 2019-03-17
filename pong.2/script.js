
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


class Paddle {
  constructor(x,y) {
    this.x = x;
    this.y = y
  }
  draw(context){
    context.fillStyle = "black";
    context.fillRect(this.x,this.y,20,200);
  }
}

class Ball {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = "10";
    context.fillStyle = this.color;
    context.arc(this.x,this.y,this.r,0,Math.PI*2);
    context.closePath();
    context.stroke();
    context.fill();
  }
}

let myBall = new Ball(100,100,20,"yellow");
let myBall2 = new Ball(220,220,50, "red");
let v_x = 5;
let v_y = 7;

let v_x2 = 4;
let v_y2 = -3;

let left = new Paddle(5,100);
let right = new Paddle(canvas.width-40,100)

myBall.draw(context);
myBall2.draw(context);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  myBall.x += v_x;
  myBall.y += v_y;
  myBall.draw(context);
  if(myBall.x < myBall.r || myBall.x > canvas.width - myBall.r){
    v_x = - v_x;
  }
  if(myBall.y < myBall.r || myBall.y > canvas.height - myBall.r){
    v_y = - v_y;
  }

  myBall2.x += v_x2;
  myBall2.y += v_y2;
  myBall2.draw(context);
  if(myBall2.x < myBall2.r || myBall2.x > canvas.width - myBall2.r){
    v_x2 = - v_x2;
  }
  if(myBall2.y < myBall2.r || myBall2.y > canvas.height - myBall2.r){
    v_y2 = - v_y2;
  }



  left.draw(context);
  right.draw(context);
}


animate();

function keyHandler(evt){
  console.log(evt.key);
  switch (evt.key) {
    case "w": left.y -= 5;
      break;
    case "s": left.y += 5;
      break;
    case "ArrowUp": right.y -= 5;
        break;
    case "ArrowDown": right.y += 5;
        break;
        default:

  }

}

window.addEventListener('keydown',keyHandler);
