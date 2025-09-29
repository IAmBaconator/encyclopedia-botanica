import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { BotanicalItem } from "./botanical-item/botanical-item";
import { DUMMY_ITEMS } from './dummy-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, BotanicalItem]
})
export class App {
  protected readonly title = signal('encyclopedia-botanica');
  botanicalItems = DUMMY_ITEMS;

  onSelectBotanicalItem(id: string) {
    console.log('Selected user with id ' + id);
  }
}
