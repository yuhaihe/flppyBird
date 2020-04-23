/**
 * @description 下半部分的铅笔
 */
import { Pencil } from "./Pencil.js";
import { DataStore } from "../base/DataStore.js";
import { Sprite } from "../base/Sprite.js";

export class DownPencil extends Pencil {
  constructor(top) {
    const image = DataStore.getInstance().res.get('pencilDown');
    super(image, top)
  }

  draw() {
    let gap = window.innerHeight/5;
    this.y = this.top+gap;
    super.draw();
  }
}