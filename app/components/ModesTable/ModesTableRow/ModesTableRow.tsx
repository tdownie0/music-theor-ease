import React from "react";

const modeNameColumnWidth = "25%";
const amountOfIntervals = 7;
const intervalColumnWidth = `${75 / amountOfIntervals}%`;
const cellStyles = "border border-primary-content px-4 py-2";

const ModesTableRow = ({
  modeName,
  modeArray,
  isHeaderRow,
}) => {
  return (
    <>
      {isHeaderRow ? (
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
      ) : (
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
      )}
    </>
  );
};

export default ModesTableRow;
