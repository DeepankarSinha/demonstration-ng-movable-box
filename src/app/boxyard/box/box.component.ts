import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { BoxyardService } from '../boxyard.service';
import { SimpleCollisionService } from '../collision.service';
import { Box } from './box.model';

@Component({
  selector: '[box-g]',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements OnChanges {

  @Input() box: Box; 
  @Input() speed: number;
  @Input() disabled: boolean;
  @Input() disableKeyboardControl: boolean;
  @Output() boxChange = new EventEmitter<Box>();
  @Output() remove = new EventEmitter();

  private readonly textMarginLeft = 5;
  private readonly textMarginTop = 15;

  constructor(private boxyardService: BoxyardService,
    private simpleCollisionService:SimpleCollisionService) {
    this.box = new Box();
    this.speed = 1;
    this.disabled = false;
    this.disableKeyboardControl = false;
  }

  ngOnChanges(){

    if(this.box.id <= 0 && !this.disabled){
      this.box.id = this.boxyardService.getNewBoxId();
      this.boxChange.emit();
    } 

    this.box.textPosX = this.box.x + this.textMarginLeft;
    this.box.textPosY = this.box.y + this.textMarginTop;
  }

  /**
   * Handles key down event.
   * @param event Keyboard event.
   */
  keyDownHandler(event: KeyboardEvent) {

    if(this.disabled || this.disableKeyboardControl){
      return;
    }

    const key = event.key.toUpperCase();
    let x, y = x = 0;

    switch(key){
      case 'W':
        y = -1;
        break;
      case 'A':
        x = -1;
        break;
      case 'S':
        y = 1;
        break;
      case 'D':
        x = 1;
        break;
      case 'DELETE':
        this.remove.emit(this.box);
        break;
    }

    [x, y] = [x*this.speed, y*this.speed];

    this.moveTo(x, y);
  }

  /**
   * Move to x, y.
   * @param x Move to x.
   * @param y Move to y.
   */
  moveTo(x: number, y: number){
    this.box.x += x;
    this.box.y += y;

    if(this.simpleCollisionService.isColliding(this.box)){
      this.box.x -= x;
      this.box.y -= y;
      return;
    }

    this.box.textPosX += x;
    this.box.textPosY += y;

    this.boxChange.emit(this.box);
  }

  /** Handle focus. */
  onFocus(){
    // Do something.
  }
}
