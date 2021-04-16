var sec,secang,hr,min,hourang,minuteang;






function setup() {
  createCanvas(800,800);
angleMode(DEGREES);


}

function draw() {
  background("cyan");  
translate(400,400)
rotate(-90)
sec=second()
hr=hour()
min=minute()
secang=map(sec,0,60,0,360)
hrang=map(hr,0,12,0,360)
push()
stroke("green")
strokeWeight(5.6)
rotate(secang)
line(0,0,100,0)
pop();
push()
stroke("gold")
strokeWeight(5.6)
rotate(hrang)
line(0,0,100,0)
pop();

}