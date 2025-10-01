import { Component, computed, Input, input } from '@angular/core';
import { BotanicaNote } from "./botanica-note/botanica-note";

@Component({
  selector: 'app-botanica-details',
  imports: [BotanicaNote],
  templateUrl: './botanica-details.html',
  styleUrl: './botanica-details.css'
})

export class BotanicaDetails {
  @Input({ required: true}) botanicaItemId!: string; // Couldn't figure out how to use input for this variable with the .filter().
  //botanicaItemId = input.required<string>();
  name = input.required<string>(); // Removed .required to add fallback code to ensure a value is passed after the app.ts name lookup.
  profile = input<string>();
  imagePath = computed(() => {
    return 'assets/botanica-items/' + this.profile(); // Add back in after I import my own flowers.
  });
  notes = [
    {
      id: 'n1',
      botanicaItemId: 'i1',
      title: 'Flowers Are Cool',
      summary: 'Saw this flower the other day and it was cool.',
      noteDate: '2025-10-01',
    },
    {
      id: 'n2',
      botanicaItemId: 'i1',
      title: 'Flowers Rock',
      summary: 'Saw this flower the other day and it was cool.',
      noteDate: '2025-10-01',
    },
    {
      id: 'n3',
      botanicaItemId: 'i2',
      title: 'Flowers Alive',
      summary: 'Saw this flower the other day and it was cool.',
      noteDate: '2025-10-01',
    },
    {
      id: 'n4',
      botanicaItemId: 'i4',
      title: 'Flowers Lost',
      summary: 'Saw this flower the other day and it was cool.',
      noteDate: '2025-10-01',
    },
  ];

  get selectedBotanicaItemNotes() {
    return this.notes.filter((note) => note.botanicaItemId === this.botanicaItemId);
  }
}
