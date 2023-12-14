/**
 * Checks if a given color string is a valid color.
 * @param {string} color - The color string to be checked.
 * @returns {boolean} - Returns true if the color is valid, false otherwise.
 */
const isValidColor = (color) => {
  // Regular expression to check for a valid color in various formats
  if (color === "" || color === undefined) {
    return false;
  }
  const colorRegex =
    /^(#([0-9a-fA-F]{3}){1,2}|[a-zA-Z]+|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(0(\.\d+)?|1(\.0+)?)\)|hsl\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?\s*\)|hsla\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?\s*,\s*(0(\.\d+)?|1(\.0+)?)\))$/;
  return colorRegex.test(color);
};

/**
 * Checks if a given size is a valid size.
 * @param {number} size - The size to be checked.
 * @returns {boolean} - Returns true if the size is valid, false otherwise.
 */
const isValidSize = (size) => {
  return typeof size === "number" && size >= 0;
};

/**
 * Checks if a given border style is a valid border style.
 * @param {string} type - The border style to be checked.
 * @returns {boolean} - Returns true if the border style is valid, false otherwise.
 */
const isValidBorderStyle = (type) => {
  /**
   * An array containing allowed border styles.
   */
  const allowedStyles = [
    "solid",
    "dashed",
    "dotted",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "none",
  ];

  /**
   * Returns true if the given border style is included in the allowed styles array, false otherwise.
   */
  return allowedStyles.includes(type);
};

/**
 * Checks if a given text decoration style is a valid text decoration style.
 * @param {string} type - The text decoration style to be checked.
 * @returns {boolean} - Returns true if the text decoration style is valid, false otherwise.
 */
const isValidTextDecoration = (type) => {
  /**
   * An array containing allowed text decoration styles.
   */
  const allowedStyles = ["underline", "overline", "line-through", "none"];

  /**
   * Returns true if the given text decoration style is included in the allowed styles array, false otherwise.
   */
  return allowedStyles.includes(type);
};
const isValidTextTransform = (type) => {
  const allowedStyles = ["capitalize", "uppercase", "lowercase", "none"];
  return allowedStyles.includes(type);
};

/**
 * Checks if a given justification content is a valid justification content.
 * @param {string} type - The justification content to be checked.
 * @returns {boolean} - Returns true if the justification content is valid, false otherwise.
 */
const isValidJContent = (type) => {
  /**
   * An array containing allowed justification contents.
   */
  const allowedStyles = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "start",
    "end",
    "left",
    "right",
    "normal",
    "stretch",
  ];

  /**
   * Returns true if the given justification content is included in the allowed styles array, false otherwise.
   */
  return allowedStyles.includes(type);
};

/**
 * Checks if a given alignment content is a valid alignment content.
 * @param {string} type - The alignment content to be checked.
 * @returns {boolean} - Returns true if the alignment content is valid, false otherwise.
 */
const isValidAContent = (type) => {
  /**
   * An array containing allowed alignment contents.
   */
  const allowedStyles = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "start",
    "end",
    "left",
    "right",
    "normal",
    "stretch",
  ];

  /**
   * Returns true if the given alignment content is included in the allowed styles array, false otherwise.
   */
  return allowedStyles.includes(type);
};
export {
  isValidColor,
  isValidSize,
  isValidBorderStyle,
  isValidTextDecoration,
  isValidTextTransform,
  isValidJContent,
  isValidAContent,
};
