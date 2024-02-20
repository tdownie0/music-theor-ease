import React from "react";

interface ModesTableRowProps {
  modeName?: string;
  modeArray?: string[];
  isHeaderRow?: boolean;
}

const modeNameColumnWidth: string = "25%";
const amountOfIntervals: number = 7;
const intervalColumnWidth: string = `${75 / amountOfIntervals}%`;
const cellStyles = "border border-primary-content px-4 py-2";

const ModesTableRow: React.FC<ModesTableRowProps> = ({
  modeName,
  modeArray,
  isHeaderRow,
}) => {
  if (isHeaderRow) {
    return (
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
    );
  }

  return (
    <tr className="text-center">
      <td
        key={modeName}
        className={cellStyles}
        style={{ width: modeNameColumnWidth }}
      >
        {modeName}
      </td>
      {modeArray?.map((note, noteIndex) => (
        <td
          key={noteIndex}
          className={cellStyles}
          style={{ width: intervalColumnWidth }}
        >
          {note}
        </td>
      ))}
    </tr>
  );
};

export default ModesTableRow;
