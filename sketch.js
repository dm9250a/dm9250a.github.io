var diameter; 
var angle = 0;
H = 600;
W = 600
function setup() {
  angleMode(DEGREES)
  createCanvas(W, H+100);
  diameter = H - 10;
  noStroke();
  fill(80, 304, 0);
  
  rSlider = createSlider(0, 255, 10);
  rSlider.position(20, 600);
  gSlider = createSlider(0, 255, 204);
  gSlider.position(20, 630);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(20, 660);
 
}

function draw() {
  //background(0);
  fill(283, 409, 947, 10)
  rect(0, 0, width, height)
  textSize(18);
  fill(rSlider.value(),gSlider.value(),bSlider.value(),255);
  noStroke();
  text("R Value = "+rSlider.value(),20+5+130,rSlider.y+10)
  text("G Value = "+gSlider.value(),20+5+130,gSlider.y+10)
  text("B Value = "+bSlider.value(),20+5+130,bSlider.y+10)
  
  var d1 =  SineWave(angle,110,100,2,0);
  var x1 =  SineWave(angle,width/2,.9*width/2,90,0)
  var y1 =  SineWave(angle,width/2,.9*width/2,6,30)
  //var c1 =  SineWave(angle,128,120,1,0)
  
  ellipse(width/2, height/2, d1, d1);
  ellipse(x1, 100, 20, 20);
 
  
  ellipse(x1, height/2, 70, 40);
  ellipse(width/2, y1, 10, 50);
  ellipse(x1, y1, 20, 20);
  //fill(c1,c1,c1,255);
  ellipse(width/2, 200, 40, 40);
  
  angle += 1;
}


// 1  let's talk about this function
function SineWave(t,Mean,Amplitude,Frequency,Phase) {
   var Output = Mean + Amplitude*sin(Frequency*t+Phase);
   return Output;
}
   
   
   
   
