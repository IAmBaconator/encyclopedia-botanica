import { Component } from '@angular/core';

import { DUMMY_ITEMS } from '../dummy-items';

// Setup randomization to dynamically select a random user from the DUMMY_ITEMS array.
const randomIndex = Math.floor(Math.random() * DUMMY_ITEMS.length)

@Component({
  selector: 'app-botanical-item',
  templateUrl: './botanical-item.html',
  styleUrl: './botanical-item.css'
})
export class BotanicalItem {
  selectedBotanicalItem = DUMMY_ITEMS[randomIndex];

  // Caculate the image path to keep this off the HTML template.
  get imagePath() {
    return 'assets/botanical-items' + this.selectedBotanicalItem.avatar
  }

  onSelectBotanicalItem() {
    console.log('Clicked!');
  }
}
