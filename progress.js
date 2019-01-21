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
    rect(0, 0, c * (out/100), 60); //total rect
    
    t = (end-now)/1000/60/60/24
    
    //days
    days.innerHTML = Math.floor(t).toString();
    t *= 24
    temp = ((100*(24-(t)%24))/24)
    rect(0, 80, temp * (out/100), 40);
    fill(255);
    rect(temp * (out/100), 80, out - (temp * (out/100)), 40);
    fill(0);
    
    //hours
    hours.innerHTML = Math.floor(t).toString();
    t *= 60
    temp = ((100*(60-(t)%60))/60)
    rect(0, 140, temp * (out/100), 40);
    fill(255);
    rect(temp * (out/100), 140, out - (temp * (out/100)), 40);
    fill(0);
    
    //mins
    mins.innerHTML = Math.floor(t).toString();
    t *= 60
    temp = ((100*(60-(t%60))/60))
    rect(0, 200, temp * (out/100), 40);
    fill(255);
    rect(temp * (out/100), 200, out - (temp * (out/100)), 40); //white space
    fill(0);
    
    //secs
    secs.innerHTML = Math.floor(t).toString();
}

function clearBar(x){
    //console.log(x);
    fill(255);
    rect(0, x, out, 40);
    fill(0);
}