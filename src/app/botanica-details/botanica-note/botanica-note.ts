import { Component, input } from '@angular/core';
import { type NoteObj } from './botanica-note.model';

@Component({
  selector: 'app-botanica-note',
  imports: [],
  templateUrl: './botanica-note.html',
  styleUrl: './botanica-note.css'
})
export class BotanicaNote {
  noteObj = input.required<NoteObj>();
}
