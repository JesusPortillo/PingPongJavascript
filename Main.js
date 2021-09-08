import { Board } from "./Board.js";
import { BoardView } from "./BoardView.js";

window.addEventListener("load", Main);

function Main(){
    var board = new Board(800, 400);
    var canvas = document.getElementById('canvas');
    var board_view = new BoardView(canvas, board);
}