import { Component, computed, input } from '@angular/core';
import { BotanicaNote } from "./botanica-note/botanica-note";

@Component({
  selector: 'app-botanica-details',
  imports: [BotanicaNote],
  templateUrl: './botanica-details.html',
  styleUrl: './botanica-details.css'
})

export class BotanicaDetails {
  name = input<string>(); // Removed .required to add fallback code to ensure a value is passed after the app.ts name lookup.
  profile = input<string>();
  imagePath = computed(() => {
    return 'assets/botanica-items/' + this.profile(); // Add back in after I import my own flowers.
  });
}
