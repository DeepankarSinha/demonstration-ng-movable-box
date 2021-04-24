import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './box/box.component';
import { BoxyardComponent } from './boxyard.component';
import { BoxyardService } from './boxyard.service';
import { SimpleCollisionService } from './collision.service';

@NgModule({
  declarations: [
    BoxComponent,
    BoxyardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoxyardComponent
  ],
  providers: [BoxyardService, SimpleCollisionService],
  bootstrap: [BoxyardComponent]
})
export class BoxyardModule { }
