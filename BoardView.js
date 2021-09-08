class BoardView{
    constructor(canvas, board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");
    }

    drawBoardView(){
        for (let i = this.board.elements.length - 1; i >= 0 ; i--) {
            const ele = this.board.elements[i];

            this.draw(this.ctx, ele);
            
        }
    }

    draw(ctx, element){
        if (element !== null && element.hasOwnProperty("kind")) {
            switch (element.kind) {
                case "rectangle":
                    ctx.fillRect(element.x, element.y, element.width, element.height);
                    break;
            }
        }
    }
}export {BoardView};