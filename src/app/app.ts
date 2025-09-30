import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { BotanicalItem } from "./botanical-item/botanical-item";
import { DUMMY_ITEMS } from './dummy-items';
import { BotanicalItems } from "./botanical-items/botanical-items";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, BotanicalItem, BotanicalItems]
})
export class App {
  protected readonly title = signal('encyclopedia-botanica');
  botanicalItems = DUMMY_ITEMS;
  selectedBotanicalItemId = 'i1';

  get selectedBotanicalItem() {
    return this.botanicalItems.find((BotanicalItem) => BotanicalItem.id === this.selectedBotanicalItemId);
  }

  onSelectBotanicalItem(id: string) {
    this.selectedBotanicalItemId = id;
  }
}
