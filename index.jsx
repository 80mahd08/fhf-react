// Import statements
import "fhf";
import React from "react";
import { useEffect, useState, useRef, useCallback } from "react";
import {
  isValidColor,
  isValidSize,
  isValidBorderStyle,
  isValidTextDecoration,
  isValidTextTransform,
  isValidJContent,
  isValidAContent,
} from "./tools/validation";
import GridSystemOop from "./tools/GridSystemOop";
import generateKeyframeFromStyles from "./tools/animationKeyFrameTools.js";

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

function RespVideo({ src = "", style = {}, className = "", ...otherProps }) {
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
  level = 1,
  style = {},
  className = "",
  children,
  ...otherProps
}) {
  if (level < 1 || level > 6) {
    throw new Error(
      "Incorrect element value in RespHeading; it should be level between 1 and 6"
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
    const element = `h${level}`;
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

function RespP({ style = {}, className = "", children, ...otherProps }) {
  const combinedStyles = {
    fontSize: "clamp(16px, 1.2vw, 20px)",
    ...style,
  };

  return (
    <p style={combinedStyles} className={`${className}`} {...otherProps}>
      {children}
    </p>
  );
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

const styles = {
  centerPosition: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },

  textCenter: {
    textAlign: "center",
  },
  textLeft: {
    textAlign: "left",
  },
  textRight: {
    textAlign: "right",
  },

  floatLeft: {
    float: "left",
  },
  floatRight: {
    float: "right",
  },
  centerContentFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dispFlex: {
    display: "flex",
  },
  dispInlineFlex: {
    display: "inline-flex",
  },

  dispNone: {
    display: "none",
  },
  dispBlock: {
    display: "block",
  },
  dispInline: {
    display: "inline",
  },
  dispInlineBlock: {
    display: "inline-block",
  },
  dispTable: {
    display: "table",
  },
  dispTableRow: {
    display: "table-row",
  },
  dispTableCell: {
    display: "table-cell",
  },

  dispGrid: {
    display: "grid",
  },
  dispInlineGrid: {
    display: "inline-grid",
  },

  fontColor: (color) => {
    if (isValidColor(color)) {
      return {
        color: color,
      };
    } else {
      throw new Error("Invalid color value in fontColor");
    }
  },
  bg: (color) => {
    if (isValidColor(color)) {
      return {
        backgroundColor: color,
      };
    } else {
      throw new Error("Invalid color value in bg");
    }
  },
  border: (size, type, color) => {
    if (
      !isValidSize(size) ||
      !isValidBorderStyle(type) ||
      !isValidColor(color)
    ) {
      throw new Error("Invalid size, type, or color value in border");
    }
    return {
      border: `${size}px ${type} ${color}`,
    };
  },

  margin: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in margin");
    }
    return {
      margin: `${size}px`,
    };
  },
  marginTop: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in marginTop");
    }
    return {
      marginTop: `${size}px`,
    };
  },
  marginBottom: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in marginBottom");
    }
    return {
      marginBottom: `${size}px`,
    };
  },
  marginLeft: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in marginLeft");
    }
    return {
      marginLeft: `${size}px`,
    };
  },
  marginRight: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in marginRight");
    }
    return {
      marginRight: `${size}px`,
    };
  },
  padding: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in padding");
    }
    return {
      padding: `${size}px`,
    };
  },
  paddingTop: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in paddingTop");
    }
    return {
      paddingTop: `${size}px`,
    };
  },
  paddingBottom: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in paddingBottom");
    }
    return {
      paddingBottom: `${size}px`,
    };
  },
  paddingLeft: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in paddingLeft");
    }
    return {
      paddingLeft: `${size}px`,
    };
  },
  paddingRight: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in paddingRight");
    }
    return {
      paddingRight: `${size}px`,
    };
  },
  respMargin: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMargin");
    }
    return {
      margin: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respMarginTop: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMarginTop");
    }
    return {
      marginTop: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respMarginLeft: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMarginLeft");
    }
    return {
      marginLeft: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respMarginRight: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMarginRight");
    }
    return {
      marginRight: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respMarginBottom: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMarginBottom");
    }
    return {
      marginBottom: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respPadding: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPadding");
    }
    return {
      padding: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respPaddingTop: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPaddingTop");
    }
    return {
      paddingTop: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respPaddingLeft: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPaddingLeft");
    }
    return {
      paddingLeft: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respPaddingRight: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPaddingRight");
    }
    return {
      paddingRight: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respPaddingBottom: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPaddingBottom");
    }
    return {
      paddingBottom: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  marginNone: {
    margin: 0,
  },
  paddingNone: {
    padding: 0,
  },
  borderNone: {
    border: 0,
  },
  borderRadiusNone: {
    borderRadius: 0,
  },
  boxShadowNone: {
    boxShadow: "none",
  },
  textShadowNone: {
    textShadow: "none",
  },

  zIndex: (value) => {
    if (!isValidSize(value)) {
      throw new Error("Invalid value in zIndex");
    }
    return {
      zIndex: value,
    };
  },
  textDeco: (value) => {
    if (!isValidTextDecoration(value)) {
      throw new Error("Invalid value in textDeco");
    }
    return {
      textDecoration: value,
    };
  },
  textTrans: (value) => {
    if (!isValidTextTransform(value)) {
      throw new Error("Invalid value in textTrans");
    }
    return {
      textTransform: value,
    };
  },

  transBg: {
    backgroundColor: "transparent",
  },
  rounded: {
    borderRadius: "5px",
  },
  extraRounded: {
    borderRadius: "25px",
  },
  megaRounded: {
    borderRadius: "45px",
  },
  superRounded: {
    borderRadius: "65px",
  },
  ultraRounded: {
    borderRadius: "85px",
  },
  extremeRounded: {
    borderRadius: "105px",
  },
  radicalRounded: {
    borderRadius: "125px",
  },
  hyperRounded: {
    borderRadius: "145px",
  },
  ultimateRounded: {
    borderRadius: "165px",
  },
  maxRounded: {
    borderRadius: "185px",
  },
  beyondRounded: {
    borderRadius: "205px",
  },

  flexJContent: (type) => {
    if (!isValidJContent(type)) {
      throw new Error("Invalid value in flexJContent");
    }
    return {
      justifyContent: type,
    };
  },

  flexAContent: (type) => {
    if (!isValidAContent(type)) {
      throw new Error("Invalid value in flexAContent");
    }
    return {
      alignItems: type,
    };
  },

  RespFontSize: (min, max) => ({
    fontSize: `clamp(${min}px, 4vw, ${max}px)`,
  }),
  RespLineHeight: (min, max) => ({
    lineHeight: `clamp(${min}px, 4vw, ${max}px)`,
  }),
  respFontWeight: (min, max) => ({
    fontWeight: `clamp(${min}, 4vw, ${max})`,
  }),
  boxShadowLight: {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  textPrimary: {
    color: "#007bff",
  },

  textSecondary: {
    color: "#6c757d",
  },

  bgLight: {
    backgroundColor: "#f8f9fa",
  },

  roundedCircle: {
    borderRadius: "50%",
  },
  bgPrimary: {
    backgroundColor: "#007bff",
    color: "#fff",
  },

  bgSuccess: {
    backgroundColor: "#28a745",
    color: "#fff",
  },

  bgDanger: {
    backgroundColor: "#dc3545",
    color: "#fff",
  },

  textUppercase: {
    textTransform: "uppercase",
  },

  textBold: {
    fontWeight: "bold",
  },
  positionFixed: {
    position: "fixed",
  },

  fullWidth: {
    width: "100%",
  },
  fullHeight: {
    height: "100%",
  },
  fullWidthHeight: {
    width: "100%",
    height: "100%",
  },
  overflowHidden: {
    overflow: "hidden",
  },
  positionAbsolute: {
    position: "absolute",
  },
  positionRelative: {
    position: "relative",
  },
  positionSticky: {
    position: "sticky",
  },
  positionStatic: {
    position: "static",
  },
  transition: (property, duration, timingFunction, delay) => {
    return {
      transition: `${property} ${duration}s ${timingFunction}s ${delay}s`,
    };
  },

  rotate: (degree) => {
    return {
      transform: `rotate(${degree}deg)`,
    };
  },

  scale: (factor) => {
    return {
      transform: `scale(${factor})`,
    };
  },
  boxShadowDark: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },

  outlineNone: {
    outline: "none",
  },

  pointer: {
    cursor: "pointer",
  },

  noPointerEvents: {
    pointerEvents: "none",
  },

  overflowAuto: {
    overflow: "auto",
  },

  overflowScroll: {
    overflow: "scroll",
  },

  overflowVisible: {
    overflow: "visible",
  },

  overflowXHidden: {
    overflowX: "hidden",
  },

  overflowYHidden: {
    overflowY: "hidden",
  },

  gradientBg: (startColor, endColor) => {
    return {
      background: `linear-gradient(${startColor}, ${endColor})`,
    };
  },

  bgImage: (url, size, position, repeat) => {
    const { x, y } = position;
    return {
      background: `url(${url}) ${size}px ${x}px ${y}px ${
        repeat ? "repeat" : "no-repeat"
      }`,
    };
  },

  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },

  flexRow: {
    display: "flex",
    flexDirection: "row",
  },

  flexWrap: {
    flexWrap: "wrap",
  },

  flexNoWrap: {
    flexWrap: "nowrap",
  },

  flexGrow: (value) => {
    return {
      flexGrow: value,
    };
  },

  flexShrink: (value) => {
    return {
      flexShrink: value,
    };
  },

  flexBasisEm: (value) => {
    return {
      flexBasis: `${value}em`,
    };
  },
  flexBasisPerc: (value) => {
    return {
      flexBasis: `${value}%`,
    };
  },
  flexBasisPx: (value) => {
    return {
      flexBasis: `${value}px`,
    };
  },
  flexBasisAuto: {
    flexBasis: "auto",
  },
  flexBasisMaxC: {
    flexBasis: "max-content",
  },
  flexBasisMinC: {
    flexBasis: "min-content",
  },
  flexBasisFitC: {
    flexBasis: "fit-content",
  },
  flexBasisC: {
    flexBasis: "content",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  letterSpacing: (value) => {
    return {
      letterSpacing: `${value}px`,
    };
  },

  wordSpacing: (value) => {
    return {
      wordSpacing: `${value}px`,
    };
  },

  textAlignJustify: {
    textAlign: "justify",
  },

  overflowEllipsis: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  cursorNotAllowed: {
    cursor: "not-allowed",
  },

  cursorGrab: {
    cursor: "grab",
  },

  cursorGrabbing: {
    cursor: "grabbing",
  },

  opacity: (value) => {
    return {
      opacity: value,
    };
  },

  filterBlur: (value) => {
    return {
      filter: `blur(${value}px)`,
    };
  },

  filterBrightness: (value) => {
    return {
      filter: `brightness(${value}%)`,
    };
  },

  filterContrast: (value) => {
    return {
      filter: `contrast(${value}%)`,
    };
  },

  filterGrayscale: (value) => {
    return {
      filter: `grayscale(${value}%)`,
    };
  },

  filterHueRotate: (value) => {
    return {
      filter: `hue-rotate(${value}deg)`,
    };
  },

  filterInvert: (value) => {
    return {
      filter: `invert(${value}%)`,
    };
  },

  filterOpacity: (value) => {
    return {
      filter: `opacity(${value}%)`,
    };
  },

  filterSaturate: (value) => {
    return {
      filter: `saturate(${value}%)`,
    };
  },

  filterSepia: (value) => {
    return {
      filter: `sepia(${value}%)`,
    };
  },
  bgPrimaryHover: () => {
    const { ref, isHovered } = useHover();

    return {
      stylePrimaryHover: isHovered
        ? {
            backgroundColor: "#0056b3",
            color: "#fff",
          }
        : {},
      refPrimaryHover: ref,
    };
  },

  bgSuccessHover: () => {
    const { ref, isHovered } = useHover();

    return {
      styleSuccessHover: isHovered
        ? {
            backgroundColor: "#218838",
            color: "#fff",
          }
        : {},
      refSuccessHover: ref,
    };
  },
  bgDangerHover: () => {
    const { ref, isHovered } = useHover();

    return {
      styleDangerHover: isHovered
        ? {
            backgroundColor: "#d32f2f",
            color: "#fff",
          }
        : {},
      refDangerHover: ref,
    };
  },
  bgWarningHover: () => {
    const { ref, isHovered } = useHover();

    return {
      styleWarningHover: isHovered
        ? {
            backgroundColor: "#f0ad4e",
            color: "#fff",
          }
        : {},
      refWarningHover: ref,
    };
  },
  bgInfoHover: () => {
    const { ref, isHovered } = useHover();

    return {
      styleInfoHover: isHovered
        ? {
            backgroundColor: "#17a2b8",
            color: "#fff",
          }
        : {},
      refInfoHover: ref,
    };
  },
  bgSecondaryHover: () => {
    const { ref, isHovered } = useHover();

    return {
      styleSecondaryHover: isHovered
        ? {
            backgroundColor: "#6c757d",
            color: "#fff",
          }
        : {},
      refSecondaryHover: ref,
    };
  },
  bgLightHover: () => {
    const { ref, isHovered } = useHover();

    return {
      styleLightHover: isHovered
        ? {
            backgroundColor: "#f8f9fa",
            color: "#fff",
          }
        : {},
      refLightHover: ref,
    };
  },
  bgDarkHover: () => {
    const { ref, isHovered } = useHover();

    return {
      styleDarkHover: isHovered
        ? {
            backgroundColor: "#343a40",
            color: "#fff",
          }
        : {},
      refDarkHover: ref,
    };
  },
  bgWhiteHover: () => {
    const { ref, isHovered } = useHover();

    return {
      styleWhiteHover: isHovered
        ? {
            backgroundColor: "#fff",
            color: "#000",
          }
        : {},
      refWhiteHover: ref,
    };
  },
  bgTransparentHover: () => {
    const { ref, isHovered } = useHover();

    return {
      styleTransparentHover: isHovered
        ? {
            backgroundColor: "transparent",
            color: "#000",
          }
        : {},
      refTransparentHover: ref,
    };
  },
  bgPrimaryActive: () => {
    const { ref, isActive } = useActive();

    return {
      stylePrimaryActive: isActive
        ? {
            backgroundColor: "#0056b3",
            color: "#fff",
          }
        : {},
      refPrimaryActive: ref,
    };
  },
  bgSuccessActive: () => {
    const { ref, isActive } = useActive();

    return {
      styleSuccessActive: isActive
        ? {
            backgroundColor: "#218838",
            color: "#fff",
          }
        : {},
      refSuccessActive: ref,
    };
  },
  bgDangerActive: () => {
    const { ref, isActive } = useActive();

    return {
      styleDangerActive: isActive
        ? {
            backgroundColor: "#d32f2f",
            color: "#fff",
          }
        : {},
      refDangerActive: ref,
    };
  },
  bgWarningActive: () => {
    const { ref, isActive } = useActive();

    return {
      styleWarningActive: isActive
        ? {
            backgroundColor: "#f0ad4e",
            color: "#fff",
          }
        : {},
      refWarningActive: ref,
    };
  },
  bgInfoActive: () => {
    const { ref, isActive } = useActive();

    return {
      styleInfoActive: isActive
        ? {
            backgroundColor: "#17a2b8",
            color: "#fff",
          }
        : {},
      refInfoActive: ref,
    };
  },

  bgSecondaryActive: () => {
    const { ref, isActive } = useActive();

    return {
      styleSecondaryActive: isActive
        ? {
            backgroundColor: "#6c757d",
            color: "#fff",
          }
        : {},
      refSecondaryActive: ref,
    };
  },
  bgLightActive: () => {
    const { ref, isActive } = useActive();

    return {
      styleLightActive: isActive
        ? {
            backgroundColor: "#f8f9fa",
            color: "#fff",
          }
        : {},
      refLightActive: ref,
    };
  },

  bgDarkActive: () => {
    const { ref, isActive } = useActive();
    return {
      styleDarkActive: isActive
        ? {
            backgroundColor: "#343a40",
            color: "#fff",
          }
        : {},
      refDarkActive: ref,
    };
  },
  persWidth: (value) => {
    return {
      width: `${value}%`,
    };
  },
  persWH: (value) => {
    return {
      width: `${value}%`,
      height: `${value}%`,
    };
  },
  persHeight: (value) => {
    return {
      height: `${value}%`,
    };
  },
  pxWidth: (value) => {
    return {
      width: `${value}px`,
    };
  },
  pxHeight: (value) => {
    return {
      height: `${value}px`,
    };
  },
  pxWH: (value) => {
    return {
      width: `${value}px`,
      height: `${value}px`,
    };
  },
  dvhHeight: (value) => {
    return {
      height: `${value}dvh`,
    };
  },
  dvwWidth: (value) => {
    return {
      width: `${value}dvw`,
    };
  },
  dvWH: (value) => {
    return {
      width: `${value}dvw`,
      height: `${value}dvh`,
    };
  },
  fitContentW: {
    width: "fit-content",
  },
  fitContentH: {
    height: "fit-content",
  },
  fitContentHW: {
    width: "fit-content",
    height: "fit-content",
  },
  maxWidthPx: (value) => {
    return {
      width: "100%",
      maxWidth: `${value}px`,
    };
  },
  maxHeightPx: (value) => {
    return {
      width: "100%",
      maxHeight: `${value}px`,
    };
  },
  maxWHPx: (value) => {
    return {
      width: "100%",
      maxWidth: `${value}px`,
      maxHeight: `${value}px`,
    };
  },
  minWidthPx: (value) => {
    return {
      width: "100%",
      minWidth: `${value}px`,
    };
  },
  minHeightPx: (value) => {
    return {
      width: "100%",
      minHeight: `${value}px`,
    };
  },
  minWHPx: (value) => {
    return {
      width: "100%",
      minWidth: `${value}px`,
      minHeight: `${value}px`,
    };
  },
  minHeightPers: (value) => {
    return {
      width: "100%",
      minWidth: `${value}%`,
    };
  },
  minWidthPers: (value) => {
    return {
      width: "100%",
      minHeight: `${value}%`,
    };
  },
  minWHPers: (value) => {
    return {
      width: "100%",
      minWidth: `${value}%`,
      minHeight: `${value}%`,
    };
  },
  maxWidthPers: (value) => {
    return {
      width: "100%",
      maxWidth: `${value}%`,
    };
  },
  maxHeightPers: (value) => {
    return {
      width: "100%",
      maxHeight: `${value}%`,
    };
  },
  maxWHPers: (value) => {
    return {
      width: "100%",
      maxWidth: `${value}%`,
      maxHeight: `${value}%`,
    };
  },
  gridSystem: (numColumns = 1, gapValue) =>
    new GridSystemOop(numColumns, gapValue),

  gradientText: (angle, colors) => ({
    background: `linear-gradient(${angle}, ${colors})`,
    WebkitBackgroundClip: "text",
    color: "transparent",
  }),
  flexibleGap: (minSpacing, maxSpacing) => ({
    gap: `clamp(${minSpacing}px, 2vw, ${maxSpacing}px)`,
  }),
  neonText: (color) => ({
    textShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`,
  }),
  roundedCard: (bgColor, borderRadius) => ({
    backgroundColor: bgColor,
    borderRadius,
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }),
  animation: (
    name,
    duration,
    timingFunction,
    delay,
    iterationCount,
    direction,
    fillMode,
    playState
  ) => ({
    animation: `${name} ${duration}s ${timingFunction}s ${delay}s ${iterationCount} ${direction} ${fillMode} ${playState}`,
  }),
};

const styleHover = (...style) => {
  const { ref, isHovered } = useHover();
  // If the base style is empty, return an empty style CSSProperties.
  if (Object.keys(style).length === 0) {
    return {
      refOfHover: ref,
      styleOfHover: {},
    };
  }
  // Return the reference and style CSSProperties based on the hover state.

  return {
    refOfHover: ref,
    styleOfHover: isHovered ? mergeStyles(...style) : {},
  };
};

const styleActive = (...style) => {
  const { ref, isActive } = useActive();
  // If the base style is empty, return an empty style CSSProperties.
  if (Object.keys(style).length === 0) {
    return {
      refOfActive: ref,
      styleOfActive: {},
    };
  }
  // Return the reference and style CSSProperties based on the active state.
  return {
    refOfActive: ref,
    styleOfActive: isActive ? mergeStyles(...style) : {},
  };
};

const mergeStyles = (...args) => {
  return Object.assign({}, ...args);
};

const animationKeyframe = (animationName, styleArrayOfCSSProperties) => {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(`
      @keyframes ${animationName} {${generateKeyframeFromStyles(
    styleArrayOfCSSProperties
  )}}`);
  document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
};

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
  RespP,
  Circle,
  RespBackgImg,
  useActive,
  useHover,
  useMediaQuery,
  useMediaStyle,
  mergeRefs,
  styles,
  mergeStyles,
  styleHover,
  styleActive,
  animationKeyframe,
};
