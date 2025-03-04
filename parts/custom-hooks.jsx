import { useRef, useCallback, useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

const useMediaStyle = (query, style) => {
  // Use the useMediaQuery hook to check if the media query matches.
  const matches = useMediaQuery(query);
  // Return the style object if the media query matches, otherwise an empty object.
  return matches ? style : {};
};

function useHover() {
  // Initialize the state variable 'useHoverIsHovered' with the initial hover state.
  const [useHoverIsHovered, setUseHoverIsHovered] = useState(false);

  // Create a refOfUseHover to store the reference to the DOM element.
  const refOfUseHover = useRef(null);

  // Define memoized functions to handle mouse enter and mouse leave events.
  const handleMouseEnter = useCallback(() => {
    setUseHoverIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setUseHoverIsHovered(false);
  }, []);

  // useEffect is used to set up the subscription to the mouse enter and mouse leave events.
  useEffect(() => {
    const element = refOfUseHover.current;

    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      // Clean up by removing the event listeners when the component unmounts.
      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [handleMouseEnter, handleMouseLeave]);

  // Return an object containing a reference to the DOM element and the current hover state.
  return { refOfUseHover, useHoverIsHovered };
}

function useActive() {
  // Initialize the state variable 'useActiveIsActive' with the initial active state.
  const [useActiveIsActive, setUseActiveIsActive] = useState(false);

  // Create a refOfUseActive to store the reference to the DOM element.
  const refOfUseActive = useRef(null);

  // Define memoized functions to handle mouse down and mouse up events.
  const handleMouseDown = useCallback(() => {
    setUseActiveIsActive(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setUseActiveIsActive(false);
  }, []);

  // useEffect is used to set up the subscription to the mouse down and mouse up events.
  useEffect(() => {
    const element = refOfUseActive.current;

    if (element) {
      element.addEventListener("mousedown", handleMouseDown);
      element.addEventListener("mouseup", handleMouseUp);

      // Clean up by removing the event listeners when the component unmounts.
      return () => {
        element.removeEventListener("mousedown", handleMouseDown);
        element.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [handleMouseDown, handleMouseUp]);

  // Return an object containing a mutable reference to the DOM element and the current active state.
  return { refOfUseActive, useActiveIsActive };
}

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

export { useActive, useHover, useMediaQuery, useMediaStyle, useMousePosition };
