import { Component, output } from '@angular/core';
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
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  
  onCancel() {
    this.cancel.emit();
  }
}
