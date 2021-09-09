class Ball{
    constructor(x,y,radius,board){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedY = 0;
        this.speedX = 3;
        this.board = board;
        this.direction = 1;
        this.bounce_angle = 0;
        this.max_bounce_angle = Math.PI / 12;
        this.speed = 7;

        board.ball = this;
        this.kind ="circle";

    }

    get width(){
        return this.radius * 2;
    }

    get height(){
        return this.radius * 2;
    }

    move(){
        this.x += (this.speedX * this.direction);
        this.y += (this.speedY);

    }

    collision(bar){
        let relative_intersect_y = (bar.y + (bar.height / 2 )) - this.y;
        let normalized_intersect_y = relative_intersect_y / (bar.height / 2);
        this.bounce_angle = normalized_intersect_y * this.max_bounce_angle;
        this.speedY = this.speed * -Math.sin(this.bounce_angle);
        this.speedX = this.speed * Math.cos(this.bounce_angle);
        if (this.x > (this.board.width / 2)) this.direction = -1;
        else this.direction = 1;
    }


    keepIntoBoard() {
        if (
          this.y + this.speedY > this.board.height - this.radius ||
          this.y + this.speedY < this.radius
        ) {
          this.speedY = -this.speedY;
        }
      }
}export {Ball};