export enum Note {
  C = "C",
  Cs = "C#",
  Db = "Db",
  D = "D",
  Ds = "D#",
  Eb = "Eb",
  E = "E",
  F = "F",
  Fs = "F#",
  Gb = "Gb",
  G = "G",
  Gs = "G#",
  Ab = "Ab",
  A = "A",
  As = "A#",
  Bb = "Bb",
  B = "B",
}

export enum SharpNote {
  Cs = Note.Cs,
  Ds = Note.Ds,
  Fs = Note.Fs,
  Gs = Note.Gs,
  As = Note.As,
}

export let notesWithSharpsArray: (Note | SharpNote)[] = [
  Note.C,
  SharpNote.Cs,
  Note.D,
  SharpNote.Ds,
  Note.E,
  Note.F,
  SharpNote.Fs,
  Note.G,
  SharpNote.Gs,
  Note.A,
  SharpNote.As,
  Note.B,
];

export enum FlatNote {
  Db = Note.Db,
  Eb = Note.Eb,
  Gb = Note.Gb,
  Ab = Note.Ab,
  Bb = Note.Bb,
}

export let notesWithFlatsArray: (Note | FlatNote)[] = [
  Note.C,
  FlatNote.Db,
  Note.D,
  FlatNote.Eb,
  Note.E,
  Note.F,
  FlatNote.Gb,
  Note.G,
  FlatNote.Ab,
  Note.A,
  FlatNote.Bb,
  Note.B,
];

let circleOfFifthsArray: Note[] = [
  Note.C,
  Note.G,
  Note.D,
  Note.A,
  Note.E,
  Note.B,
  Note.Fs,
  Note.Db,
  Note.Ab,
  Note.Eb,
  Note.Bb,
  Note.F,
];

let circleOfFifths: Record<Note, Note> = {} as Record<Note, Note>;

let lengthOfCircleOfFifthsArray: number = circleOfFifthsArray.length;
for (let i: number = 0; i < lengthOfCircleOfFifthsArray; i++) {
  let currentNote: Note = circleOfFifthsArray[i];
  let fifthIndex: number = (i + 1) % lengthOfCircleOfFifthsArray; 
  let fifthNote: Note = circleOfFifthsArray[fifthIndex];
  circleOfFifths[currentNote] = fifthNote;
}

enum CircleOfFifthsEnum {
  C = Note.G,
  G = Note.D,
  D = Note.A,
  A = Note.E,
  E = Note.B,
  B = Note.Fs,
  Fs = Note.Db,
  Db = Note.Ab,
  Ab = Note.Eb,
  Eb = Note.Bb,
  Bb = Note.F,
  F = Note.C,
}

let circleOfFourthsArray: Note[] = [
  Note.C,
  Note.F,
  Note.Bb,
  Note.Eb,
  Note.Ab,
  Note.Db,
  Note.Gb,
  Note.B,
  Note.E,
  Note.A,
  Note.D,
  Note.G,
];

let circleOfFourths: Record<Note, Note> = {} as Record<Note, Note>;

let lengthOfCircleOfFourthsArray:number = circleOfFourthsArray.length;
for (let i: number = 0; i < lengthOfCircleOfFourthsArray; i++) {
  let currentNote: Note = circleOfFourthsArray[i];
  let fourthIndex: number = (i + 1) % lengthOfCircleOfFourthsArray; 
  let fourthNote: Note = circleOfFourthsArray[fourthIndex];
  circleOfFourths[currentNote] = fourthNote;
}

enum CircleOfFourthsEnum {
  C = Note.F,
  F = Note.Bb,
  Bb = Note.Eb,
  Eb = Note.Ab,
  Ab = Note.Db,
  Db = Note.Gb,
  Gb = Note.B,
  B = Note.E,
  E = Note.A,
  A = Note.D,
  D = Note.G,
  G = Note.C,
}

let IonianArray: string[] = ["1", "2", "3", "4", "5", "6", "7"];
let DorianArray: string[] = ["1", "2", "b3", "4", "5", "6", "b7"];
let PhrygianArray: string[] = ["1", "b2", "b3", "4", "5", "b6", "b7"];
let LydianArray: string[] = ["1", "2", "3", "#4", "5", "6", "7"];
let MixolydianArray: string[] = ["1", "2", "3", "4", "5", "6", "b7"];
let AeolianArray: string[] = ["1", "2", "b3", "4", "5", "b6", "b7"];
let LocrianArray: string[] = ["1", "b2", "b3", "4", "b5", "b6", "b7"];
