import React from "react";
import { render, screen } from "@testing-library/react";

import ModesTable from "./ModesTable";

describe("ModesTable component", () => {
  test('renders correctly', () => {
    render(<ModesTable />);
    
    expect(screen.getByText('Primary Modes')).toBeInTheDocument();

    expect(screen.getByText('Mode')).toBeInTheDocument();
    
    expect(screen.getByText('Ionian')).toBeInTheDocument(); 
  });
});