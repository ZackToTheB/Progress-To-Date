var start = new Date("January 14, 2019 00:00:00");
var end = new Date("March 22, 2019 00:00:00");

var c; //current progress
var t; //time left
var temp;
var out; //outer rectangle width
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
    
    out = innerWidth - 50 || 500;
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
    prog.innerHTML = (Math.round(c*10000)/10000).toString();
    
    fill(r(c), g(c), 0);
    rect(0, 0, c * (out/100), 60); //total rect
    
    t = (end-now)/1000/60/60/24
    
    //days
    days.innerHTML = Math.floor(t).toString();
    t *= 24
    temp = ((100*(24-(t)%24))/24)
    fill(r(temp), g(temp), 0);
    rect(0, 80, temp * (out/100), 40);
    fill(255);
    rect(temp * (out/100), 80, out - (temp * (out/100)), 40);
    
    //hours
    hours.innerHTML = Math.floor(t).toString();
    t *= 60
    temp = ((100*(60-(t)%60))/60)
    fill(r(temp), g(temp), 0);
    rect(0, 140, temp * (out/100), 40);
    fill(255);
    rect(temp * (out/100), 140, out - (temp * (out/100)), 40);
    
    //mins
    mins.innerHTML = Math.floor(t).toString();
    t *= 60
    temp = ((100*(60-(t%60))/60))
    fill(r(temp), g(temp), 0);
    rect(0, 200, temp * (out/100), 40);
    fill(255);
    rect(temp * (out/100), 200, out - (temp * (out/100)), 40); //white space
    
    //secs
    secs.innerHTML = Math.floor(t).toString();
}

function r(v){
    if (v < 50){
        return 255
    } else {
        return 255*((100-v)/50)
    }
}

function g(v){
    if (v > 50){
        return 255
    } else {
        return 255*(v/50)
    }
}