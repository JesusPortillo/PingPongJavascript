import { Board } from "./Board.js";
import { BoardView } from "./BoardView.js";
import {Bar} from "./Bar.js";
import {Ball} from "./Ball.js";



window.requestAnimationFrame(Main);
var board = new Board(800, 400);
var bar1 = new Bar(20, 100, 40, 100, board);
var bar2 = new Bar(740, 100, 40, 100, board);
var canvas = document.getElementById("canvas");
var board_view = new BoardView(canvas, board);
var ball = new Ball(350,100,10,board);

function Main(){
    board_view.play();
    window.requestAnimationFrame(Main);
    
}


document.addEventListener("keydown",function(ev) {
   
    if (ev.keyCode === 38) {
        ev.preventDefault();
        if (0 !== bar1.y) {
            bar1.up();
        }
        console.log(bar1.toString());
    }else if (ev.keyCode === 40) {
        ev.preventDefault();
        if (400 - bar1.height !== bar1.y) {
            bar1.down();
        }
        console.log(bar1.toString());
    }else if (ev.keyCode === 87) {
        ev.preventDefault();
        //w
        if (0 !== bar2.y) {
            bar2.up();
          }
    }else if (ev.keyCode === 83) {
        ev.preventDefault();
        if (400 - bar1.height !== bar2.y) {
            bar2.down();
          }
    }else if (ev.keyCode === 32) {
        ev.preventDefault();
        board.playing = !board.playing;
    }

}); 


