import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-botanical-items',
  imports: [],
  templateUrl: './botanical-items.html',
  styleUrl: './botanical-items.css'
})

export class BotanicalItems {
  name = input.required<string>();
  avatar = input.required<string>();
  imagePath = computed(() => {
    return 'assets/botanical-items/' + this.avatar(); // Add back in after I import my own flowers.
  });
}
