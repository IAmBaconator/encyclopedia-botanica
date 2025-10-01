import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewNoteData } from '../botanica-note/botanica-note.model';

@Component({
  selector: 'app-add-botanica-note',
  imports: [FormsModule],
  templateUrl: './add-botanica-note.html',
  styleUrl: './add-botanica-note.css'
})
export class AddBotanicaNote {
  cancel = output<void>();
  add = output<NewNoteData>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  
  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    })
  }
}
