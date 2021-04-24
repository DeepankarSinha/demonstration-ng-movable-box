export class Box {
    id: number;
    height: number;
    width: number;
    x: number;
    y: number;
    textPosX: number;
    textPosY: number;

    constructor(x: number = 10, y: number = 10, width: number = 50, height: number = 50){
        this.id = 0;
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.textPosX = 0;
        this.textPosY = 0;
    }
}