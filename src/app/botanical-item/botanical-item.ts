import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-botanical-item',
  templateUrl: './botanical-item.html',
  styleUrl: './botanical-item.css'
})
export class BotanicalItem {

  // input = special function for newer setup using with signals
  avatar = input.required<string>(); // <string> = input<T>(): InputSignal<T>; a TS initialization for an Angular value.
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/botanical-items/' + this.avatar();
  });

  onSelectBotanicalItem() {}
}
