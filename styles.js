import { useHover, useActive } from "./index";
import {
  isValidColor,
  isValidSize,
  isValidBorderStyle,
  isValidTextDecoration,
  isValidTextTransform,
  isValidJContent,
  isValidAContent,
} from "./tools/validation";

const styles = {
  // Positioning
  /**
   * CSS styles for centering an element using absolute positioning and translate.
   * @type {Object}
   */
  centerPosition: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },

  // Text Alignment
  /**
   * CSS styles for centering text.
   * @type {Object}
   */
  textCenter: {
    textAlign: "center",
  },
  /**
   * CSS styles for left-aligning text.
   * @type {Object}
   */
  textLeft: {
    textAlign: "left",
  },
  /**
   * CSS styles for right-aligning text.
   * @type {Object}
   */
  textRight: {
    textAlign: "right",
  },

  // Floats
  /**
   * CSS styles for floating an element to the left.
   * @type {Object}
   */
  floatLeft: {
    float: "left",
  },
  /**
   * CSS styles for floating an element to the right.
   * @type {Object}
   */
  floatRight: {
    float: "right",
  },

  // Flexbox
  /**
   * CSS styles for centering content using flexbox.
   * @type {Object}
   */
  centerContentFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  /**
   * CSS styles for displaying an element as a flex container.
   * @type {Object}
   */
  dispFlex: {
    display: "flex",
  },
  /**
   * CSS styles for displaying an element as an inline flex container.
   * @type {Object}
   */
  dispInlineFlex: {
    display: "inline-flex",
  },

  // Display
  /**
   * CSS styles for hiding an element.
   * @type {Object}
   */
  dispNone: {
    display: "none",
  },
  /**
   * CSS styles for displaying an element as a block.
   * @type {Object}
   */
  dispBlock: {
    display: "block",
  },
  /**
   * CSS styles for displaying an element as an inline element.
   * @type {Object}
   */
  dispInline: {
    display: "inline",
  },
  /**
   * CSS styles for displaying an element as an inline block.
   * @type {Object}
   */
  dispInlineBlock: {
    display: "inline-block",
  },
  /**
   * CSS styles for displaying an element as a table.
   * @type {Object}
   */
  dispTable: {
    display: "table",
  },
  /**
   * CSS styles for displaying an element as a table row.
   * @type {Object}
   */
  dispTableRow: {
    display: "table-row",
  },
  /**
   * CSS styles for displaying an element as a table cell.
   * @type {Object}
   */
  dispTableCell: {
    display: "table-cell",
  },
  /**
   * CSS styles for displaying an element as a grid container.
   * @type {Object}
   */
  dispGrid: {
    display: "grid",
  },
  /**
   * CSS styles for displaying an element as an inline grid container.
   * @type {Object}
   */
  dispInlineGrid: {
    display: "inline-grid",
  },

  // Text and Background Styles
  /**
   * Function that returns CSS styles for setting the font color.
   * @param {string} color - The color value.
   * @returns {Object} CSS styles for font color.
   * @throws {Error} Throws an error if the color value is invalid.
   */
  fontColor: (color) => {
    if (isValidColor(color)) {
      return {
        color: color,
      };
    } else {
      throw new Error("Invalid color value in fontColor");
    }
  },
  /**
   * Function that returns CSS styles for setting the background color.
   * @param {string} color - The color value.
   * @returns {Object} CSS styles for background color.
   * @throws {Error} Throws an error if the color value is invalid.
   */
  bg: (color) => {
    if (isValidColor(color)) {
      return {
        backgroundColor: color,
      };
    } else {
      throw new Error("Invalid color value in bg");
    }
  },
  // Border Styles
  /**
   * Function that returns CSS styles for creating a border.
   * @param {number} size - The size of the border in pixels.
   * @param {string} type - The style of the border (e.g., solid, dashed).
   * @param {string} color - The color of the border.
   * @returns {Object} CSS styles for the border.
   * @throws {Error} Throws an error if the size, type, or color values are invalid.
   */
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

  // Margin Styles
  /**
   * Function that returns CSS styles for setting the margin.
   * @param {number} size - The size of the margin in pixels.
   * @returns {Object} CSS styles for the margin.
   * @throws {Error} Throws an error if the size value is invalid.
   */
  margin: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in margin");
    }
    return {
      margin: `${size}px`,
    };
  },
  /**
   * Function that returns CSS styles for setting the top margin.
   * @param {number} size - The size of the top margin in pixels.
   * @returns {Object} CSS styles for the top margin.
   * @throws {Error} Throws an error if the size value is invalid.
   */
  marginTop: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in marginTop");
    }
    return {
      marginTop: `${size}px`,
    };
  },
  /**
   * Function that returns CSS styles for setting the bottom margin.
   * @param {number} size - The size of the bottom margin in pixels.
   * @returns {Object} CSS styles for the bottom margin.
   * @throws {Error} Throws an error if the size value is invalid.
   */
  marginBottom: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in marginBottom");
    }
    return {
      marginBottom: `${size}px`,
    };
  },
  /**
   * Function that returns CSS styles for setting the left margin.
   * @param {number} size - The size of the left margin in pixels.
   * @returns {Object} CSS styles for the left margin.
   * @throws {Error} Throws an error if the size value is invalid.
   */
  marginLeft: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in marginLeft");
    }
    return {
      marginLeft: `${size}px`,
    };
  },
  /**
   * Function that returns CSS styles for setting the right margin.
   * @param {number} size - The size of the right margin in pixels.
   * @returns {Object} CSS styles for the right margin.
   * @throws {Error} Throws an error if the size value is invalid.
   */
  marginRight: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in marginRight");
    }
    return {
      marginRight: `${size}px`,
    };
  },


  // Padding Styles
  /**
   * Function that returns CSS styles for setting the padding.
   * @param {number} size - The size of the padding in pixels.
   * @returns {Object} CSS styles for the padding.
   * @throws {Error} Throws an error if the size value is invalid.
   */
  padding: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in padding");
    }
    return {
      padding: `${size}px`,
    };
  },
  /**
   * Function that returns CSS styles for setting the top padding.
   * @param {number} size - The size of the top padding in pixels.
   * @returns {Object} CSS styles for the top padding.
   * @throws {Error} Throws an error if the size value is invalid.
   */
  paddingTop: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in paddingTop");
    }
    return {
      paddingTop: `${size}px`,
    };
  },
  /**
   * Function that returns CSS styles for setting the bottom padding.
   * @param {number} size - The size of the bottom padding in pixels.
   * @returns {Object} CSS styles for the bottom padding.
   * @throws {Error} Throws an error if the size value is invalid.
   */
  paddingBottom: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in paddingBottom");
    }
    return {
      paddingBottom: `${size}px`,
    };
  },
  /**
   * Function that returns CSS styles for setting the left padding.
   * @param {number} size - The size of the left padding in pixels.
   * @returns {Object} CSS styles for the left padding.
   * @throws {Error} Throws an error if the size value is invalid.
   */
  paddingLeft: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in paddingLeft");
    }
    return {
      paddingLeft: `${size}px`,
    };
  },
  /**
   * Function that returns CSS styles for setting the right padding.
   * @param {number} size - The size of the right padding in pixels.
   * @returns {Object} CSS styles for the right padding.
   * @throws {Error} Throws an error if the size value is invalid.
   */
  paddingRight: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in paddingRight");
    }
    return {
      paddingRight: `${size}px`,
    };
  },
  // Responsive Margin Styles
  /**
   * Function that returns responsive CSS styles for setting the margin.
   * @param {number} min - The minimum size of the margin in pixels.
   * @param {number} max - The maximum size of the margin in pixels.
   * @returns {Object} CSS styles for the responsive margin.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */
  respMargin: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMargin");
    }
    return {
      margin: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  // Responsive Margin Styles
  /**
   * Function that returns responsive CSS styles for setting the top margin.
   * @param {number} min - The minimum size of the top margin in pixels.
   * @param {number} max - The maximum size of the top margin in pixels.
   * @returns {Object} CSS styles for the responsive top margin.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */
  respMarginTop: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMarginTop");
    }
    return {
      marginTop: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  /**
   * Function that returns responsive CSS styles for setting the left margin.
   * @param {number} min - The minimum size of the left margin in pixels.
   * @param {number} max - The maximum size of the left margin in pixels.
   * @returns {Object} CSS styles for the responsive left margin.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */
  respMarginLeft: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMarginLeft");
    }
    return {
      marginLeft: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  /**
   * Function that returns responsive CSS styles for setting the right margin.
   * @param {number} min - The minimum size of the right margin in pixels.
   * @param {number} max - The maximum size of the right margin in pixels.
   * @returns {Object} CSS styles for the responsive right margin.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */
  respMarginRight: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMarginRight");
    }
    return {
      marginRight: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  /**
   * Function that returns responsive CSS styles for setting the bottom margin.
   * @param {number} min - The minimum size of the bottom margin in pixels.
   * @param {number} max - The maximum size of the bottom margin in pixels.
   * @returns {Object} CSS styles for the responsive bottom margin.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */
  respMarginBottom: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMarginBottom");
    }
    return {
      marginBottom: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },

  // Responsive Padding Styles
  /**
   * Function that returns responsive CSS styles for setting the padding.
   * @param {number} min - The minimum size of the padding in pixels.
   * @param {number} max - The maximum size of the padding in pixels.
   * @returns {Object} CSS styles for the responsive padding.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */
  respPadding: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPadding");
    }
    return {
      padding: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  /**
   * Function that returns responsive CSS styles for setting the top padding.
   * @param {number} min - The minimum size of the top padding in pixels.
   * @param {number} max - The maximum size of the top padding in pixels.
   * @returns {Object} CSS styles for the responsive top padding.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */
  respPaddingTop: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPaddingTop");
    }
    return {
      paddingTop: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  // Responsive Padding Styles
  /**
   * Function that returns responsive CSS styles for setting the left padding.
   * @param {number} min - The minimum size of the left padding in pixels.
   * @param {number} max - The maximum size of the left padding in pixels.
   * @returns {Object} CSS styles for the responsive left padding.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */
  respPaddingLeft: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPaddingLeft");
    }
    return {
      paddingLeft: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  /**
   * Function that returns responsive CSS styles for setting the right padding.
   * @param {number} min - The minimum size of the right padding in pixels.
   * @param {number} max - The maximum size of the right padding in pixels.
   * @returns {Object} CSS styles for the responsive right padding.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */
  respPaddingRight: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPaddingRight");
    }
    return {
      paddingRight: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  /**
   * Function that returns responsive CSS styles for setting the bottom padding.
   * @param {number} min - The minimum size of the bottom padding in pixels.
   * @param {number} max - The maximum size of the bottom padding in pixels.
   * @returns {Object} CSS styles for the responsive bottom padding.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */
  respPaddingBottom: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPaddingBottom");
    }
    return {
      paddingBottom: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  // Style: marginNone
  /**
   * Object that represents the CSS styles for setting the margin to 0.
   */
  marginNone: {
    margin: 0,
  },

  // Style: paddingNone
  /**
   * Object that represents the CSS styles for setting the padding to 0.
   */
  paddingNone: {
    padding: 0,
  },

  // Style: borderNone
  /**
   * Object that represents the CSS styles for setting the border to 0.
   */
  borderNone: {
    border: 0,
  },

  // Style: borderRadiusNone
  /**
   * Object that represents the CSS styles for setting the border radius to 0.
   */
  borderRadiusNone: {
    borderRadius: 0,
  },

  // Style: boxShadowNone
  /**
   * Object that represents the CSS styles for setting the box shadow to "none".
   */
  boxShadowNone: {
    boxShadow: "none",
  },

  // Style: textShadowNone
  /**
   * Object that represents the CSS styles for setting the text shadow to "none".
   */
  textShadowNone: {
    textShadow: "none",
  },

  // Style: zIndex
  /**
   * Function that returns CSS styles for setting the z-index.
   * @param {number} value - The z-index value.
   * @returns {Object} CSS styles for the z-index.
   * @throws {Error} Throws an error if the value is invalid.
   */
  zIndex: (value) => {
    if (!isValidSize(value)) {
      throw new Error("Invalid value in zIndex");
    }
    return {
      zIndex: value,
    };
  },

  // Style: textDeco
  /**
   * Function that returns CSS styles for setting the text decoration.
   * @param {string} value - The text decoration value.
   * @returns {Object} CSS styles for the text decoration.
   * @throws {Error} Throws an error if the value is invalid.
   */
  textDeco: (value) => {
    if (!isValidTextDecoration(value)) {
      throw new Error("Invalid value in textDeco");
    }
    return {
      textDecoration: value,
    };
  },

  // Style: textTrans
  /**
   * Function that returns CSS styles for setting the text transform.
   * @param {string} value - The text transform value.
   * @returns {Object} CSS styles for the text transform.
   * @throws {Error} Throws an error if the value is invalid.
   */
  textTrans: (value) => {
    if (!isValidTextTransform(value)) {
      throw new Error("Invalid value in textTrans");
    }
    return {
      textTransform: value,
    };
  },

  // Style: transBg
  /**
   * Object that represents the CSS styles for setting the background color to transparent.
   */
  transBg: {
    backgroundColor: "transparent",
  },

  // Style: rounded
  /**
   * Object that represents the CSS styles for setting the border radius to 5px.
   */
  rounded: {
    borderRadius: "5px",
  },

  // Style: extraRounded
  /**
   * Object that represents the CSS styles for setting the border radius to 25px.
   */
  extraRounded: {
    borderRadius: "25px",
  },

  // Style: megaRounded
  /**
   * Object that represents the CSS styles for setting the border radius to 45px.
   */
  megaRounded: {
    borderRadius: "45px",
  },

  // Style: superRounded
  /**
   * Object that represents the CSS styles for setting the border radius to 65px.
   */
  superRounded: {
    borderRadius: "65px",
  },

  // Style: ultraRounded
  /**
   * Object that represents the CSS styles for setting the border radius to 85px.
   */
  ultraRounded: {
    borderRadius: "85px",
  },

  // Style: extremeRounded
  /**
   * Object that represents the CSS styles for setting the border radius to 105px.
   */
  extremeRounded: {
    borderRadius: "105px",
  },

  // Style: radicalRounded
  /**
   * Object that represents the CSS styles for setting the border radius to 125px.
   */
  radicalRounded: {
    borderRadius: "125px",
  },

  // Style: hyperRounded
  /**
   * Object that represents the CSS styles for setting the border radius to 145px.
   */
  hyperRounded: {
    borderRadius: "145px",
  },

  // Style: ultimateRounded
  /**
   * Object that represents the CSS styles for setting the border radius to 165px.
   */
  ultimateRounded: {
    borderRadius: "165px",
  },

  // Style: maxRounded
  /**
   * Object that represents the CSS styles for setting the border radius to 185px.
   */
  maxRounded: {
    borderRadius: "185px",
  },

  // Style: beyondRounded
  /**
   * Object that represents the CSS styles for setting the border radius to 205px.
   */
  beyondRounded: {
    borderRadius: "205px",
  },

  // Style: flexJContent
  /**
   * Function that returns CSS styles for setting the justify-content property in a flex container.
   * @param {string} type - The justify-content value.
   * @returns {Object} CSS styles for the justify-content property.
   * @throws {Error} Throws an error if the value is invalid.
   */
  flexJContent: (type) => {
    if (!isValidJContent(type)) {
      throw new Error("Invalid value in flexJContent");
    }
    return {
      justifyContent: type,
    };
  },

  // Style: flexAContent
  /**
   * Function that returns CSS styles for setting the align-items property in a flex container.
   * @param {string} type - The align-items value.
   * @returns {Object} CSS styles for the align-items property.
   * @throws {Error} Throws an error if the value is invalid.
   */
  flexAContent: (type) => {
    if (!isValidAContent(type)) {
      throw new Error("Invalid value in flexAContent");
    }
    return {
      alignItems: type,
    };
  },

  // Style: RespFontSize
  /**
   * Function that returns CSS styles for setting the font size with clamped responsiveness.
   * @param {number} min - The minimum font size in pixels.
   * @param {number} max - The maximum font size in pixels.
   * @returns {Object} CSS styles for the font size with clamped responsiveness.
   */
  RespFontSize: (min, max) => ({
    fontSize: `clamp(${min}px, 4vw, ${max}px)`,
  }),

  // Style: RespLineHeight
  /**
   * Function that returns CSS styles for setting the line height with clamped responsiveness.
   * @param {number} min - The minimum line height in pixels.
   * @param {number} max - The maximum line height in pixels.
   * @returns {Object} CSS styles for the line height with clamped responsiveness.
   */
  RespLineHeight: (min, max) => ({
    lineHeight: `clamp(${min}px, 4vw, ${max}px)`,
  }),

  // Style: respFontWeight
  /**
   * Function that returns CSS styles for setting the font weight with clamped responsiveness.
   * @param {number} min - The minimum font weight.
   * @param {number} max - The maximum font weight.
   * @returns {Object} CSS styles for the font weight with clamped responsiveness.
   */
  respFontWeight: (min, max) => ({
    fontWeight: `clamp(${min}, 4vw, ${max})`,
  }),
  // Style: boxShadowLight
  /**
   * Object that represents the CSS styles for a light box shadow.
   */
  boxShadowLight: {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  // Style: textPrimary
  /**
   * Object that represents the CSS styles for setting the primary text color.
   */
  textPrimary: {
    color: "#007bff",
  },

  // Style: textSecondary
  /**
   * Object that represents the CSS styles for setting the secondary text color.
   */
  textSecondary: {
    color: "#6c757d",
  },

  // Style: bgLight
  /**
   * Object that represents the CSS styles for setting a light background color.
   */
  bgLight: {
    backgroundColor: "#f8f9fa",
  },

  // Style: roundedCircle
  /**
   * Object that represents the CSS styles for setting a border radius to create a rounded circle.
   */
  roundedCircle: {
    borderRadius: "50%",
  },
  // Style: bgPrimary
  /**
   * Object that represents the CSS styles for setting the primary background color with white text.
   */
  bgPrimary: {
    backgroundColor: "#007bff",
    color: "#fff",
  },

  // Style: bgSuccess
  /**
   * Object that represents the CSS styles for setting the success background color with white text.
   */
  bgSuccess: {
    backgroundColor: "#28a745",
    color: "#fff",
  },

  // Style: bgDanger
  /**
   * Object that represents the CSS styles for setting the danger background color with white text.
   */
  bgDanger: {
    backgroundColor: "#dc3545",
    color: "#fff",
  },

  // Style: textUppercase
  /**
   * Object that represents the CSS styles for transforming text to uppercase.
   */
  textUppercase: {
    textTransform: "uppercase",
  },

  // Style: textBold
  /**
   * Object that represents the CSS styles for setting text to bold.
   */
  textBold: {
    fontWeight: "bold",
  },
  // Style: positionFixed
  /**
   * Object that represents the CSS styles for setting the position to fixed.
   */
  positionFixed: {
    position: "fixed",
  },

  // Style: fullWidth
  /**
   * Object that represents the CSS styles for setting the width to 100%.
   */
  fullWidth: {
    width: "100%",
  },
  // Style: fullHeight

  /**
   * Object that represents the CSS styles for setting the height to 100%.
   */
  fullHeight: {
    height: "100%",
  },

  // Style: overflowHidden
  /**
   * Object that represents the CSS styles for hiding overflow content.
   */
  overflowHidden: {
    overflow: "hidden",
  },
  // Style: positionAbsolute
  /**
   * Object that represents the CSS styles for setting the position to absolute.
   */
  positionAbsolute: {
    position: "absolute",
  },
  // Style: positionRelative
  /**
   * Object that represents the CSS styles for setting the position to relative.
   */
  positionRelative: {
    position: "relative",
  },
  // Style: positionSticky
  /**
   * Object that represents the CSS styles for setting the position to sticky.
   */
  positionSticky: {
    position: "sticky",
  },
  // Style: positionStatic
  /**
   * Object that represents the CSS styles for setting the position to static.
   */
  positionStatic: {
    position: "static",
  },
  // Style: transition
  /**
   * Function that returns CSS styles for adding a transition effect.
   * @param {string} property - The CSS property to transition.
   * @param {number} duration - The duration of the transition.
   * @param {number} timingFunction - The timing function of the transition.
   * @returns {Object} CSS styles for the transition effect.
   */
  transition: (property, duration, timingFunction) => {
    return {
      transition: `${property} ${duration}s ${timingFunction}s`,
    };
  },

  // Style: rotate
  /**
   * Function that returns CSS styles for rotating an element.
   * @param {number} degree - The degree of rotation.
   * @returns {Object} CSS styles for the rotation.
   */
  rotate: (degree) => {
    return {
      transform: `rotate(${degree}deg)`,
    };
  },

  // Style: scale
  /**
   * Function that returns CSS styles for scaling an element.
   * @param {number} factor - The scaling factor.
   * @returns {Object} CSS styles for the scaling.
   */
  scale: (factor) => {
    return {
      transform: `scale(${factor})`,
    };
  },

  // Style: boxShadowDark
  /**
   * Object that represents the CSS styles for a dark box shadow.
   */
  boxShadowDark: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },

  // Style: outlineNone
  /**
   * Object that represents the CSS styles for removing the outline.
   */
  outlineNone: {
    outline: "none",
  },

  // Style: pointer
  /**
   * Object that represents the CSS styles for setting the cursor to a pointer.
   */
  pointer: {
    cursor: "pointer",
  },

  // Style: noPointerEvents
  /**
   * Object that represents the CSS styles for disabling pointer events.
   */
  noPointerEvents: {
    pointerEvents: "none",
  },

  // Style: fullWidthHeight
  /**
   * Object that represents the CSS styles for setting both width and height to 100%.
   */
  fullWidthHeight: {
    width: "100%",
    height: "100%",
  },

  // Style: transitionAll
  /**
   * Function that returns CSS styles for adding a transition effect to all properties.
   * @param {number} duration - The duration of the transition.
   * @param {number} timingFunction - The timing function of the transition.
   * @returns {Object} CSS styles for the transition effect on all properties.
   */
  transitionAll: (duration, timingFunction) => {
    return {
      transition: `all ${duration}s ${timingFunction}s`,
    };
  },

  // Style: overflowAuto
  /**
   * Object that represents the CSS styles for enabling auto overflow.
   */
  overflowAuto: {
    overflow: "auto",
  },

  // Style: overflowScroll
  /**
   * Object that represents the CSS styles for enabling scroll overflow.
   */
  overflowScroll: {
    overflow: "scroll",
  },

  // Style: overflowVisible
  /**
   * Object that represents the CSS styles for making overflow content visible.
   */
  overflowVisible: {
    overflow: "visible",
  },

  // Style: overflowXHidden
  /**
   * Object that represents the CSS styles for hiding horizontal overflow content.
   */
  overflowXHidden: {
    overflowX: "hidden",
  },

  // Style: overflowYHidden
  /**
   * Object that represents the CSS styles for hiding vertical overflow content.
   */
  overflowYHidden: {
    overflowY: "hidden",
  },

  // Style: gradientBg
  /**
   * Function that returns CSS styles for creating a gradient background.
   * @param {string} startColor - The starting color of the gradient.
   * @param {string} endColor - The ending color of the gradient.
   * @returns {Object} CSS styles for the gradient background.
   */
  gradientBg: (startColor, endColor) => {
    return {
      background: `linear-gradient(${startColor}, ${endColor})`,
    };
  },

  // Style: bgImage
  /**
   * Function that returns CSS styles for setting a background image.
   * @param {string} url - The URL of the image.
   * @param {string} size - The size of the background image.
   * @param {string} position - The position of the background image.
   * @param {string} repeat - The repeat behavior of the background image.
   * @returns {Object} CSS styles for the background image.
   */
  bgImage: (url, size, position, repeat) => {
    return {
      background: `url(${url}) ${size} ${position} ${repeat}`,
    };
  },
  // Style: flexColumn
  /**
   * Object that represents the CSS styles for a flex container with a column layout.
   */
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },

  // Style: flexRow
  /**
   * Object that represents the CSS styles for a flex container with a row layout.
   */
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },

  // Style: flexWrap
  /**
   * Object that represents the CSS styles for allowing flex items to wrap.
   */
  flexWrap: {
    flexWrap: "wrap",
  },

  // Style: flexNoWrap
  /**
   * Object that represents the CSS styles for preventing flex items from wrapping.
   */
  flexNoWrap: {
    flexWrap: "nowrap",
  },

  // Style: flexGrow
  /**
   * Function that returns CSS styles for setting the flex grow factor.
   * @param {number} value - The flex grow factor.
   * @returns {Object} CSS styles for the flex grow factor.
   */
  flexGrow: (value) => {
    return {
      flexGrow: value,
    };
  },

  // Style: flexShrink
  /**
   * Function that returns CSS styles for setting the flex shrink factor.
   * @param {number} value - The flex shrink factor.
   * @returns {Object} CSS styles for the flex shrink factor.
   */
  flexShrink: (value) => {
    return {
      flexShrink: value,
    };
  },

  // Style: flexBasis
  /**
   * Function that returns CSS styles for setting the flex basis.
   * @param {number} value - The flex basis.
   * @returns {Object} CSS styles for the flex basis.
   */
  flexBasisEm: (value)=>{
    return {
      flexBasis: `${value}em`,
    };
  },
  /**
   * Function that returns CSS styles for setting the flex basis.
   * @param {number} value - The flex basis.
   * @returns {Object} CSS styles for the flex basis.
   */
  flexBasisPerc: (value)=>{
    return {
      flexBasis: `${value}%`,
    };
  },
  /**
   * Function that returns CSS styles for setting the flex basis.
   * @param {number} value - The flex basis.
   * @returns {Object} CSS styles for the flex basis.
   */
  flexBasisPx: (value)=>{
    return {
      flexBasis: `${value}px`,
    };
  },
  //style: flexBasisAuto
  /**
   * Object containing CSS properties for the flex basis automatically
   */
  flexBasisAuto: {
      flexBasis: "auto",
  },
  // style : flexBasisMaxC
  /**
   * Object containing CSS properties for the flex basis maximum content
   */
  flexBasisMaxC: {
    flexBasis: "max-content",
  },
  // style : flexBasisMinC
  /**
   * Object containing CSS properties for the flex basis minimum content
   */
  flexBasisMinC: {
    flexBasis: "min-content",
  },
  // style: flexBasisFitC
  /**
   * Object containing CSS properties for the flex basis fit content
   */
  flexBasisFitC: {
    flexBasis: "fit-content",
  },
  // style: flexBasisC
  /**
   * Object containing CSS properties for the flex basis content
   */
  flexBasisC: {
    flexBasis: "content",
  },
  // Style: flexCenter
  /**
   * Object that represents the CSS styles for centering content in a flex container.
   */
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // Style: letterSpacing
  /**
   * Function that returns CSS styles for setting the letter spacing.
   * @param {number} value - The letter spacing value.
   * @returns {Object} CSS styles for the letter spacing.
   */
  letterSpacing: (value) => {
    return {
      letterSpacing: `${value}px`,
    };
  },

  // Style: wordSpacing
  /**
   * Function that returns CSS styles for setting the word spacing.
   * @param {number} value - The word spacing value.
   * @returns {Object} CSS styles for the word spacing.
   */
  wordSpacing: (value) => {
    return {
      wordSpacing: `${value}px`,
    };
  },

  // Style: textAlignJustify
  /**
   * Object that represents the CSS styles for justifying text.
   */
  textAlignJustify: {
    textAlign: "justify",
  },

  // Style: overflowEllipsis
  /**
   * Object that represents the CSS styles for truncating text with an ellipsis.
   */
  overflowEllipsis: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  // Style: cursorNotAllowed
  /**
   * Object that represents the CSS styles for setting the cursor to not-allowed.
   */
  cursorNotAllowed: {
    cursor: "not-allowed",
  },

  // Style: cursorGrab
  /**
   * Object that represents the CSS styles for setting the cursor to grab.
   */
  cursorGrab: {
    cursor: "grab",
  },

  // Style: cursorGrabbing
  /**
   * Object that represents the CSS styles for setting the cursor to grabbing.
   */
  cursorGrabbing: {
    cursor: "grabbing",
  },

  // Style: opacity
  /**
   * Function that returns CSS styles for setting the opacity.
   * @param {number} value - The opacity value.
   * @returns {Object} CSS styles for the opacity.
   */
  opacity: (value) => {
    return {
      opacity: value,
    };
  },

  // Style: filterBlur
  /**
   * Function that returns CSS styles for applying a blur filter.
   * @param {number} value - The blur value.
   * @returns {Object} CSS styles for the blur filter.
   */
  filterBlur: (value) => {
    return {
      filter: `blur(${value}px)`,
    };
  },

  // Style: filterBrightness
  /**
   * Function that returns CSS styles for adjusting the brightness.
   * @param {number} value - The brightness value.
   * @returns {Object} CSS styles for the brightness adjustment.
   */
  filterBrightness: (value) => {
    return {
      filter: `brightness(${value}%)`,
    };
  },

  // Style: filterContrast
  /**
   * Function that returns CSS styles for adjusting the contrast.
   * @param {number} value - The contrast value.
   * @returns {Object} CSS styles for the contrast adjustment.
   */
  filterContrast: (value) => {
    return {
      filter: `contrast(${value}%)`,
    };
  },

  // Style: filterGrayscale
  /**
   * Function that returns CSS styles for applying grayscale.
   * @param {number} value - The grayscale value.
   * @returns {Object} CSS styles for the grayscale effect.
   */
  filterGrayscale: (value) => {
    return {
      filter: `grayscale(${value}%)`,
    };
  },

  // Style: filterHueRotate
  /**
   * Function that returns CSS styles for rotating the hue.
   * @param {number} value - The hue rotation value.
   * @returns {Object} CSS styles for the hue rotation.
   */
  filterHueRotate: (value) => {
    return {
      filter: `hue-rotate(${value}deg)`,
    };
  },

  // Style: filterInvert
  /**
   * Function that returns CSS styles for inverting colors.
   * @param {number} value - The invert value.
   * @returns {Object} CSS styles for the color inversion.
   */
  filterInvert: (value) => {
    return {
      filter: `invert(${value}%)`,
    };
  },

  // Style: filterOpacity
  /**
   * Function that returns CSS styles for adjusting the opacity.
   * @param {number} value - The opacity value.
   * @returns {Object} CSS styles for the opacity adjustment.
   */
  filterOpacity: (value) => {
    return {
      filter: `opacity(${value}%)`,
    };
  },

  // Style: filterSaturate
  /**
   * Function that returns CSS styles for saturating colors.
   * @param {number} value - The saturation value.
   * @returns {Object} CSS styles for the color saturation.
   */
  filterSaturate: (value) => {
    return {
      filter: `saturate(${value}%)`,
    };
  },

  // Style: filterSepia
  /**
   * Function that returns CSS styles for applying sepia.
   * @param {number} value - The sepia value.
   * @returns {Object} CSS styles for the sepia effect.
   */
  filterSepia: (value) => {
    return {
      filter: `sepia(${value}%)`,
    };
  },
  // Style: bgPrimaryHover
  /**
   * Function that returns styles for a primary hover state.
   * @returns {Object} Object containing styles and a ref for the primary hover state.
   * @property {Object} stylePrimaryHover - Styles for the primary hover state.
   * @property {string} stylePrimaryHover.backgroundColor - Background color for the primary hover state.
   * @property {string} stylePrimaryHover.color - Text color for the primary hover state.
   * @property {Object} refPrimaryHover - Reference for the primary hover state.
   */
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

  // Style: bgSuccessHover
  /**
   * Function that returns styles for a success hover state.
   * @returns {Object} Object containing styles and a ref for the success hover state.
   * @property {Object} styleSuccessHover - Styles for the success hover state.
   * @property {string} styleSuccessHover.backgroundColor - Background color for the success hover state.
   * @property {string} styleSuccessHover.color - Text color for the success hover state.
   * @property {Object} refSuccessHover - Reference for the success hover state.
   */
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
  // Style: bgDangerHover
  /**
   * Function that returns styles for a danger hover state.
   * @returns {Object} Object containing styles and a ref for the danger hover state.
   * @property {Object} styleDangerHover - Styles for the danger hover state.
   * @property {string} styleDangerHover.backgroundColor - Background color for the danger hover state.
   * @property {string} styleDangerHover.color - Text color for the danger hover state.
   * @property {Object} refDangerHover - Reference for the danger hover state.
   */
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
  // Style: bgWarningHover
  /**
   * Function that returns styles for a warning hover state.
   * @returns {Object} Object containing styles and a ref for the warning hover state.
   * @property {Object} styleWarningHover - Styles for the warning hover state.
   * @property {string} styleWarningHover.backgroundColor - Background color for the warning hover state.
   * @property {string} styleWarningHover.color - Text color for the warning hover state.
   * @property {Object} refWarningHover - Reference for the warning hover state.
   */
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
  // Style: bgInfoHover
  /**
   * Function that returns styles for an info hover state.
   * @returns {Object} Object containing styles and a ref for the info hover state.
   * @property {Object} styleInfoHover - Styles for the info hover state.
   * @property {string} styleInfoHover.backgroundColor - Background color for the info hover state.
   * @property {string} styleInfoHover.color - Text color for the info hover state.
   * @property {Object} refInfoHover - Reference for the info hover state.
   */
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
  // Style: bgSecondaryHover
  /**
   * Function that returns styles for a secondary hover state.
   * @returns {Object} Object containing styles and a ref for the secondary hover state.
   * @property {Object} styleSecondaryHover - Styles for the secondary hover state.
   * @property {string} styleSecondaryHover.backgroundColor - Background color for the secondary hover state.
   * @property {string} styleSecondaryHover.color - Text color for the secondary hover state.
   * @property {Object} refSecondaryHover - Reference for the secondary hover state.
   */
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
  // Style: bgLightHover
  /**
   * Function that returns styles for a light hover state.
   * @returns {Object} Object containing styles and a ref for the light hover state.
   * @property {Object} styleLightHover - Styles for the light hover state.
   * @property {string} styleLightHover.backgroundColor - Background color for the light hover state.
   * @property {string} styleLightHover.color - Text color for the light hover state.
   * @property {Object} refLightHover - Reference for the light hover state.
   */
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
  // Style: bgDarkHover
  /**
   * Function that returns styles for a dark hover state.
   * @returns {Object} Object containing styles and a ref for the dark hover state.
   * @property {Object} styleDarkHover - Styles for the dark hover state.
   * @property {string} styleDarkHover.backgroundColor - Background color for the dark hover state.
   * @property {string} styleDarkHover.color - Text color for the dark hover state.
   * @property {Object} refDarkHover - Reference for the dark hover state.
   */
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
  // Style: bgWhiteHover
  /**
   * Function that returns styles for a white hover state.
   * @returns {Object} Object containing styles and a ref for the white hover state.
   * @property {Object} styleWhiteHover - Styles for the white hover state.
   * @property {string} styleWhiteHover.backgroundColor - Background color for the white hover state.
   * @property {string} styleWhiteHover.color - Text color for the white hover state.
   * @property {Object} refWhiteHover - Reference for the white hover state.
   */
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
  // Style: bgTransparentHover
  /**
   * Function that returns styles for a transparent hover state.
   * @returns {Object} Object containing styles and a ref for the transparent hover state.
   * @property {Object} styleTransparentHover - Styles for the transparent hover state.
   * @property {string} styleTransparentHover.backgroundColor - Background color for the transparent hover state.
   * @property {string} styleTransparentHover.color - Text color for the transparent hover state.
   * @property {Object} refTransparentHover - Reference for the transparent hover state.
   */
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
  // Style: bgPrimaryActive
  /**
   * Function that returns styles for a primary active state.
   * @returns {Object} Object containing styles and a ref for the primary active state.
   * @property {Object} stylePrimaryActive - Styles for the primary active state.
   * @property {string} stylePrimaryActive.backgroundColor - Background color for the primary active state.
   * @property {string} stylePrimaryActive.color - Text color for the primary active state.
   * @property {Object} refPrimaryActive - Reference for the primary active state.
   */
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
  // Style: bgSuccessActive
  /**
   * Function that returns styles for a success active state.
   * @returns {Object} Object containing styles and a ref for the success active state.
   * @property {Object} styleSuccessActive - Styles for the success active state.
   * @property {string} styleSuccessActive.backgroundColor - Background color for the success active state.
   * @property {string} styleSuccessActive.color - Text color for the success active state.
   * @property {Object} refSuccessActive - Reference for the success active state.
   */
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
  // Style: bgDangerActive
  /**
   * Function that returns styles for a danger active state.
   * @returns {Object} Object containing styles and a ref for the danger active state.
   * @property {Object} styleDangerActive - Styles for the danger active state.
   * @property {string} styleDangerActive.backgroundColor - Background color for the danger active state.
   * @property {string} styleDangerActive.color - Text color for the danger active state.
   * @property {Object} refDangerActive - Reference for the danger active state.
   */
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
  // Style: bgWarningActive
  /**
   * Function that returns styles for an active state with a warning background.
   * @returns {Object} Object containing styles and a ref for the active state.
   * @property {Object} styleWarningActive - Styles for the active state with a warning background.
   * @property {string} styleWarningActive.backgroundColor - Background color for the active state.
   * @property {string} styleWarningActive.color - Text color for the active state.
   * @property {Object} refWarningActive - Reference for the active state.
   */
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
  // Style: bgInfoActive
  /**
   * Function that returns styles for an active state with an info background.
   * @returns {Object} Object containing styles and a ref for the active state.
   * @property {Object} styleInfoActive - Styles for the active state with an info background.
   * @property {string} styleInfoActive.backgroundColor - Background color for the active state.
   * @property {string} styleInfoActive.color - Text color for the active state.
   * @property {Object} refInfoActive - Reference for the active state.
   */
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

  // Style: bgSecondaryActive
  /**
   * Function that returns styles for an active state with a secondary background.
   * @returns {Object} Object containing styles and a ref for the active state.
   * @property {Object} styleSecondaryActive - Styles for the active state with a secondary background.
   * @property {string} styleSecondaryActive.backgroundColor - Background color for the active state.
   * @property {string} styleSecondaryActive.color - Text color for the active state.
   * @property {Object} refSecondaryActive - Reference for the active state.
   */
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
  // Style: bgLightActive
  /**
   * Function that returns styles for an active state with a light background.
   * @returns {Object} Object containing styles and a ref for the active state.
   * @property {Object} styleLightActive - Styles for the active state with a light background.
   * @property {string} styleLightActive.backgroundColor - Background color for the active state.
   * @property {string} styleLightActive.color - Text color for the active state.
   * @property {Object} refLightActive - Reference for the active state.
   */
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

  // Style: bgDarkActive
  /**
   * Function that returns styles for an active state with a dark background.
   * @returns {Object} Object containing styles and a ref for the active state.
   * @property {Object} styleDarkActive - Styles for the active state with a dark background.
   * @property {string} styleDarkActive.backgroundColor - Background color for the active state.
   * @property {string} styleDarkActive.color - Text color for the active state.
   * @property {Object} refDarkActive - Reference for the active state.
   */
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
  // Style: persWidth
  /**
   * Function that returns CSS styles for setting width as a percentage.
   * @param {number} value - The percentage width value.
   * @returns {Object} CSS styles for setting width as a percentage.
   */
  persWidth: (value) => {
    return {
      width: `${value}%`,
    };
  },
  // style: persWH
  /**
   * Function that returns CSS styles for setting width and height as a percentage.
   * @param {number} value - The percentage width and height value.
   * @returns {Object} CSS styles for setting width and height as a percentage.
   */
  persWH: (value) => {
    return {
      width: `${value}%`,
      height: `${value}%`,
    };
  },
  // Style: persHeight
  /**
   * Function that returns CSS styles for setting height as a percentage.
   * @param {number} value - The percentage height value.
   * @returns {Object} CSS styles for setting height as a percentage.
   */
  persHeight: (value) => {
    return {
      height: `${value}%`,
    };
  },
  // style: pxWidth
  /**
   * Function that returns CSS styles for setting width in pixels.
   * @param {number} value - The width value in pixels.
   * @returns {Object} CSS styles for setting width in pixels.
   */
  pxWidth: (value) => {
    return {
      width: `${value}px`,
    };
  },
  // style: pxHeight
  /**
   * Function that returns CSS styles for setting height in pixels.
   * @param {number} value - The height value in pixels.
   * @returns {Object} CSS styles for setting height in pixels.
   */
  pxHeight: (value) => {
    return {
      height: `${value}px`,
    };
  },
  // style: pxWH
  /**
   * Function that returns CSS styles for setting width and height in pixels.
   * @param {number} value - The width and height values in pixels.
   * @returns {Object} CSS styles for setting width and height in pixels.
   */
  pxWH: (value) => {
    return {
      width: `${value}px`,
      height: `${value}px`,
    };
  },
  // style: dvhHeight
  /**
   * Function that returns CSS styles for setting height in dynamic viewport height units (dvh).
   * @param {number} value - The height value in dynamic viewport height units.
   * @returns {Object} CSS styles for setting height in dynamic viewport height units.
   */
  dvhHeight: (value) => {
    return {
      height: `${value}dvh`,
    };
  },
  // style: dvhWidth
  /**
   * Function that returns CSS styles for setting width in dynamic viewport width units (dvw).
   * @param {number} value - The width value in dynamic viewport width units.
   * @returns {Object} CSS styles for setting width in dynamic viewport width units.
   */
  dvwWidth: (value) => {
    return {
      width: `${value}dvw`,
    };
  },
  // style: dvWH
  /**
   * Function that returns CSS styles for setting width and height in dynamic viewport units (dvw and dvh).
   * @param {number} value - The width and height values in dynamic viewport units.
   * @returns {Object} CSS styles for setting width and height in dynamic viewport units.
   */
  dvWH: (value) => {
    return {
      width: `${value}dvw`,
      height: `${value}dvh`,
    };
  },
  // style: fitContentW
  /**
   * Object that represents the CSS styles for setting the width to fit content.
   */
  fitContentW: {
    width: "fit-content",
  },
  // style: fitContentH
  /**
   * Object that represents the CSS styles for setting the height to fit content.
   */
  fitContentH: {
    height: "fit-content",
  },
  // style: fit
  /**
   * Object that represents the CSS styles for setting both width and height to fit content.
   */
  fitContentHW: {
    width: "fit-content",
    height: "fit-content",
  },
  // style: maxWidthPx
  /**
   * Function that returns CSS styles for setting the maximum width in pixels.
   * @param {number} value - The maximum width value.
   * @returns {Object} CSS styles for setting the maximum width.
   */
  maxWidthPx: (value) => {
    return {
      width: "100%",
      maxWidth: `${value}px`,
    };
  },
  // style: maxHeightPx
  /**
   * Function that returns CSS styles for setting the maximum height in pixels.
   * @param {number} value - The maximum height value.
   * @returns {Object} CSS styles for setting the maximum height.
   */
  maxHeightPx: (value) => {
    return {
      width: "100%",
      maxHeight: `${value}px`,
    };
  },
  // style: maxWHPx
  /**
   * Function that returns CSS styles for setting the maximum width and height in pixels.
   * @param {number} value - The maximum width and height value.
   * @returns {Object} CSS styles for setting the maximum width and height.
   */
  maxWHPx: (value) => {
    return {
      width: "100%",
      maxWidth: `${value}px`,
      maxHeight: `${value}px`,
    };
  },
  // style: minWidthPx
  /**
   * Function that returns CSS styles for setting the minimum width in pixels.
   * @param {number} value - The minimum width value.
   * @returns {Object} CSS styles for setting the minimum width.
   */
  minWidthPx: (value) => {
    return {
      width: "100%",
      minWidth: `${value}px`,
    };
  },
  // style: minHeightPx
  /**
   * Function that returns CSS styles for setting the minimum height in pixels.
   * @param {number} value - The minimum height value.
   * @returns {Object} CSS styles for setting the minimum height.
  */
  minHeightPx: (value) => {
   return {
      width: "100%",
      minHeight: `${value}px`,
    };
  },
  // style: minWHPx
  /**
   * Function that returns CSS styles for setting the minimum width and height in pixels.
   * @param {number} value - The minimum width and height value.
   * @returns {Object} CSS styles for setting the minimum width and height.
   */
  minWHPx: (value) => {
    return {
      width: "100%",
      minWidth: `${value}px`,
      minHeight: `${value}px`,
    };
  },
  // style: minWidthPers
  /**
   * Function that returns CSS styles for setting the minimum width as a percentage.
   * @param {number} value - The minimum width as a percentage.
   * @returns {Object} CSS styles for setting the minimum width as a percentage.
   */
  minHeightPers: (value) => {
    return {
      width: "100%",
      minWidth: `${value}%`,
    };
  },
  // style: minHeightPers
  /**
   * Function that returns CSS styles for setting the minimum height as a percentage.
   * @param {number} value - The minimum height as a percentage.
   * @returns {Object} CSS styles for setting the minimum height as a percentage.
   */
  minWidthPers: (value) => {
    return {
      width: "100%",
      minHeight: `${value}%`,
    };
  },
  // style: minWHPers
  /**
   * Function that returns CSS styles for setting the minimum width and height as a percentage.
   * @param {number} value - The minimum width and height as a percentage.
   * @returns {Object} CSS styles for setting the minimum width and height as a percentage.
  */
  minWHPers: (value) => {
    return {
      width: "100%",
      minWidth: `${value}%`,
      minHeight: `${value}%`,
    };
  },
  // style: maxWidthPers
  /**
   * Function that returns CSS styles for setting the maximum width as a percentage.
   * @param {number} value - The maximum width as a percentage.
   * @returns {Object} CSS styles for setting the maximum width as a percentage.
   */

  maxWidthPers: (value) => {
    return {
      width: "100%",
      maxWidth: `${value}%`,
    };
  },
  // style: maxHeightPers
  /**
   * Function that returns CSS styles for setting the maximum height as a percentage.
   * @param {number} value - The maximum height as a percentage.
   * @returns {Object} CSS styles for setting the maximum height as a percentage.
   */
   maxHeightPers: (value) => {
    return {
      width: "100%",
      maxHeight: `${value}%`,
    };
  },
  // style: maxWHPers
  /**
   * Function that returns CSS styles for setting the maximum width and height as a percentage.
   * @param {number} value - The maximum width and height as a percentage.
   * @returns {Object} CSS styles for setting the maximum width and height as a percentage.
   */
  maxWHPers: (value) => {
    return {
      width: "100%",
      maxWidth: `${value}%`,
      maxHeight: `${value}%`,
    };
  },
  // style: gridSystem
  /**
   * Generates styles for a grid system with a specified number of columns and gap.
   * @param {number} [numColumns=1] - Number of columns in the grid.
   * @param {number} [gapValue] - Gap between grid items.
   * @returns {GridSystem} Styles for the grid system.
   */
  gridSystem : (numColumns = 1 , gapValue) => {

    return {
      container: {
        display: "grid",
        gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
        gap: gapValue ? `${gapValue}px` : "0px",
      },
      /**
      * Generates styles for a grid column.
      * @param {number} span - Number of columns to span.
      * @param {number} [offset=0] - Number of columns to offset the column by.
      * @throws Will throw an error if invalid span or offset values are provided.
      * @returns {Object} Styles for the grid column.
      */
      column: (span, offset = 0) => {
        if (span < 1 || span > 12 || offset < 0 || offset > 11) {
          throw Error("Invalid column span or offset values");
        }
    
        return {
          gridColumn: `span ${span} / span ${span}`,
          marginLeft: offset > 0 ? `calc(${offset} * 1fr + ${offset * 16}px)` : undefined,
        };
      },
    }
  }
};

/**
 * Utility function for handling styles based on hover state.
 *
 * @param {Object} style - The base style object to be applied.
 * @returns {Object} An object containing the reference and hover-based style.
 */

const styleHover = (...style) => {
  const { ref, isHover } = useHover();
    // If the base style is empty, return an empty style object.
  if (Object.keys(style).length === 0) {    
    return {
      refOfHover: ref,
      styleOfHover: {},
    }
  }
    // Return the reference and style object based on the hover state.

  return {
    refOfHover: ref,
    styleOfHover: isHover ? mergeStyles(...style) : {},
  }
}


/**
 * Utility function for handling styles based on the active state.
 *
 * @param {Array of Object} style - The base style object to be applied.
 * @returns {Object} An object containing the reference and active state-based style.
 */

const styleActive = (...style) => {
  const { ref, isActive } = useActive();
  // If the base style is empty, return an empty style object.
  if (Object.keys(style).length === 0) {    
    return {
      refOfActive: ref,
      styleOfActive: {},
    }
  }
  // Return the reference and style object based on the active state.
  return {
    refOfActive: ref,
    styleOfActive: isActive ? mergeStyles(...style) : {},
  }
}

/**
 * Function that returns a new object that is the combination of two or more existing objects.
 * @param  {...Object} objects - The objects to merge.
 * @returns {Object} The merged object.
 */

const mergeStyles = (...args) => {
  return Object.assign({}, ...args);
};

export { styles, mergeStyles , styleHover , styleActive };
