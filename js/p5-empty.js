// import p5 from '../node_modules/p5';
const { ipcRenderer } = require("electron");

let color = "red";

function setup(){
    createCanvas(windowWidth, windowHeight);
    background("red");

    ipcRenderer.on("clap", (event, message) => {
        //   this.reset();
        console.log('clapp received');
        color ="blue";
        // this.secondMotor.speed = -1 * Math.min(message / 5, 10);
      });
}


function draw(){
background(color);
}