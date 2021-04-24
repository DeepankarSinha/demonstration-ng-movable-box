import { Injectable } from "@angular/core";
import { Box } from "./box/box.model";

@Injectable()
export class SimpleCollisionService{

    private boundingBoxes: Box[] = [];

    /**
     * Adds a collision box.
     * @param box Collision box.
     */
    addCollisionBox(box: Box){
        this.boundingBoxes.push(box);
    }

    /**
     * Test if box is colliding with the collision boxes.
     * @param testBox Box to test collision.
     * @returns True if colliding.
     */
    isColliding(testBox: Box): boolean{
        for(let i = 0; i < this.boundingBoxes.length; i++){
            if(this.checkCollision(testBox, this.boundingBoxes[i])){
                return true;
            }
        }

        return false;
    }

    /** Get collision boxes. */
    getCollisionBoxes(){
        return this.boundingBoxes;
    }

    /**
     * Check if two boxes are colliding.
     * @param box1 First box.
     * @param box2 Second box.
     * @returns True if colliding.
     */
    private checkCollision(box1: Box, box2: Box): boolean{
        const collision =  box1.x < box2.x + box2.width &&
            box1.x + box1.width > box2.x &&
            box1.y < box2.y + box2.height &&
            box1.y + box1.height > box2.y;
        
        return collision;
    }
}