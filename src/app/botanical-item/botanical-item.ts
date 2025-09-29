import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botanical-item',
  templateUrl: './botanical-item.html',
  styleUrl: './botanical-item.css'
})
export class BotanicalItem {

  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return 'assets/botanical-items/' + this.avatar;
  }

  onSelectBotanicalItem() {

  }
}
