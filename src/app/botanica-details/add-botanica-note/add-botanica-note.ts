import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-botanica-note',
  imports: [],
  templateUrl: './add-botanica-note.html',
  styleUrl: './add-botanica-note.css'
})
export class AddBotanicaNote {
  cancel = output<void>();
  
  onCancel() {
    this.cancel.emit();
  }
}
