import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-botanical-items',
  imports: [],
  templateUrl: './botanical-items.html',
  styleUrl: './botanical-items.css'
})

export class BotanicalItems {
  name = input<string>(); // Removed .required to add fallback code to ensure a value is passed after the app.ts name lookup.
  profile = input<string>();
  imagePath = computed(() => {
    return 'assets/botanical-items/' + this.profile(); // Add back in after I import my own flowers.
  });
}
