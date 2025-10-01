import { Component, input } from '@angular/core';

interface NoteObj {
  id: string;
  botanicaItemId: string;
  title: string;
  summary: string;
  noteDate: string;
}

@Component({
  selector: 'app-botanica-note',
  imports: [],
  templateUrl: './botanica-note.html',
  styleUrl: './botanica-note.css'
})
export class BotanicaNote {
  noteObj = input.required<NoteObj>();
}
