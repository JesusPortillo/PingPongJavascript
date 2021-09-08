import { Board } from "./Board.js";
import { BoardView } from "./BoardView.js";
import {Bar} from "./Bar.js";

window.addEventListener("load", Main);
window.requestAnimationFrame(Main);
var board = new Board(800, 400);
var bar1 = new Bar(20, 100, 40, 100, board);
var bar2 = new Bar(700, 100, 40, 100, board);
var canvas = document.getElementById('canvas');
var board_view = new BoardView(canvas, board);
function Main(){
    board_view.play();
    window.requestAnimationFrame(Main);
    
}


    document.addEventListener("keydown",function(ev) {
        ev.preventDefault();
        if (ev.keyCode === 38) {
            bar1.up();
            console.log(bar1.toString());
        }else if (ev.keyCode === 40) {
            bar1.down();
            console.log(bar1.toString());
        }else if (ev.keyCode === 87) {
            //w
            bar2.up();
        }else if (ev.keyCode === 83) {
            bar2.down();
        }

    }); 
