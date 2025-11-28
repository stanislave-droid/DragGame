let dragging=false, startX=0, startY=0, x=200, y=150;
let player;
const SLOP = 8; // просторовий поріг

function setup(){ 
  createCanvas(400,300); 
  player = { x: width/2, y: height/2, r: 16};
}
function draw(){
  background(245);
  fill(255, 255, 255);
  circle(player.x, player.y, player.r * 2);
  if (dragging) { player.x = mouseX; player.y = mouseY; }
  keychecker()
}
function mousePressed(){ startX=mouseX; startY=mouseY; }
function mouseDragged(){
  if (!dragging && dist(mouseX,mouseY,startX,startY) > SLOP) dragging = true;
}
function mouseReleased(){ dragging=false; }
function keychecker(){
  if (keyIsDown(UP_ARROW))
    player.y-=10;
  if (keyIsDown(DOWN_ARROW))
    player.y+=10;
  if (keyIsDown(LEFT_ARROW))
    player.x-=10;
  if (keyIsDown(RIGHT_ARROW))
    player.x+=10;
  
  player.x = constrain(player.x, player.r, width - player.r);
  player.y = constrain(player.y, player.r, height - player.r);
}
