import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-botanical-item',
  templateUrl: './botanical-item.html',
  styleUrl: './botanical-item.css'
})
export class BotanicalItem {

  // input = special function for newer setup using with signals.
  id = input.required<string>();
  avatar = input.required<string>(); // <string> = input<T>(): InputSignal<T>; a TS initialization for an Angular value.
  name = input.required<string>();
  select = output<string>(); // Declares an output that emits strings.

  imagePath = computed(() => {
    return 'assets/botanical-items/' + this.avatar(); // Add back in after I import my own flowers.
  });

  onSelectBotanicalItem() {
    this.select.emit(this.id());
  }
}
