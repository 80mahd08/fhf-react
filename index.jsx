// Import statements
import "fhf/dist/css/FHF.min.css";
import React from "react";
import { useEffect, useState, useRef, useCallback } from "react";

// ClearFix component
/**
 * A component that adds a class of "clearFix" to a div element, which is used to clear floated elements.
 * @returns {JSX.Element} A div element with the class "clearFix".
 */
function ClearFix() {
  return <div className="clearFix"></div>;
}

// Container component
/**
 * A component that adds a class of "container" to a div element, which is a CSS class that is used to create a responsive layout with a fixed width and variable height.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the container.
 * @param {Object} props.style - The CSS styles to be applied to the container.
 * @param {string} props.className - The additional CSS class to be applied to the container.
 * @returns {JSX.Element} A div element with the class "container" and the specified child elements and styles.
 */
function Container({ children, style = {}, className = "", ...otherProps }) {
  return (
    <div style={style} className={`container ${className}`} {...otherProps}>
      {children}
    </div>
  );
}

// FlexContainer component
/**
 * A component that creates a flex container, which is a CSS layout that allows elements to be laid out in a flexible box.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the flex container.
 * @param {Object} props.style - The CSS styles to be applied to the flex container.
 * @param {string} props.className - The additional CSS class to be applied to the flex container.
 * @returns {JSX.Element} A div element with the class "flex-container" and the specified child elements and styles.
 */
function FlexContainer({
  children,
  style = {},
  className = "",
  ...otherProps
}) {
  return (
    <div
      className={`flex-container ${className}`}
      style={style}
      {...otherProps}
    >
      {children}
    </div>
  );
}

// FlexItem component
/**
 * A component that creates a flex item, which is a CSS layout that allows elements to be laid out in a flexible box.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the flex item.
 * @param {Object} props.style - The CSS styles to be applied to the flex item.
 * @param {string} props.className - The additional CSS class to be applied to the flex item.
 * @returns {JSX.Element} A div element with the class "flex-item" and the specified child elements and styles.
 */
function FlexItem({ children, style = {}, className = "", ...otherProps }) {
  return (
    <div className={`flex-item ${className}`} style={style} {...otherProps}>
      {children}
    </div>
  );
}

// DivV component
/**
 * A component that conditionally renders a div element based on visibility and hidden breakpoints.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the div.
 * @param {string} props.className - The additional CSS class to be applied to the div.
 * @param {Object} props.style - The CSS styles to be applied to the div.
 * @param {string} props.visibleIn - The breakpoint at which the div becomes visible.
 * @param {string} props.hiddenIn - The breakpoint at which the div becomes hidden.
 * @returns {JSX.Element} A div element with the specified child elements and styles.
 */
function DivV({
  children,
  className = "",
  style = {},
  visibleIn = "",
  hiddenIn = "",
  ...otherProps
}) {
  if (visibleIn === "" && hiddenIn === "") {
    console.warn(
      "visibleIn and hiddenIn cannot be empty at the same time (use div instead of DivV)",
    );
  }
  const visibilityClasses = {
    xs: "visibleXs",
    sm: "visibleSm",
    md: "visibleMd",
    lg: "visibleLg",
  };

  const hiddenClasses = {
    xs: "hiddenXs",
    sm: "hiddenSm",
    md: "hiddenMd",
    lg: "hiddenLg",
  };

  const getVisibilityClass = (visibility, classes) =>
    (visibility && classes[visibility]) || "";

  const combinedClasses = `${getVisibilityClass(
    visibleIn,
    visibilityClasses,
  )} ${getVisibilityClass(hiddenIn, hiddenClasses)} ${className}`;

  return (
    <div style={style} className={combinedClasses} {...otherProps}>
      {children}
    </div>
  );
}

// RespImg component
/**
 * A responsive image component that automatically adjusts its size based on the viewport width.
 * @param {Object} props - The component props.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alternative text for the image.
 * @param {Object} props.style - The CSS styles to be applied to the image.
 * @param {string} props.className - The additional CSS class to be applied to the image.
 * @returns {JSX.Element} An img element with the specified properties and styles.
 */
function RespImg({ src, alt, style = {}, className = "", ...otherProps }) {
  if (src === undefined || src === "") {
    throw new Error("src cannot be undefined or empty");
  }
  const respImg = {
    maxWidth: "100%",
    height: "auto",
  };

  const combinedStyles = {
    ...respImg,
    ...style,
  };

  return (
    <img
      src={src}
      alt={alt}
      style={combinedStyles}
      className={className}
      {...otherProps}
    />
  );
}

// RespVideo component
/**
 * A responsive video component that automatically adjusts its size based on the viewport width.
 * @param {Object} props - The component props.
 * @param {string} props.src - The source URL of the video.
 * @param {string} props.alt - The alternative text for the video.
 * @param {Object} props.style - The CSS styles to be applied to the video.
 * @param {string} props.className - The additional CSS class to be applied to the video.
 * @returns {JSX.Element} A video element with the specified properties and styles.
 */
function RespVideo({
  src = "",
  alt,
  style = {},
  className = "",
  ...otherProps
}) {
  if (src === undefined || src === "") {
    throw new Error("src cannot be undefined or empty");
  }
  const respVideo = {
    maxWidth: "100%",
    height: "auto",
  };

  const combinedStyles = {
    ...respVideo,
    ...style,
  };
  return (
    <video
      src={src}
      alt={alt}
      style={combinedStyles}
      className={className}
      {...otherProps}
    />
  );
}

// RespGridFill component
/**
 * A responsive grid component with automatic column sizing based on the specified size and gap.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the grid.
 * @param {number} props.size - The size of each grid item in pixels.
 * @param {Object} props.style - The CSS styles to be applied to the grid.
 * @param {number} props.gap - The gap between grid items in pixels.
 * @param {string} props.className - The additional CSS class to be applied to the grid.
 * @returns {JSX.Element} A div element with the specified child elements and styles.
 */
function RespGridFill({
  children,
  size = 0,
  style = {},
  gap = 0,
  className = "",
  ...otherProps
}) {
  if (size === null || size === undefined || size === 0) {
    throw new Error("size cannot be null or undefined or 0");
  }
  const withOutGap = {
    ...style,
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${size}px, 1fr))`,
  };
  const withGap = {
    ...style,
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${size}px, 1fr))`,
    gap: `${gap}px`,
  };

  if (gap === "") {
    return (
      <div style={withOutGap} className={`${className}`} {...otherProps}>
        {children}
      </div>
    );
  } else {
    return (
      <div style={withGap} className={`${className}`} {...otherProps}>
        {children}
      </div>
    );
  }
}

// RespGridFit component
/**
 * A responsive grid component with automatic column sizing based on the specified size and gap, using auto-fit.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the grid.
 * @param {number} props.size - The size of each grid item in pixels.
 * @param {Object} props.style - The CSS styles to be applied to the grid.
 * @param {number} props.gap - The gap between grid items in pixels.
 * @param {string} props.className - The additional CSS class to be applied to the grid.
 * @returns {JSX.Element} A div element with the specified child elements and styles.
 */
function RespGridFit({
  children,
  size = 0,
  style = {},
  gap = 0,
  className = "",
  ...otherProps
}) {
  if (size === null || size === undefined || size === 0) {
    throw new Error("size cannot be null or undefined or 0");
  }
  const withOutGap = {
    ...style,
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(${size}px, 1fr))`,
  };
  const withGap = {
    ...style,
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(${size}px, 1fr))`,
    gap: `${gap}px`,
  };

  if (gap === "") {
    return (
      <div style={withOutGap} className={`${className}`} {...otherProps}>
        {children}
      </div>
    );
  } else {
    return (
      <div style={withGap} className={`${className}`} {...otherProps}>
        {children}
      </div>
    );
  }
}

// UnstyledList component
/**
 * A component that renders an unordered list without any list styling.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the list.
 * @param {string} props.className - The additional CSS class to be applied to the list.
 * @param {Object} props.style - The CSS styles to be applied to the list.
 * @returns {JSX.Element} An unordered list element with the specified child elements and styles.
 */
function UnstyledList({ children, className = "", style = {}, ...otherProps }) {
  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  };
  const combinedStyles = {
    ...listStyle,
    ...style,
  };
  return (
    <ul style={combinedStyles} className={`${className}`} {...otherProps}>
      {children}
    </ul>
  );
}

// Component: NavUl
/**
 * A component that creates an unordered list with certain default styles for navigation.
 * @param {Object} props - The component's properties.
 * @param {React.ReactNode} props.children - The list items to be displayed inside the unordered list.
 * @param {Object} props.style - The CSS styles to be applied to the unordered list.
 * @param {string} props.className - The additional CSS class to be applied to the unordered list.
 * @param {Object} props.otherProps - Any other additional properties that should be applied to the unordered list element.
 * @returns {JSX.Element} An unordered list element with the specified child elements and styles.
 */
function NavUl({ children, style = {}, className = "", ...otherProps }) {
  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
  };
  const combinedStyles = {
    ...listStyle,
    ...style,
  };

  return (
    <ul style={combinedStyles} className={`${className}`} {...otherProps}>
      {children}
    </ul>
  );
}

// Component: RespHeading
/**
 * A responsive heading component that adjusts its font size based on the screen width.
 * @param {Object} props - The component's properties.
 * @param {string} props.element - The HTML element type for the heading (e.g., "h1", "h2", etc.).
 * @param {Object} props.style - The CSS styles to be applied to the heading.
 * @param {string} props.className - The additional CSS class to be applied to the heading.
 * @param {React.ReactNode} props.children - The content of the heading.
 * @param {Object} props.otherProps - Any other additional properties that should be applied to the heading element.
 * @returns {JSX.Element} A heading element with responsive font size.
 * @throws {Error} Throws an error if the provided element is not one of: "h1", "h2", "h3", "h4", "h5", "h6".
 */
function RespHeading({
  element = "h1",
  style = {},
  className = "",
  children,
  ...otherProps
}) {
  if (
    element !== "h1" &&
    element !== "h2" &&
    element !== "h3" &&
    element !== "h4" &&
    element !== "h5" &&
    element !== "h6"
  ) {
    throw new Error(
      "Incorrect element value in RespHeading; it should be one of those (h1, h2, h3, h4, h5, h6)",
    );
  } else {
    const responsiveTypography = {
      h1: {
        fontSize: "clamp(32px, 4vw, 48px)",
      },
      h2: {
        fontSize: "clamp(24px, 3vw, 36px)",
      },
      h3: {
        fontSize: "clamp(20px, 2.5vw, 30px)",
      },
      h4: {
        fontSize: "clamp(20px, 2.5vw, 30px)",
      },
      h5: {
        fontSize: "clamp(16px, 2vw, 20px)",
      },
      h6: {
        fontSize: "clamp(14px, 1.5vw, 18px)",
      },
    };

    const combinedStyles = {
      ...responsiveTypography[element],
      ...style,
    };

    return React.createElement(
      element,
      {
        style: combinedStyles,
        className: `${className}`,
        ...otherProps,
      },
      children,
    );
  }
}

// Component: Circle
/**
 * A component that creates a circular container with certain default styles.
 * @param {Object} props - The component's properties.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the circular container.
 * @param {Object} props.style - The CSS styles to be applied to the circular container.
 * @param {string} props.className - The additional CSS class to be applied to the circular container.
 * @param {Object} props.otherProps - Any other additional properties that should be applied to the circular container element.
 * @returns {JSX.Element} A div element with circular styling and the specified child elements and styles.
 */
function Circle({ children, style = {}, className = "", ...otherProps }) {
  const circleStyle = {
    borderRadius: "50%",
  };
  const combinedStyles = {
    ...circleStyle,
    ...style,
  };
  return (
    <div style={combinedStyles} className={`${className}`} {...otherProps}>
      {children}
    </div>
  );
}

// Component: ResBackgImg
/**
 * A responsive background image component that adjusts its background size and position.
 * @param {Object} props - The component's properties.
 * @param {string} props.element - The HTML element type for the background image container (e.g., "div", "section", etc.).
 * @param {string} props.url - The URL of the background image.
 * @param {React.ReactNode} props.children - The content of the background image container.
 * @param {Object} props.style - The CSS styles to be applied to the background image container.
 * @param {string} props.className - The additional CSS class to be applied to the background image container.
 * @param {Object} props.otherProps - Any other additional properties that should be applied to the background image container element.
 * @returns {JSX.Element} An element with a background image and specified child elements and styles.
 * @throws {Error} Throws an error if the provided element is not one of: "div", "section", "header", "footer".
 * @throws {Error} Throws an error if the URL for the background image is empty.
 */
function ResBackgImg({
  element = "div",
  url = "",
  children,
  style = {},
  className = "",
  ...otherProps
}) {
  if (url === "") {
    throw new Error(" url cannot be empty in ResBackgImg");
  }
  if (
    element !== "div" &&
    element !== "section" &&
    element != "header" &&
    element != "footer"
  ) {
    throw new Error(
      " incorrect element value in ResBackgImg it should be one of those (div,section,header,footer)",
    );
  } else {
    const respBackgImg = {
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
    const combinedStyles = {
      backgroundImage: `url(${url})`,
      ...respBackgImg,
      ...style,
    };
    return React.createElement(
      element,
      {
        style: combinedStyles,
        className: `${className}`,
        ...otherProps,
      },
      children,
    );
  }
}

//custom hook
/**
 * React Hook for responsive media queries.
 *
 * @param {string} query - A media query string.
 * @returns {boolean} Whether the current device matches the given media query.
 */
function useMediaQuery(query) {
  // Initialize the state variable 'matches' with the initial match status of the media query.
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  // Define a memoized function to handle changes in the media query status.
  const handleChange = useCallback((event) => {
    // Update the 'matches' state based on the new match status.
    setMatches(event.matches);
  }, []);

  // useEffect is used to set up the subscription to the media query changes.
  useEffect(() => {
    // Create a media query list object based on the provided query.
    const mediaQueryList = window.matchMedia(query);

    // Add the 'handleChange' function as a listener to the media query changes.
    mediaQueryList.addListener(handleChange);

    // Clean up by removing the listener when the component unmounts or when the query changes.
    return () => {
      mediaQueryList.removeListener(handleChange);
    };
  }, [query, handleChange]);

  // Return the current match status of the media query.
  return matches;
}

/**
 * React Hook for applying styles based on responsive media queries.
 *
 * @param {string} query - A media query string.
 * @param {Object} style - The style object to be applied when the media query matches.
 * @returns {Object} The style object that should be applied to the component.
 */
const useMediaStyle = (query, style) => {
  // Use the useMediaQuery hook to check if the media query matches.
  const matches = useMediaQuery(query);
  // Return the style object if the media query matches, otherwise an empty object.
  return matches ? style : {};
};

/**
 * React Hook for getting the current hover state.
 *
 * @returns {{ref: React.RefObject, isHovered: boolean}} An object containing a reference to the DOM element and the current hover state.
 */
function useHover() {
  // Initialize the state variable 'isHovered' with the initial hover state.
  const [isHovered, setIsHovered] = useState(false);

  // Create a ref to store the reference to the DOM element.
  const ref = useRef(null);

  // Define memoized functions to handle mouse enter and mouse leave events.
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // useEffect is used to set up the subscription to the mouse enter and mouse leave events.
  useEffect(() => {
    const element = ref.current;

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
  return { ref, isHovered };
}

/**
 * React Hook for handling active state based on mouse events.
 *
 * @returns {{ ref: React.MutableRefObject, isActive: boolean }} An object containing a mutable reference to the DOM element and the active state.
 */
function useActive() {
  // Initialize the state variable 'isActive' with the initial active state.
  const [isActive, setIsActive] = useState(false);

  // Create a ref to store the reference to the DOM element.
  const ref = useRef(null);

  // Define memoized functions to handle mouse down and mouse up events.
  const handleMouseDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsActive(false);
  }, []);

  // useEffect is used to set up the subscription to the mouse down and mouse up events.
  useEffect(() => {
    const element = ref.current;

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
  return { ref, isActive };
}

/**
 * React Hook for merging multiple React refs into a single ref object.
 *
 * @param  {...React.RefObject} refs - An array of React ref objects.
 * @returns {React.RefObject} A single ref object that represents the merged refs.
 */
function mergeRefs(...refs) {
  // Define a memoized function to set the value of each ref in the array based on the order of the refs.
  const mergeFunction = (val) => {
    setRef(val, ...refs);
  };

  // Return the memoized merge function.
  return mergeFunction;
}

/**
 * A helper function that sets the value of each ref in the array based on the order of the refs in the array.
 *
 * @param {*} val - The value to be set for each ref.
 * @param {...React.RefObject} refs - An array of React ref objects.
 */
function setRef(val, ...refs) {
  // Loop through each ref in the array.
  for (let i = 0; i < refs.length; i++) {
    // If the ref is a function, call the ref with the value.
    if (typeof refs[i] === "function") {
      refs[i](val);
    }
    // Otherwise, set the ref.current property to the value.
    else if (refs[i] != null) {
      refs[i].current = val;
    }
  }
}

export {
  ClearFix,
  Container,
  FlexContainer,
  FlexItem,
  DivV,
  RespImg,
  RespVideo,
  RespGridFill,
  RespGridFit,
  UnstyledList,
  NavUl,
  RespHeading,
  Circle,
  ResBackgImg,
  useActive,
  useHover,
  useMediaQuery,
  useMediaStyle,
  mergeRefs,
};
