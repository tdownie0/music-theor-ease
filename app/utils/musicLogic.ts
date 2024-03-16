enum Note {
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
  A = "A",
  B = "B",
}

enum SharpNote {
  Cs = "C#",
  Ds = "D#",
  Fs = "F#",
  Gs = "G#",
  As = "A#",
}

enum FlatNote {
  Db = "Db",
  Eb = "Eb",
  Gb = "Gb",
  Ab = "Ab",
  Bb = "Bb",
}

const notesWithSharpsArray = [
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

const notesWithFlatsArray = [
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

let circleOfFifthsArray = [
  Note.C,
  Note.G,
  Note.D,
  Note.A,
  Note.E,
  Note.B,
  SharpNote.Fs,
  FlatNote.Db,
  FlatNote.Ab,
  FlatNote.Eb,
  FlatNote.Bb,
  Note.F,
];

export const getCircleOfFifthsNotes = async () => {
  // Simulate an asynchronous operation, e.g., fetching data from an API
  return new Promise((resolve, reject) => {
    // Simulate delay
    setTimeout(() => {
      try {
        // Replace this with your actual data fetching logic
        const fetchedData = circleOfFifthsArray;

        // Update circleOfFifthsArray with fetched data
        circleOfFifthsArray = fetchedData;

        resolve(fetchedData);
      } catch (error) {
        reject(error);
      }
    }, 100); // Simulated delay of 0.1 second
  });
};

const circleOfFifths = {
  [Note.C]: Note.G,
  [Note.G]: Note.D,
  [Note.D]: Note.A,
  [Note.A]: Note.E,
  [Note.E]: Note.B,
  [Note.B]: SharpNote.Fs,
  [SharpNote.Fs]: FlatNote.Db,
  [FlatNote.Db]: FlatNote.Ab,
  [FlatNote.Ab]: FlatNote.Eb,
  [FlatNote.Eb]: FlatNote.Bb,
  [FlatNote.Bb]: Note.F,
  [Note.F]: Note.C,
};

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

const circleOfFourthsArray = [
  Note.C,
  Note.F,
  FlatNote.Bb,
  FlatNote.Eb,
  FlatNote.Ab,
  FlatNote.Db,
  FlatNote.Gb,
  Note.B,
  Note.E,
  Note.A,
  Note.D,
  Note.G,
];

const circleOfFourths = {
  [Note.F]: FlatNote.Bb,
  [FlatNote.Bb]: FlatNote.Eb,
  [FlatNote.Eb]: FlatNote.Ab,
  [FlatNote.Ab]: FlatNote.Db,
  [FlatNote.Db]: SharpNote.Fs,
  [SharpNote.Fs]: Note.B,
  [Note.B]: Note.E,
  [Note.E]: Note.A,
  [Note.A]: Note.D,
  [Note.D]: Note.G,
  [Note.G]: Note.C,
  [Note.C]: Note.F,
};

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

const IonianArray = ["1", "2", "3", "4", "5", "6", "7"];
const DorianArray = ["1", "2", "b3", "4", "5", "6", "b7"];
const PhrygianArray = ["1", "b2", "b3", "4", "5", "b6", "b7"];
const LydianArray = ["1", "2", "3", "#4", "5", "6", "7"];
const MixolydianArray = ["1", "2", "3", "4", "5", "6", "b7"];
const AeolianArray = ["1", "2", "b3", "4", "5", "b6", "b7"];
const LocrianArray = ["1", "b2", "b3", "4", "b5", "b6", "b7"];

export const modesList = {
  Ionian: IonianArray,
  Dorian: DorianArray,
  Phygrian: PhrygianArray,
  Lydian: LydianArray,
  Mixolydian: MixolydianArray,
  Aeolian: AeolianArray,
  Locrian: LocrianArray,
};
