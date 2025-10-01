import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-botanica-note',
  imports: [FormsModule],
  templateUrl: './add-botanica-note.html',
  styleUrl: './add-botanica-note.css'
})
export class AddBotanicaNote {
  cancel = output<void>();

  //form variables
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  
  onCancel() {
    this.cancel.emit();
  }
}
