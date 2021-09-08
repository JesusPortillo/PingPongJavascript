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
        
        switch (element.kind) {
            
            case "rectangle":
                ctx.fillRect(element.x, element.y, element.width, element.height);
                break;
            case "circle":
                ctx.beginPath();
                ctx.arc(element.x, element.y, element.radius, 0, 7);
                ctx.fill();
                ctx.closePath();
                break;
        }
    }

    clean(){
        this.ctx.clearRect(0,0,this.board.width,this.board.height);
    }

    play(){
        this.clean();
        this.drawBoardView();
    }
}export {BoardView};