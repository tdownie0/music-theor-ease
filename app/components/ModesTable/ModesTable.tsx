const IonianArray = ["1", "2", "3", "4", "5", "6", "7"];
const DorianArray = ["1", "2", "b3", "4", "5", "6", "b7"];
const PhrygianArray = ["1", "b2", "b3", "4", "5", "b6", "b7"];
const LydianArray = ["1", "2", "3", "#4", "5", "6", "7"];
const MixolydianArray = ["1", "2", "3", "4", "5", "6", "b7"];
const AeolianArray = ["1", "2", "b3", "4", "5", "b6", "b7"];
const LocrianArray = ["1", "b2", "b3", "4", "b5", "b6", "b7"];

const modesList = {
  Ionian: IonianArray,
  Dorian: DorianArray,
  Phygrian: PhrygianArray,
  Lydian: LydianArray,
  Mixolydian: MixolydianArray,
  Aeolian: AeolianArray,
  Locrian: LocrianArray,
};

const ModesTable = () => {
  const modeNameColumnWidth = "25%";
  const amountOfIntervals = 7;
  const intervalColumnWidth = `${75 / amountOfIntervals}%`;
  const cellStyles = "border border-primary-content px-4 py-2";

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg bg-base-300 p-4 w-full">
      <h4 className="text-2xl pb-4">Primary Modes</h4>
      <table className="w-full bg-secondary text-secondary-content text-sm">
        <thead>
          <tr className="bg-primary text-primary-content text-center">
            <th
              key="Mode"
              className={cellStyles}
              style={{ width: modeNameColumnWidth }}
            >
              Mode
            </th>
            {[...Array(amountOfIntervals)].map((_, index) => (
              <th
                key={index}
                className={cellStyles}
                style={{ width: intervalColumnWidth }}
              >
                {index + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(modesList).map(([modeName, modeArray]) => (
            <tr className="text-center" key={modeName}>
              <td
                key={`${modeName}-name`}
                className={cellStyles}
                style={{ width: modeNameColumnWidth }}
              >
                {modeName}
              </td>
              {modeArray?.map((note, noteIndex) => (
                <td
                  key={`${modeName}-${noteIndex}`}
                  className={cellStyles}
                  style={{ width: intervalColumnWidth }}
                >
                  {note}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModesTable;
