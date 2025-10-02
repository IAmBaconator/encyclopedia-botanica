import { Injectable } from "@angular/core";
import { NewNoteData } from "./botanica-note/botanica-note.model";

@Injectable({providedIn: 'root'})
export class BotanicaDetailsService {
    private notes = [
    {
      id: 'n1',
      botanicaItemId: 'i1',
      title: 'Flowers Are Cool',
      summary: 'Saw this flower the other day and it was cool.',
      noteDate: '2025-10-01',
    },
    {
      id: 'n2',
      botanicaItemId: 'i1',
      title: 'Flowers Rock',
      summary: 'Saw this flower the other day and it was cool.',
      noteDate: '2025-10-01',
    },
    {
      id: 'n3',
      botanicaItemId: 'i2',
      title: 'Flowers Alive',
      summary: 'Saw this flower the other day and it was cool.',
      noteDate: '2025-10-01',
    },
    {
      id: 'n4',
      botanicaItemId: 'i4',
      title: 'Flowers Lost',
      summary: 'Saw this flower the other day and it was cool.',
      noteDate: '2025-10-01',
    },
  ];

  getBotanicaNotes(botanicaItemId: string) {
    return this.notes.filter((note) => note.botanicaItemId === botanicaItemId);
  }

  addBotanicaNote(noteData: NewNoteData, botanicaItemId: string) {
    this.notes.unshift({
      id: new Date().getTime().toString(),
      botanicaItemId: botanicaItemId,
      title: noteData.title,
      summary: noteData.summary,
      noteDate: noteData.date
    })
  }

  removeNote(id: string) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}