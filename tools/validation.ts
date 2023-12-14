/**
 * Checks if a given color string is a valid color.
 * @param color - The color string to be checked.
 * @returns Returns true if the color is valid, false otherwise.
 */
const isValidColor = (color: string): boolean => {
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
 * @param size - The size to be checked.
 * @returns Returns true if the size is valid, false otherwise.
 */
const isValidSize = (size: number): boolean => {
  return typeof size === "number" && size >= 0;
};

/**
 * Checks if a given border style is a valid border style.
 * @param type - The border style to be checked.
 * @returns Returns true if the border style is valid, false otherwise.
 */
const isValidBorderStyle = (type: string): boolean => {
  /**
   * An array containing allowed border styles.
   */
  const allowedStyles: string[] = [
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
 * @param type - The text decoration style to be checked.
 * @returns Returns true if the text decoration style is valid, false otherwise.
 */
const isValidTextDecoration = (type: string): boolean => {
  /**
   * An array containing allowed text decoration styles.
   */
  const allowedStyles: string[] = ["underline", "overline", "line-through", "none"];

  /**
   * Returns true if the given text decoration style is included in the allowed styles array, false otherwise.
   */
  return allowedStyles.includes(type);
};

const isValidTextTransform = (type: string): boolean => {
  const allowedStyles: string[] = ["capitalize", "uppercase", "lowercase", "none"];
  return allowedStyles.includes(type);
};

/**
 * Checks if a given justification content is a valid justification content.
 * @param type - The justification content to be checked.
 * @returns Returns true if the justification content is valid, false otherwise.
 */
const isValidJContent = (type: string): boolean => {
  /**
   * An array containing allowed justification contents.
   */
  const allowedStyles: string[] = [
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
 * @param type - The alignment content to be checked.
 * @returns Returns true if the alignment content is valid, false otherwise.
 */
const isValidAContent = (type: string): boolean => {
  /**
   * An array containing allowed alignment contents.
   */
  const allowedStyles: string[] = [
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
