const Display=document.createElement("p");
const bodyelement=document.querySelector("body");

var timeleft=10;
var Timer=setInterval(coundown,1000)

function coundown(){
    if(timeleft==0){
        clearInterval(Timer)
        Display.classList.add("timer"); 
        Display.innerHTML="Happy Engineers Day"
    }
    else{
      Display.innerHTML=timeleft<10?`0${timeleft}`:timeleft; 
      Display.classList.add("timer"); 
      bodyelement.append(Display);
      timeleft--;
    }
}