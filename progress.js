var start = new Date("January 14, 2019 00:00:00");
var end = new Date("March 22, 2019 00:00:00");

var c; //current progress
var t; //time left
var temp;
var out = 500; //outer rectangle width
//var goal = "End of term";

document.addEventListener('DOMContentLoaded', function (){
    prog = document.getElementById("prog");
    days = document.getElementById("days");
    hours = document.getElementById("hours");
    mins = document.getElementById("mins");
    secs = document.getElementById("secs");
});

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    out = innerWidth - 200 || 500;
    rect(0, 0, out, 60);
    text("Day:", 0, 75);
    rect(0, 80, out, 40);
    text("Hour:", 0, 135);
    rect(0, 140, out, 40);
    text("Minute:", 0, 195);
    rect(0, 200, out, 40);
}

function draw(){
    let now = new Date().getTime();
    c = (now-start)*100/(end-start);
    prog.innerHTML = (Math.round(c*100)/100).toString();
    
    fill(0);
    rect(0, 1, c * (out/100), 58); //total rect
    
    t = (end-now)/1000/60/60/24
    
    //days
    days.innerHTML = Math.floor(t).toString();
    t *= 24
    temp = ((100*(24-(t)%24))/24)
    if (temp > 99.999){
        console.log("day", temp);
        fill(255);
    } else{
        fill(0);
    }
    rect(0, 81, temp * (out/100), 38);
    
    //hours
    hours.innerHTML = Math.floor(t).toString();
    t *= 60
    temp = ((100*(60-(t)%60))/60)
    if (temp > 99.99){
        console.log("hour", temp);
        fill(255);
    } else{
        fill(0);
    }
    rect(0, 141, temp * (out/100), 38);
    
    //mins
    mins.innerHTML = Math.floor(t).toString();
    t *= 60
    temp = ((100*(60-(t%60))/60))
    if (temp > 99.9){
        fill(255);
    } else{
        fill(0);
    }
    rect(0, 200, temp * (out/100), 40);
    
    //secs
    secs.innerHTML = Math.floor(t).toString();
}
