import React from "react";
import ModesTableRow from "./ModesTableRow/ModesTableRow";
import { modesList } from "../../utils/musicLogic";

const ModesTable: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-lg bg-base-300 p-4 w-full">
      <h4 className="text-2xl pb-4">Primary Modes</h4>
      <table className="w-full bg-secondary text-secondary-content text-sm">
        <thead>
          <ModesTableRow isHeaderRow />
        </thead>
        <tbody>
          {Object.entries(modesList).map(([modeName, modeArray]) => (
            <ModesTableRow
              key={modeName}
              modeName={modeName}
              modeArray={modeArray}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModesTable;
