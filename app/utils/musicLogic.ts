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

export let circleOfFifthsArray: Note[] = [
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

export const getCircleOfFifthsNotes = async function fetchFifths(): Promise<
  Note[]
> {
  // Simulate an asynchronous operation, e.g., fetching data from an API
  return new Promise((resolve, reject) => {
    // Simulate delay
    setTimeout(function fetchNotes() {
      try {
        // Replace this with your actual data fetching logic
        const fetchedData: Note[] = circleOfFifthsArray; // Replace with your actual data

        // Update circleOfFifthsArray with fetched data
        circleOfFifthsArray = fetchedData;

        resolve(fetchedData);
      } catch (error) {
        reject(error);
      }
    }, 100); // Simulated delay of 0.1 second
  });
};

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
  B = SharpNote.Fs,
  Fs = FlatNote.Db,
  Db = FlatNote.Ab,
  Ab = FlatNote.Eb,
  Eb = FlatNote.Bb,
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

let lengthOfCircleOfFourthsArray: number = circleOfFourthsArray.length;
for (let i: number = 0; i < lengthOfCircleOfFourthsArray; i++) {
  let currentNote: Note = circleOfFourthsArray[i];
  let fourthIndex: number = (i + 1) % lengthOfCircleOfFourthsArray;
  let fourthNote: Note = circleOfFourthsArray[fourthIndex];
  circleOfFourths[currentNote] = fourthNote;
}

enum CircleOfFourthsEnum {
  C = Note.F,
  F = FlatNote.Bb,
  Bb = FlatNote.Eb,
  Eb = FlatNote.Ab,
  Ab = FlatNote.Db,
  Db = FlatNote.Gb,
  Gb = Note.B,
  B = Note.E,
  E = Note.A,
  A = Note.D,
  D = Note.G,
  G = Note.C,
}

const IonianArray: string[] = ["1", "2", "3", "4", "5", "6", "7"];
const DorianArray: string[] = ["1", "2", "b3", "4", "5", "6", "b7"];
const PhrygianArray: string[] = ["1", "b2", "b3", "4", "5", "b6", "b7"];
const LydianArray: string[] = ["1", "2", "3", "#4", "5", "6", "7"];
const MixolydianArray: string[] = ["1", "2", "3", "4", "5", "6", "b7"];
const AeolianArray: string[] = ["1", "2", "b3", "4", "5", "b6", "b7"];
const LocrianArray: string[] = ["1", "b2", "b3", "4", "b5", "b6", "b7"];

export const modesList: Record<string, string[]> = {
  "Ionian": IonianArray,
  "Dorian": DorianArray,
  "Phygrian": PhrygianArray,
  "Lydian": LydianArray,
  "Mixolydian": MixolydianArray,
  "Aeolian": AeolianArray,
  "Locrian": LocrianArray,
};
