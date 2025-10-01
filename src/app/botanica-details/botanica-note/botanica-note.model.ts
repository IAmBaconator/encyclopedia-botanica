export interface NoteObj {
  id: string;
  botanicaItemId: string;
  title: string;
  summary: string;
  noteDate: string;
}

export interface NewNoteData {
  title: string;
  summary: string;
  date: string;
}