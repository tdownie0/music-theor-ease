import React from "react";
import { modesList } from "../utils/musicLogic";

const ModesTable = () => {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="table w-full border-collapse border border-primary-content bg-secondary text-secondary-content">
        <thead>
          <tr className="bg-primary text-primary-content">
            <th className="border border-primary-content px-4 py-2">Mode</th>
            <th className="border border-primary-content px-4 py-2">1</th>
            <th className="border border-primary-content px-4 py-2">2</th>
            <th className="border border-primary-content px-4 py-2">3</th>
            <th className="border border-primary-content px-4 py-2">4</th>
            <th className="border border-primary-content px-4 py-2">5</th>
            <th className="border border-primary-content px-4 py-2">6</th>
            <th className="border border-primary-content px-4 py-2">7</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(modesList).map(([modeName, modeArray], index) => (
            <tr key={index}>
              <td className="border border-primary-content px-4 py-2">
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
