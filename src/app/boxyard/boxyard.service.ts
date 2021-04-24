import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoxyardService {
  private boxId = 0;

  constructor() {
  }

  /**
   * Get a new box id
   * @returns Box Id.
   */
  public getNewBoxId(): number{
    return this.boxId++;
  }
}
