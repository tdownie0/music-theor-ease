"use client";
import { useState } from "react";
import DreamBackground from "./DreamBackground";
import Navbar from "./Navbar";

const NavbarAnimation: React.FC = ({ children }) => {
  const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement | null>(
    null
  );
  const [canvasVisible, setCanvasVisible] = useState(false);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null
  );

  const toggleCanvas = () => {
    if (!canvasElement) {
      // Create a new canvas element if it doesn't exist
      const canvas = document.createElement("canvas");
      setCanvasElement(canvas);
      document.body.appendChild(canvas);
    }

    // Toggle the visibility of the canvas only if it's currently false
    if (!canvasVisible) {
      setCanvasVisible(true);

      // Clear the existing debounce timer if it exists
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      // Set a new debounce timer to hide the canvas after 5 seconds
      setDebounceTimer(
        setTimeout(() => {
          setCanvasVisible(false);
        }, 4000)
      ); // Adjust the debounce delay as needed
    }
  };

  return (
    <>
      {/* Pass the canvasVisible state to the DreamBackground component */}
      <DreamBackground
        showCanvas={canvasVisible}
        canvasElement={canvasElement}
      />
      <Navbar toggleCanvas={toggleCanvas} />
      {children}
    </>
  );
};

export default NavbarAnimation;
