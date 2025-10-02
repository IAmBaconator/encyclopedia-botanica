import { Component, computed, Input, input } from '@angular/core';
import { BotanicaNote } from "./botanica-note/botanica-note";
import { AddBotanicaNote } from './add-botanica-note/add-botanica-note';
import { BotanicaDetailsService } from './botanica-details.service';

@Component({
  selector: 'app-botanica-details',
  imports: [BotanicaNote, AddBotanicaNote],
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
  isAddingNote = false;

  constructor(private botanicaDetailsService: BotanicaDetailsService) {}

  get selectedBotanicaItemNotes() {
    return this.botanicaDetailsService.getBotanicaNotes(this.botanicaItemId);
  }

  onDeleteBotanicaNote(id: string) {}

  onCreateBotanicaNote() {
    this.isAddingNote = true;
  }

  onCloseAddBotanicaNote() {
    this.isAddingNote = false;
  }
}
