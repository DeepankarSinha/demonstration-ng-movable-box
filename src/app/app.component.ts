import { Component, ViewChild } from '@angular/core';
import { Box } from './boxyard/box/box.model';
import { BoxyardComponent } from './boxyard/boxyard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('boxyard') private boxYard!: BoxyardComponent

  boxyardWidth = 1000;
  boxyardHeight = 700;
  newBox: Box;
  isKeyboardControlDisabled: boolean;

  constructor() {
    this.newBox = new Box();
    this.isKeyboardControlDisabled = false;
  }
  
  /** Adds a new box. */
  addNewBox(){
    this.boxYard.addBox({...this.newBox});
  }

  /** Toggle keyboard control. */
  toggleKeyboardControl() {
    this.isKeyboardControlDisabled = !this.isKeyboardControlDisabled;
  }

  /** Toggle visibility of collision box. */
  toggleCollisionBox(){
    this.boxYard.toggleCollisionBox();
  }

  /** Adds a non-movable collision box. */
  addCollisionBox(){
    this.boxYard.simpleCollisionService.addCollisionBox({...this.newBox});
  }
}
