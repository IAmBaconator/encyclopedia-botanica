import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { BotanicaItem } from "./botanica-item/botanica-item";
import { DUMMY_ITEMS } from './dummy-items';
import { BotanicaItems } from "./botanica-items/botanica-items";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, BotanicaItem, BotanicaItems]
})
export class App {
  protected readonly title = signal('encyclopedia-botanica');
  botanicaItems = DUMMY_ITEMS;
  selectedBotanicaItemId = 'i1';

  get selectedBotanicaItem() {
    return this.botanicaItems.find((BotanicaItem) => BotanicaItem.id === this.selectedBotanicaItemId);
  }

  onSelectBotanicaItem(id: string) {
    this.selectedBotanicaItemId = id;
  }
}
