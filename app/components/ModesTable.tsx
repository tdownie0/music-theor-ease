import React from "react";
import { modesList } from "../utils/musicLogic";

const ModesTable: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="table w-full border-collapse border border-primary-content bg-secondary text-secondary-content">
        <thead>
          <tr className="bg-primary text-primary-content text-center">
            <th className="border border-primary-content px-4 py-2">Mode</th>
            {[...Array(7)].map(function addColumnNumber(_, index) {
              return (
                <th
                  key={index}
                  className="border border-primary-content px-4 py-2"
                >
                  {index + 1}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {Object.entries(modesList).map(([modeName, modeArray], index) => (
            <tr key={index} className="text-center">
              <td
                key={modeName}
                className="border border-primary-content px-4 py-2"
              >
                {modeName}
              </td>
              {modeArray.map((note, noteIndex) => (
                <td
                  key={noteIndex}
                  className="border border-primary-content px-4 py-2"
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
