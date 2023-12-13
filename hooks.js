import React, { useEffect, useState, useRef } from "react";

// custom hook

/**
 * React Hook for responsive media queries.
 *
 * @param {string} query - A media query string.
 * @returns {boolean} Whether the current device matches the given media query.
 */
function useMediaQuery(query) {
  // Initialize the state variable 'matches' with the initial match status of the media query.
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  // useEffect is used to set up the subscription to the media query changes.
  useEffect(() => {
    // Create a media query list object based on the provided query.
    const mediaQueryList = window.matchMedia(query);

    // Define a function to handle changes in the media query status.
    const handleChange = (event) => {
      // Update the 'matches' state based on the new match status.
      setMatches(event.matches);
    };

    // Add the 'handleChange' function as a listener to the media query changes.
    mediaQueryList.addListener(handleChange);

    // Clean up by removing the listener when the component unmounts or when the query changes.
    return () => {
      mediaQueryList.removeListener(handleChange);
    };
  }, [query]);

  // Return the current match status of the media query.
  return matches;
}

/**
 * React Hook for getting the current scroll position.
 *
 * @returns {number} The current scroll position in pixels.
 */
function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}

/**
 * React Hook for getting the current window size.
 *
 * @returns {Object} An object containing the window width and height properties
 */
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

/**
 * React Hook for getting the current device type.
 *
 * @returns {string} The current device type, either 'desktop', 'tablet', or 'mobile'.
 */
function useDeviceType() {
  const [deviceType, setDeviceType] = useState(getDeviceType());

  /**
   * Function that returns the current device type based on the window width.
   * @returns {string} The current device type, either 'desktop', 'tablet', or 'mobile'.
   */
  function getDeviceType() {
    const width = window.innerWidth;
    if (width > 1200) return "desktop";
    if (width > 768) return "tablet";
    return "mobile";
  }

  /**
   * useEffect hook that listens for window resize events and updates the device type state.
   */
  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
}

/**
 * React Hook for getting the current hover state.
 *
 * @returns {{ref: React.RefObject, isHovered: boolean}} An object containing a reference to the DOM element and the current hover state.
 */
function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const element = ref.current;

    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return { ref, isHovered };
}

/**
 * React Hook for listening to keyboard events.
 *
 * @param {string} targetKey - The key to listen for.
 * @param {function} callback - The function to execute when the key is pressed.
 * @returns {React.MutableRefObject} A mutable reference to the target key.
 */
function useKeyPress(targetKey, callback) {
  const keyRef = useRef(targetKey);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === keyRef.current) {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [callback]);

  return keyRef;
}

/**
 * React Hook for handling click events.
 *
 * @param {function} callback - The function to execute when the component is clicked.
 * @returns {React.MutableRefObject} A mutable reference to the DOM element.
 */
function useClick(callback) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target === ref.current) {
        callback(event);
      }
    };

    const element = ref.current;

    if (element) {
      element.addEventListener("click", handleClick);

      return () => {
        element.removeEventListener("click", handleClick);
      };
    }
  }, [callback]);

  return ref;
}

/**
 * React Hook for handling active state based on mouse events.
 *
 * @returns {{ ref: React.MutableRefObject, isActive: boolean }} An object containing a mutable reference to the DOM element and the active state.
 */
function useActive() {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    const element = ref.current;

    if (element) {
      element.addEventListener("mousedown", handleMouseDown);
      element.addEventListener("mouseup", handleMouseUp);

      return () => {
        element.removeEventListener("mousedown", handleMouseDown);
        element.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, []);

  return { ref, isActive };
}

export {
  useMediaQuery,
  useScrollPosition,
  useWindowSize,
  useDeviceType,
  useHover,
  useKeyPress,
  useClick,
  useActive,
};
