import { Board } from "./Board.js";
import { BoardView } from "./BoardView.js";
import {Bar} from "./Bar.js";

window.addEventListener("load", Main);

function Main(){
    var board = new Board(800, 400);
    var bar = new Bar(20, 100, 40, 100, board);
    var bar = new Bar(700, 100, 40, 100, board);
    var canvas = document.getElementById('canvas');
    var board_view = new BoardView(canvas, board);
    board_view.drawBoardView();
}