class Board{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.gameOver = false;
        this.bars = [];
        this.ball = null;
    }

    get elements(){
        var elements = this.bars;
        elements.push(ball);
        return elements;
    }
}export {Board};