import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type NoteObj } from './botanica-note.model';
import { Card } from "../../shared/card/card";
import { BotanicaDetailsService } from '../botanica-details.service';

@Component({
  selector: 'app-botanica-note',
  imports: [Card, DatePipe],
  templateUrl: './botanica-note.html',
  styleUrl: './botanica-note.css'
})
export class BotanicaNote {
  noteObj = input.required<NoteObj>();
  private botanicaDetailsService = inject(BotanicaDetailsService)

  onDeleteBotanicaNote() {
    this.botanicaDetailsService.removeNote(this.noteObj().id)
  }
}
