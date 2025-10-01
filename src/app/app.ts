import { Component, input, signal } from '@angular/core';
import { Header } from "./header/header";
import { BotanicaItem } from "./botanica-item/botanica-item";
import { DUMMY_ITEMS } from './dummy-items';
import { BotanicaDetails } from "./botanica-details/botanica-details";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, BotanicaItem, BotanicaDetails]
})
export class App {
  protected readonly title = signal('encyclopedia-botanica');
  botanicaItems = DUMMY_ITEMS;
  selectedBotanicaItemId?: string;

  get selectedBotanicaItem() {
    return this.botanicaItems.find((BotanicaItem) => BotanicaItem.id === this.selectedBotanicaItemId);
  }

  onSelectBotanicaItem(id: string) {
    this.selectedBotanicaItemId = id;
  }
}
