import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-botanica-items',
  imports: [],
  templateUrl: './botanica-items.html',
  styleUrl: './botanica-items.css'
})

export class BotanicaItems {
  name = input<string>(); // Removed .required to add fallback code to ensure a value is passed after the app.ts name lookup.
  profile = input<string>();
  imagePath = computed(() => {
    return 'assets/botanica-items/' + this.profile(); // Add back in after I import my own flowers.
  });
}
