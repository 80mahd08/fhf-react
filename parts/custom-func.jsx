import merge from "lodash.merge";
import { useActive, useHover } from "./custom-hooks";

function mergeRefs(...refs) {
  // Define a memoized function to set the value of each ref in the array based on the order of the refs.
  const mergeFunction = (val) => {
    setRef(val, ...refs);
  };

  // Return the memoized merge function.
  return mergeFunction;
}

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

const hoverStyle = (...styles) => {
  const { ref, isHovered } = useHover();

  return {
    hoverRef: ref,
    hoverStyle: isHovered ? mergeStyles(...styles) : {},
  };
};

const activeStyle = (...styles) => {
  const { ref, isActive } = useActive();

  return {
    activeRef: ref,
    activeStyle: isActive ? mergeStyles(...styles) : {},
  };
};

function mergeStyles(...styles) {
  return merge({}, ...styles); // Deep merge styles
}

export { mergeStyles, mergeRefs, activeStyle, hoverStyle };
