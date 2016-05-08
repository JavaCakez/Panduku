import React from 'react';
import ReactDOM from 'react-dom';

const CANVAS_WIDTH = 200;
const CANVAS_HEIGHT = 100;

export default class World extends React.Component {

  drawCircle() {
    var c = document.getElementById("world");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
  }
  
  render() {
    return (
      <canvas id="world" width={CANVAS_WIDTH} height={CANVAS_HEIGHT}></canvas>
    )
  }
}
