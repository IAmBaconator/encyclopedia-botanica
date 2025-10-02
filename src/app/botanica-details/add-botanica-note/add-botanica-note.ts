import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewNoteData } from '../botanica-note/botanica-note.model';
import { BotanicaDetailsService } from '../botanica-details.service';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-add-botanica-note',
  imports: [FormsModule],
  templateUrl: './add-botanica-note.html',
  styleUrl: './add-botanica-note.css'
})
export class AddBotanicaNote {
  botanicaItemId = input.required<string>();
  close = output<void>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  private botanicaDetailsService = inject(BotanicaDetailsService)
  
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.botanicaDetailsService.addBotanicaNote(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      }, 
      this.botanicaItemId()
    );
    this.close.emit();
  }
}
