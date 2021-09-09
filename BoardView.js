class BoardView{
    constructor(canvas, board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");
    }

    

    draw(ctx, element){
        
        switch (element.kind) {
            
            case "rectangle":
                ctx.fillRect(element.x, element.y, element.width, element.height);
                ctx.fillStyle = 'black';

                break;
            case "circle":
                ctx.beginPath();
                ctx.arc(element.x, element.y, element.radius, 0, 7);
                
                ctx.fill();
                ctx.closePath();
                
                break;
        }
    }

    drawBoardView(){
        for (let i = this.board.elements.length - 1; i >= 0 ; i--) {
            const ele = this.board.elements[i];
            this.draw(this.ctx, ele);   
        }
    }

    clean(){
        this.ctx.clearRect(0,0,this.board.width,this.board.height);
    }

    play(){
        this.drawBoardView();
        if (this.board.playing) {
            this.clean();
            this.drawBoardView();
            this.check_collisions();
            this.board.ball.move();
        }
        
    }


    check_collisions(){
        for (var i = this.board.bars.length - 1; i >= 0; i--) {
            var bar = this.board.bars[i];
            if (this.hit(bar, this.board.ball)) {
                this.board.ball.collision(bar);
            }
        }
    }

    hit(a, b){
        var hit = false;
  //Colisiones horizontales
        if (b.x + b.width >= a.x && b.x < a.x + a.width) {
    //Colisiona verticales
            if (b.y + b.height >= a.y && b.y < a.y + a.height) hit = true;
        }
  //Colisión de a con b
        if (b.x <= a.x && b.x + b.width >= a.x + a.width) {
            if (b.y <= a.y && b.y + b.height >= a.y + a.height) hit = true;
        }
  //Colision b con a
        if (a.x <= b.x && a.x + a.width >= b.x + b.width) {
    //Colisiona verticales
            if (a.y <= b.y && a.y + a.height >= b.y + b.height) hit = true;
        }
        return hit;
    }
}export {BoardView};