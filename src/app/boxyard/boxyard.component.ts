import { Component, Input, OnInit } from '@angular/core';
import { Box } from './box/box.model';
import { SimpleCollisionService } from './collision.service';

@Component({
  selector: 'boxyard',
  templateUrl: './boxyard.component.html',
  styleUrls: ['./boxyard.component.scss']
})
export class BoxyardComponent implements OnInit {

  @Input() width = 1000;
  @Input() height = 700;
  @Input() speed = 0;
  @Input() disableKeyboardControl = false;

  
  isCollisionBoxVisible = true;
  boxes: Box[];

  constructor(public simpleCollisionService:SimpleCollisionService) {
    this.boxes = [];
  }

  ngOnInit(): void {
    // Bounding collision box.
    this.simpleCollisionService.addCollisionBox(new Box(1,0,1,this.height));
    this.simpleCollisionService.addCollisionBox(new Box(0,1,this.width,1));
    this.simpleCollisionService.addCollisionBox(new Box(this.width-1,0,1,this.height));
    this.simpleCollisionService.addCollisionBox(new Box(0,this.height-1,this.width,1));
  }

  /** Add a box. */
  addBox(box: Box){
    this.boxes.push(box);
  }

  /** Remove a box. */
  removeBox(box: Box){
    const boxId = this.boxes.findIndex(x => x.id === box.id);
    this.boxes.splice(boxId, 1);
  }

  /** Toggle visiblity of collision box. */
  toggleCollisionBox() {
    this.isCollisionBoxVisible = !this.isCollisionBoxVisible;
  }

}
