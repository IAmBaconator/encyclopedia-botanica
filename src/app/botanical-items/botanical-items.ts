import { Component, input } from '@angular/core';

@Component({
  selector: 'app-botanical-items',
  imports: [],
  templateUrl: './botanical-items.html',
  styleUrl: './botanical-items.css'
})

export class BotanicalItems {
  name = input.required<string>();
}
