import React from "react";

interface ModesTableRowProps {
  modeName?: string; // Optional modeName prop for header row
  modeArray?: string[]; // Optional modeArray prop for data rows
  isHeaderRow?: boolean; // Boolean prop to indicate if the row is a header row
}

const modeNameColumnWidth: string = "25%";
const amountOfIntervals: number = 7;
const intervalColumnWidth: string = `${75 / amountOfIntervals}%`;

const ModesTableRow: React.FC<ModesTableRowProps> = ({
  modeName,
  modeArray,
  isHeaderRow,
}) => {
  if (isHeaderRow) {
    // Render header row
    return (
      <tr className="bg-primary text-primary-content text-center">
        <th
          className="border border-primary-content px-4 py-2"
          style={{ width: modeNameColumnWidth }}
        >
          Mode
        </th>
        {[...Array(amountOfIntervals)].map((_, index) => (
          <th
            key={index}
            className="border border-primary-content px-4 py-2"
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
        className="border border-primary-content px-4 py-2"
        style={{ width: modeNameColumnWidth }}
      >
        {modeName}
      </td>
      {modeArray?.map((note, noteIndex) => (
        <td
          key={noteIndex}
          className="border border-primary-content px-4 py-2"
          style={{ width: intervalColumnWidth }}
        >
          {note}
        </td>
      ))}
    </tr>
  );
};

export default ModesTableRow;
