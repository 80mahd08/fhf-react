// Import statements
import "fhf";
import React from "react";
import { useEffect, useState, useRef, useCallback } from "react";

function ClearFix() {
  return <div className="clearFix"></div>;
}

function Container({ children, style = {}, className = "", ...otherProps }) {
  return (
    <div style={style} className={`container ${className}`} {...otherProps}>
      {children}
    </div>
  );
}

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

function FlexItem({ children, style = {}, className = "", ...otherProps }) {
  return (
    <div className={`flex-item ${className}`} style={style} {...otherProps}>
      {children}
    </div>
  );
}

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
      "visibleIn and hiddenIn cannot be empty at the same time (use div instead of DivV)"
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
    visibilityClasses
  )} ${getVisibilityClass(hiddenIn, hiddenClasses)} ${className}`;

  return (
    <div style={style} className={combinedClasses} {...otherProps}>
      {children}
    </div>
  );
}

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
      "Incorrect element value in RespHeading; it should be one of those (h1, h2, h3, h4, h5, h6)"
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
      children
    );
  }
}

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

function RespBackgImg({
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
      " incorrect element value in ResBackgImg it should be one of those (div,section,header,footer)"
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
      children
    );
  }
}

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

const useMediaStyle = (query, style) => {
  // Use the useMediaQuery hook to check if the media query matches.
  const matches = useMediaQuery(query);
  // Return the style object if the media query matches, otherwise an empty object.
  return matches ? style : {};
};

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
  RespBackgImg,
  useActive,
  useHover,
  useMediaQuery,
  useMediaStyle,
  mergeRefs,
};
