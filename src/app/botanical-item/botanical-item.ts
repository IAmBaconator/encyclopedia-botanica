import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botanical-item',
  templateUrl: './botanical-item.html',
  styleUrl: './botanical-item.css'
})
export class BotanicalItem {

  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  get imagePath() {
    return 'assets/botanical-items/' + this.avatar;
  }

  onSelectBotanicalItem() {

  }
}
