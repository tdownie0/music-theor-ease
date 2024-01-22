export enum Note {
    C = "C",
    Cs = "C#",
    Db = "Db",
    D = "D",
    Ds = "D#",
    Eb = "Eb",
    E = "E",
    Fb = "Fb",
    Es = "E#",
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
    Bs = "B#",
  }
  
  const notesWithSharpsArray: Note[] = [
    Note.C, Note.Cs, Note.D, Note.Ds,
    Note.E, Note.F, Note.Fs, Note.G,
    Note.Gs, Note.A, Note.As, Note.B
  ];

  
  export const notesWithSharps: Record<Note, Note> = Object.fromEntries(
    notesWithSharpsArray.map(note => [note, note])
  ) as Record<Note, Note>;
  
  const notesWithFlatsArray: Note[] = [
    Note.C, Note.Db, Note.D, Note.Eb,
    Note.E, Note.F, Note.Gb, Note.G,
    Note.Ab, Note.A, Note.Bb, Note.B
  ];

  const notesWithFlats: Record<Note, Note> = Object.fromEntries(
    notesWithFlatsArray.map(note => [note, note])
  ) as Record<Note, Note>;
  
  const circleOfFifthsArray: Note[] = [
    Note.C, Note.G, Note.D, Note.A,
    Note.E, Note.B, Note.Fs, Note.Db,
    Note.Ab, Note.Eb, Note.Bb, Note.F
  ];
  
  const circleOfFifths: Record<Note, Note> = Object.fromEntries(
    circleOfFifthsArray.map(note => [note, note])
  ) as Record<Note, Note>;
  
  const circleOfFourthsArray: Note[] = [
    Note.C, Note.F, Note.Bb, Note.Eb,
    Note.Ab, Note.Db, Note.Gb, Note.B,
    Note.E, Note.A, Note.D, Note.G
  ];
  
  
  const circleOfFourths: Record<Note, Note> = Object.fromEntries(
    circleOfFourthsArray.map(note => [note, note])
  ) as Record<Note, Note>;
  
  const IonianArray: string[] = ["1", "2", "3", "4", "5", "6", "7"];
  const DorianArray: string[] = ["1", "2", "b3", "4", "5", "6", "b7"];
  const PhrygianArray: string[] = ["1", "b2", "b3", "4", "5", "b6", "b7"];
  const LydianArray: string[] = ["1", "2", "3", "#4", "5", "6", "7"];
  const MixolydianArray: string[] = ["1", "2", "3", "4", "5", "6", "b7"];
  const AeolianArray: string[] = ["1", "2", "b3", "4", "5", "b6", "b7"];
  const LocrianArray: string[] = ["1", "b2", "b3", "4", "b5", "b6", "b7"];