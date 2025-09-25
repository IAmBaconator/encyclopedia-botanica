import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { BotanicalItem } from "./botanical-item/botanical-item";

@Component({
  selector: 'app-root',
  imports: [Header, BotanicalItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('encyclopedia-botanica');
}
