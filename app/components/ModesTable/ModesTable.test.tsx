import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ModesTable from "./ModesTable";

describe("ModesTable component", () => {
  test('renders correctly', () => {
    const { getByText } = render(<ModesTable />);
    
    expect(getByText('Primary Modes')).toBeInTheDocument();

    expect(getByText('Mode')).toBeInTheDocument();
    
    expect(getByText('Ionian')).toBeInTheDocument(); 
  });
});