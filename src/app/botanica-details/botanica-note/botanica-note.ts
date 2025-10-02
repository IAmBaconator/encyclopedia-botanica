import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type NoteObj } from './botanica-note.model';
import { Card } from "../../shared/card/card";

@Component({
  selector: 'app-botanica-note',
  imports: [Card, DatePipe],
  templateUrl: './botanica-note.html',
  styleUrl: './botanica-note.css'
})
export class BotanicaNote {
  noteObj = input.required<NoteObj>();
  delete = output<string>();

  onDeleteBotanicaNote() {
    this.delete.emit(this.noteObj().id);
  }
}
