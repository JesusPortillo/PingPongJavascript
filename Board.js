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
        var elements = [];
        for (let i = 0; i < this.bars.length; i++) {
            elements[i] = this.bars[i];
        }
        elements.push(this.ball);
        return elements;
    }
    
    
}export {Board};