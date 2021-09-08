class Ball{
    constructor(x,y,radius,board){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedY = 0;
        this.speedX = 3;
        this.board = board;
        board.ball = this;
        this.kind ="circle";
    }
}export {Ball};