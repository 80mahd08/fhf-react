import { useHover } from ".";
import { isValidColor, isValidSize, isValidBorderStyle , isValidTextDecoration , isValidTextTransform , isValidJContent , isValidAContent } from "./tools/validation"

const styles = {
  // Positioning
  centerPosition: {
    /**
     * CSS styles for centering an element using absolute positioning and translate.
     * @type {Object}
     */
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },

  // Text Alignment
  textCenter: {
    /**
     * CSS styles for centering text.
     * @type {Object}
     */
    textAlign: "center",
  },
  textLeft: {
    /**
     * CSS styles for left-aligning text.
     * @type {Object}
     */
    textAlign: "left",
  },
  textRight: {
    /**
     * CSS styles for right-aligning text.
     * @type {Object}
     */
    textAlign: "right",
  },

  // Floats
  floatLeft: {
    /**
     * CSS styles for floating an element to the left.
     * @type {Object}
     */
    float: "left",
  },
  floatRight: {
    /**
     * CSS styles for floating an element to the right.
     * @type {Object}
     */
    float: "right",
  },

  // Flexbox
  centerContentFlex: {
    /**
     * CSS styles for centering content using flexbox.
     * @type {Object}
     */
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dispFlex: {
    /**
     * CSS styles for displaying an element as a flex container.
     * @type {Object}
     */
    display: "flex",
  },
  dispInlineFlex: {
    /**
     * CSS styles for displaying an element as an inline flex container.
     * @type {Object}
     */
    display: "inline-flex",
  },

  // Display
  dispNone: {
    /**
     * CSS styles for hiding an element.
     * @type {Object}
     */
    display: "none",
  },
  dispBlock: {
    /**
     * CSS styles for displaying an element as a block.
     * @type {Object}
     */
    display: "block",
  },
  dispInline: {
    /**
     * CSS styles for displaying an element as an inline element.
     * @type {Object}
     */
    display: "inline",
  },
  dispInlineBlock: {
    /**
     * CSS styles for displaying an element as an inline block.
     * @type {Object}
     */
    display: "inline-block",
  },
  dispTable: {
    /**
     * CSS styles for displaying an element as a table.
     * @type {Object}
     */
    display: "table",
  },
  dispTableRow: {
    /**
     * CSS styles for displaying an element as a table row.
     * @type {Object}
     */
    display: "table-row",
  },
  dispTableCell: {
    /**
     * CSS styles for displaying an element as a table cell.
     * @type {Object}
     */
    display: "table-cell",
  },
  dispGrid: {
    /**
     * CSS styles for displaying an element as a grid container.
     * @type {Object}
     */
    display: "grid",
  },
  dispInlineGrid: {
    /**
     * CSS styles for displaying an element as an inline grid container.
     * @type {Object}
     */
    display: "inline-grid",
  },

  // Text and Background Styles
  fontColor: (color) => {
    /**
     * Function that returns CSS styles for setting the font color.
     * @param {string} color - The color value.
     * @returns {Object} CSS styles for font color.
     * @throws {Error} Throws an error if the color value is invalid.
     */
    if (isValidColor(color)) {
      return {
        color: color,
      };
    } else {
      throw new Error("Invalid color value in fontColor");
    }
  },
  bg: (color) => {
    /**
     * Function that returns CSS styles for setting the background color.
     * @param {string} color - The color value.
     * @returns {Object} CSS styles for background color.
     * @throws {Error} Throws an error if the color value is invalid.
     */
    if (isValidColor(color)) {
      return {
        backgroundColor: color,
      };
    } else {
      throw new Error("Invalid color value in bg");
    }
  },
  // Border Styles
  border: (size, type, color) => {
    /**
     * Function that returns CSS styles for creating a border.
     * @param {number} size - The size of the border in pixels.
     * @param {string} type - The style of the border (e.g., solid, dashed).
     * @param {string} color - The color of the border.
     * @returns {Object} CSS styles for the border.
     * @throws {Error} Throws an error if the size, type, or color values are invalid.
     */
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
  margin: (size) => {
    /**
     * Function that returns CSS styles for setting the margin.
     * @param {number} size - The size of the margin in pixels.
     * @returns {Object} CSS styles for the margin.
     * @throws {Error} Throws an error if the size value is invalid.
     */
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in margin");
    }
    return {
      margin: `${size}px`,
    };
  },
  marginTop: (size) => {
    /**
     * Function that returns CSS styles for setting the top margin.
     * @param {number} size - The size of the top margin in pixels.
     * @returns {Object} CSS styles for the top margin.
     * @throws {Error} Throws an error if the size value is invalid.
     */
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in marginTop");
    }
    return {
      marginTop: `${size}px`,
    };
  },
  // ... (similar comments for other margin styles)

  // Padding Styles
  padding: (size) => {
    /**
     * Function that returns CSS styles for setting the padding.
     * @param {number} size - The size of the padding in pixels.
     * @returns {Object} CSS styles for the padding.
     * @throws {Error} Throws an error if the size value is invalid.
     */
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in padding");
    }
    return {
      padding: `${size}px`,
    };
  },
  // ... (similar comments for other padding styles)

  // Responsive Margin Styles
  respMargin: (size1, size2) => {
    /**
     * Function that returns responsive CSS styles for setting the margin.
     * @param {number} size1 - The minimum size of the margin in pixels.
     * @param {number} size2 - The maximum size of the margin in pixels.
     * @returns {Object} CSS styles for the responsive margin.
     * @throws {Error} Throws an error if the size1 or size2 values are invalid.
     */
    if (!isValidSize(size1) || !isValidSize(size2)) {
      throw new Error("Invalid size value in respMargin");
    }
    return {
      margin: `clamp(${size1}px, 5vw, ${size2}px)`,
    };
  },
  // Responsive Margin Styles
  respMarginTop: (size1, size2) => {
    /**
     * Function that returns responsive CSS styles for setting the top margin.
     * @param {number} size1 - The minimum size of the top margin in pixels.
     * @param {number} size2 - The maximum size of the top margin in pixels.
     * @returns {Object} CSS styles for the responsive top margin.
     * @throws {Error} Throws an error if the size1 or size2 values are invalid.
     */
    if (!isValidSize(size1) || !isValidSize(size2)) {
      throw new Error("Invalid size value in respMarginTop");
    }
    return {
      marginTop: `clamp(${size1}px, 5vw, ${size2}px)`,
    };
  },
  respMarginLeft: (size1, size2) => {
    /**
     * Function that returns responsive CSS styles for setting the left margin.
     * @param {number} size1 - The minimum size of the left margin in pixels.
     * @param {number} size2 - The maximum size of the left margin in pixels.
     * @returns {Object} CSS styles for the responsive left margin.
     * @throws {Error} Throws an error if the size1 or size2 values are invalid.
     */
    if (!isValidSize(size1) || !isValidSize(size2)) {
      throw new Error("Invalid size value in respMarginLeft");
    }
    return {
      marginLeft: `clamp(${size1}px, 5vw, ${size2}px)`,
    };
  },
  respMarginRight: (size1, size2) => {
    /**
     * Function that returns responsive CSS styles for setting the right margin.
     * @param {number} size1 - The minimum size of the right margin in pixels.
     * @param {number} size2 - The maximum size of the right margin in pixels.
     * @returns {Object} CSS styles for the responsive right margin.
     * @throws {Error} Throws an error if the size1 or size2 values are invalid.
     */
    if (!isValidSize(size1) || !isValidSize(size2)) {
      throw new Error("Invalid size value in respMarginRight");
    }
    return {
      marginRight: `clamp(${size1}px, 5vw, ${size2}px)`,
    };
  },
  respMarginBottom: (size1, size2) => {
    /**
     * Function that returns responsive CSS styles for setting the bottom margin.
     * @param {number} size1 - The minimum size of the bottom margin in pixels.
     * @param {number} size2 - The maximum size of the bottom margin in pixels.
     * @returns {Object} CSS styles for the responsive bottom margin.
     * @throws {Error} Throws an error if the size1 or size2 values are invalid.
     */
    if (!isValidSize(size1) || !isValidSize(size2)) {
      throw new Error("Invalid size value in respMarginBottom");
    }
    return {
      marginBottom: `clamp(${size1}px, 5vw, ${size2}px)`,
    };
  },

  // Responsive Padding Styles
  respPadding: (size1, size2) => {
    /**
     * Function that returns responsive CSS styles for setting the padding.
     * @param {number} size1 - The minimum size of the padding in pixels.
     * @param {number} size2 - The maximum size of the padding in pixels.
     * @returns {Object} CSS styles for the responsive padding.
     * @throws {Error} Throws an error if the size1 or size2 values are invalid.
     */
    if (!isValidSize(size1) || !isValidSize(size2)) {
      throw new Error("Invalid size value in respPadding");
    }
    return {
      padding: `clamp(${size1}px, 5vw, ${size2}px)`,
    };
  },
  respPaddingTop: (size1, size2) => {
    /**
     * Function that returns responsive CSS styles for setting the top padding.
     * @param {number} size1 - The minimum size of the top padding in pixels.
     * @param {number} size2 - The maximum size of the top padding in pixels.
     * @returns {Object} CSS styles for the responsive top padding.
     * @throws {Error} Throws an error if the size1 or size2 values are invalid.
     */
    if (!isValidSize(size1) || !isValidSize(size2)) {
      throw new Error("Invalid size value in respPaddingTop");
    }
    return {
      paddingTop: `clamp(${size1}px, 5vw, ${size2}px)`,
    };
  },
  // Responsive Padding Styles
  respPaddingLeft: (size1, size2) => {
    /**
     * Function that returns responsive CSS styles for setting the left padding.
     * @param {number} size1 - The minimum size of the left padding in pixels.
     * @param {number} size2 - The maximum size of the left padding in pixels.
     * @returns {Object} CSS styles for the responsive left padding.
     * @throws {Error} Throws an error if the size1 or size2 values are invalid.
     */
    if (!isValidSize(size1) || !isValidSize(size2)) {
      throw new Error("Invalid size value in respPaddingLeft");
    }
    return {
      paddingLeft: `clamp(${size1}px, 5vw, ${size2}px)`,
    };
  },
  respPaddingRight: (size1, size2) => {
    /**
     * Function that returns responsive CSS styles for setting the right padding.
     * @param {number} size1 - The minimum size of the right padding in pixels.
     * @param {number} size2 - The maximum size of the right padding in pixels.
     * @returns {Object} CSS styles for the responsive right padding.
     * @throws {Error} Throws an error if the size1 or size2 values are invalid.
     */
    if (!isValidSize(size1) || !isValidSize(size2)) {
      throw new Error("Invalid size value in respPaddingRight");
    }
    return {
      paddingRight: `clamp(${size1}px, 5vw, ${size2}px)`,
    };
  },
  respPaddingBottom: (size1, size2) => {
    /**
     * Function that returns responsive CSS styles for setting the bottom padding.
     * @param {number} size1 - The minimum size of the bottom padding in pixels.
     * @param {number} size2 - The maximum size of the bottom padding in pixels.
     * @returns {Object} CSS styles for the responsive bottom padding.
     * @throws {Error} Throws an error if the size1 or size2 values are invalid.
     */
    if (!isValidSize(size1) || !isValidSize(size2)) {
      throw new Error("Invalid size value in respPaddingBottom");
    }
    return {
      paddingBottom: `clamp(${size1}px, 5vw, ${size2}px)`,
    };
  },
  // Style: marginNone
  marginNone: {
    /**
     * Object that represents the CSS styles for setting the margin to 0.
     */
    margin: 0,
  },

  // Style: paddingNone
  paddingNone: {
    /**
     * Object that represents the CSS styles for setting the padding to 0.
     */
    padding: 0,
  },

  // Style: borderNone
  borderNone: {
    /**
     * Object that represents the CSS styles for setting the border to 0.
     */
    border: 0,
  },

  // Style: borderRadiusNone
  borderRadiusNone: {
    /**
     * Object that represents the CSS styles for setting the border radius to 0.
     */
    borderRadius: 0,
  },

  // Style: boxShadowNone
  boxShadowNone: {
    /**
     * Object that represents the CSS styles for setting the box shadow to "none".
     */
    boxShadow: "none",
  },

  // Style: textShadowNone
  textShadowNone: {
    /**
     * Object that represents the CSS styles for setting the text shadow to "none".
     */
    textShadow: "none",
  },

  // Style: zIndex
  zIndex: (value) => {
    /**
     * Function that returns CSS styles for setting the z-index.
     * @param {number} value - The z-index value.
     * @returns {Object} CSS styles for the z-index.
     * @throws {Error} Throws an error if the value is invalid.
     */
    if (!isValidSize(value)) {
      throw new Error("Invalid value in zIndex");
    }
    return {
      zIndex: value,
    };
  },

  // Style: textDeco
  textDeco: (value) => {
    /**
     * Function that returns CSS styles for setting the text decoration.
     * @param {string} value - The text decoration value.
     * @returns {Object} CSS styles for the text decoration.
     * @throws {Error} Throws an error if the value is invalid.
     */
    if (!isValidTextDecoration(value)) {
      throw new Error("Invalid value in textDeco");
    }
    return {
      textDecoration: value,
    };
  },

  // Style: textTrans
  textTrans: (value) => {
    /**
     * Function that returns CSS styles for setting the text transform.
     * @param {string} value - The text transform value.
     * @returns {Object} CSS styles for the text transform.
     * @throws {Error} Throws an error if the value is invalid.
     */
    if (!isValidTextTransform(value)) {
      throw new Error("Invalid value in textTrans");
    }
    return {
      textTransform: value,
    };
  },

  // Style: transBg
  transBg: {
    /**
     * Object that represents the CSS styles for setting the background color to transparent.
     */
    backgroundColor: "transparent",
  },

  // Style: rounded
  rounded: {
    /**
     * Object that represents the CSS styles for setting the border radius to 5px.
     */
    borderRadius: "5px",
  },

  // Style: extraRounded
  extraRounded: {
    /**
     * Object that represents the CSS styles for setting the border radius to 25px.
     */
    borderRadius: "25px",
  },

  // Style: megaRounded
  megaRounded: {
    /**
     * Object that represents the CSS styles for setting the border radius to 45px.
     */
    borderRadius: "45px",
  },

  // Style: superRounded
  superRounded: {
    /**
     * Object that represents the CSS styles for setting the border radius to 65px.
     */
    borderRadius: "65px",
  },

  // Style: ultraRounded
  ultraRounded: {
    /**
     * Object that represents the CSS styles for setting the border radius to 85px.
     */
    borderRadius: "85px",
  },

  // Style: extremeRounded
  extremeRounded: {
    /**
     * Object that represents the CSS styles for setting the border radius to 105px.
     */
    borderRadius: "105px",
  },

  // Style: radicalRounded
  radicalRounded: {
    /**
     * Object that represents the CSS styles for setting the border radius to 125px.
     */
    borderRadius: "125px",
  },

  // Style: hyperRounded
  hyperRounded: {
    /**
     * Object that represents the CSS styles for setting the border radius to 145px.
     */
    borderRadius: "145px",
  },

  // Style: ultimateRounded
  ultimateRounded: {
    /**
     * Object that represents the CSS styles for setting the border radius to 165px.
     */
    borderRadius: "165px",
  },

  // Style: maxRounded
  maxRounded: {
    /**
     * Object that represents the CSS styles for setting the border radius to 185px.
     */
    borderRadius: "185px",
  },

  // Style: beyondRounded
  beyondRounded: {
    /**
     * Object that represents the CSS styles for setting the border radius to 205px.
     */
    borderRadius: "205px",
  },

  // Style: flexJContent
  flexJContent: (type) => {
    /**
     * Function that returns CSS styles for setting the justify-content property in a flex container.
     * @param {string} type - The justify-content value.
     * @returns {Object} CSS styles for the justify-content property.
     * @throws {Error} Throws an error if the value is invalid.
     */
    if (!isValidJContent(type)) {
      throw new Error("Invalid value in flexJContent");
    }
    return {
      justifyContent: type,
    };
  },

  // Style: flexAContent
  flexAContent: (type) => {
    /**
     * Function that returns CSS styles for setting the align-items property in a flex container.
     * @param {string} type - The align-items value.
     * @returns {Object} CSS styles for the align-items property.
     * @throws {Error} Throws an error if the value is invalid.
     */
    if (!isValidAContent(type)) {
      throw new Error("Invalid value in flexAContent");
    }
    return {
      alignItems: type,
    };
  },

  // Style: RespFontSize
  RespFontSize: (min, max) => ({
    /**
     * Function that returns CSS styles for setting the font size with clamped responsiveness.
     * @param {number} min - The minimum font size in pixels.
     * @param {number} max - The maximum font size in pixels.
     * @returns {Object} CSS styles for the font size with clamped responsiveness.
     */
    fontSize: `clamp(${min}px, 4vw, ${max}px)`,
  }),

  // Style: RespLineHeight
  RespLineHeight: (min, max) => ({
    /**
     * Function that returns CSS styles for setting the line height with clamped responsiveness.
     * @param {number} min - The minimum line height in pixels.
     * @param {number} max - The maximum line height in pixels.
     * @returns {Object} CSS styles for the line height with clamped responsiveness.
     */
    lineHeight: `clamp(${min}px, 4vw, ${max}px)`,
  }),

  // Style: respFontWeight
  respFontWeight: (min, max) => ({
    /**
     * Function that returns CSS styles for setting the font weight with clamped responsiveness.
     * @param {number} min - The minimum font weight.
     * @param {number} max - The maximum font weight.
     * @returns {Object} CSS styles for the font weight with clamped responsiveness.
     */
    fontWeight: `clamp(${min}, 4vw, ${max})`,
  }),
  // Style: boxShadowLight
  boxShadowLight: {
    /**
     * Object that represents the CSS styles for a light box shadow.
     */
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  // Style: textPrimary
  textPrimary: {
    /**
     * Object that represents the CSS styles for setting the primary text color.
     */
    color: "#007bff",
  },

  // Style: textSecondary
  textSecondary: {
    /**
     * Object that represents the CSS styles for setting the secondary text color.
     */
    color: "#6c757d",
  },

  // Style: bgLight
  bgLight: {
    /**
     * Object that represents the CSS styles for setting a light background color.
     */
    backgroundColor: "#f8f9fa",
  },

  // Style: roundedCircle
  roundedCircle: {
    /**
     * Object that represents the CSS styles for setting a border radius to create a rounded circle.
     */
    borderRadius: "50%",
  },
  // Style: bgPrimary
  bgPrimary: {
    /**
     * Object that represents the CSS styles for setting the primary background color with white text.
     */
    backgroundColor: "#007bff",
    color: "#fff",
  },

  // Style: bgSuccess
  bgSuccess: {
    /**
     * Object that represents the CSS styles for setting the success background color with white text.
     */
    backgroundColor: "#28a745",
    color: "#fff",
  },

  // Style: bgDanger
  bgDanger: {
    /**
     * Object that represents the CSS styles for setting the danger background color with white text.
     */
    backgroundColor: "#dc3545",
    color: "#fff",
  },

  // Style: textUppercase
  textUppercase: {
    /**
     * Object that represents the CSS styles for transforming text to uppercase.
     */
    textTransform: "uppercase",
  },

  // Style: textBold
  textBold: {
    /**
     * Object that represents the CSS styles for setting text to bold.
     */
    fontWeight: "bold",
  },
  // Style: positionFixed
  positionFixed: {
    /**
     * Object that represents the CSS styles for setting the position to fixed.
     */
    position: "fixed",
  },

  // Style: fullWidth
  fullWidth: {
    /**
     * Object that represents the CSS styles for setting the width to 100%.
     */
    width: "100%",
  },

  // Style: fullHeight
  fullHeight: {
    /**
     * Object that represents the CSS styles for setting the height to 100%.
     */
    height: "100%",
  },

  // Style: overflowHidden
  overflowHidden: {
    /**
     * Object that represents the CSS styles for hiding overflow content.
     */
    overflow: "hidden",
  },
  // Style: positionAbsolute
  positionAbsolute: {
    /**
     * Object that represents the CSS styles for setting the position to absolute.
     */
    position: "absolute",
  },
  // Style: positionRelative
  positionRelative: {
    /**
     * Object that represents the CSS styles for setting the position to relative.
     */
    position: "relative",
  },
  // Style: positionSticky
  positionSticky: {
    /**
     * Object that represents the CSS styles for setting the position to sticky.
     */
    position: "sticky",
  },
  // Style: positionStatic
  positionStatic: {
    /**
     * Object that represents the CSS styles for setting the position to static.
     */
    position: "static",
  },
  // Style: positionFixed
  positionFixed: {
    /**
     * Object that represents the CSS styles for setting the position to fixed.
     */
    position: "fixed",
  },
  // Style: transition
  transition: (property, duration, timingFunction) => {
    /**
     * Function that returns CSS styles for adding a transition effect.
     * @param {string} property - The CSS property to transition.
     * @param {string} duration - The duration of the transition.
     * @param {string} timingFunction - The timing function of the transition.
     * @returns {Object} CSS styles for the transition effect.
     */
    return {
      transition: `${property} ${duration} ${timingFunction}`,
    };
  },

  // Style: rotate
  rotate: (degree) => {
    /**
     * Function that returns CSS styles for rotating an element.
     * @param {number} degree - The degree of rotation.
     * @returns {Object} CSS styles for the rotation.
     */
    return {
      transform: `rotate(${degree}deg)`,
    };
  },

  // Style: scale
  scale: (factor) => {
    /**
     * Function that returns CSS styles for scaling an element.
     * @param {number} factor - The scaling factor.
     * @returns {Object} CSS styles for the scaling.
     */
    return {
      transform: `scale(${factor})`,
    };
  },

  // Style: boxShadowDark
  boxShadowDark: {
    /**
     * Object that represents the CSS styles for a dark box shadow.
     */
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },

  // Style: outlineNone
  outlineNone: {
    /**
     * Object that represents the CSS styles for removing the outline.
     */
    outline: "none",
  },

  // Style: pointer
  pointer: {
    /**
     * Object that represents the CSS styles for setting the cursor to a pointer.
     */
    cursor: "pointer",
  },

  // Style: noPointerEvents
  noPointerEvents: {
    /**
     * Object that represents the CSS styles for disabling pointer events.
     */
    pointerEvents: "none",
  },

  // Style: fullWidthHeight
  fullWidthHeight: {
    /**
     * Object that represents the CSS styles for setting both width and height to 100%.
     */
    width: "100%",
    height: "100%",
  },

  // Style: transitionAll
  transitionAll: (duration, timingFunction) => {
    /**
     * Function that returns CSS styles for adding a transition effect to all properties.
     * @param {string} duration - The duration of the transition.
     * @param {string} timingFunction - The timing function of the transition.
     * @returns {Object} CSS styles for the transition effect on all properties.
     */
    return {
      transition: `all ${duration} ${timingFunction}`,
    };
  },

  // Style: overflowAuto
  overflowAuto: {
    /**
     * Object that represents the CSS styles for enabling auto overflow.
     */
    overflow: "auto",
  },

  // Style: overflowScroll
  overflowScroll: {
    /**
     * Object that represents the CSS styles for enabling scroll overflow.
     */
    overflow: "scroll",
  },

  // Style: overflowVisible
  overflowVisible: {
    /**
     * Object that represents the CSS styles for making overflow content visible.
     */
    overflow: "visible",
  },

  // Style: overflowXHidden
  overflowXHidden: {
    /**
     * Object that represents the CSS styles for hiding horizontal overflow content.
     */
    overflowX: "hidden",
  },

  // Style: overflowYHidden
  overflowYHidden: {
    /**
     * Object that represents the CSS styles for hiding vertical overflow content.
     */
    overflowY: "hidden",
  },

  // Style: gradientBg
  gradientBg: (startColor, endColor) => {
    /**
     * Function that returns CSS styles for creating a gradient background.
     * @param {string} startColor - The starting color of the gradient.
     * @param {string} endColor - The ending color of the gradient.
     * @returns {Object} CSS styles for the gradient background.
     */
    return {
      background: `linear-gradient(${startColor}, ${endColor})`,
    };
  },

  // Style: bgImage
  bgImage: (url, size, position, repeat) => {
    /**
     * Function that returns CSS styles for setting a background image.
     * @param {string} url - The URL of the image.
     * @param {string} size - The size of the background image.
     * @param {string} position - The position of the background image.
     * @param {string} repeat - The repeat behavior of the background image.
     * @returns {Object} CSS styles for the background image.
     */
    return {
      background: `url(${url}) ${size} ${position} ${repeat}`,
    };
  },
  // Style: flexColumn
  flexColumn: {
    /**
     * Object that represents the CSS styles for a flex container with a column layout.
     */
    display: "flex",
    flexDirection: "column",
  },

  // Style: flexRow
  flexRow: {
    /**
     * Object that represents the CSS styles for a flex container with a row layout.
     */
    display: "flex",
    flexDirection: "row",
  },

  // Style: flexWrap
  flexWrap: {
    /**
     * Object that represents the CSS styles for allowing flex items to wrap.
     */
    flexWrap: "wrap",
  },

  // Style: flexNoWrap
  flexNoWrap: {
    /**
     * Object that represents the CSS styles for preventing flex items from wrapping.
     */
    flexWrap: "nowrap",
  },

  // Style: flexGrow
  flexGrow: (value) => {
    /**
     * Function that returns CSS styles for setting the flex grow factor.
     * @param {number} value - The flex grow factor.
     * @returns {Object} CSS styles for the flex grow factor.
     */
    return {
      flexGrow: value,
    };
  },

  // Style: flexShrink
  flexShrink: (value) => {
    /**
     * Function that returns CSS styles for setting the flex shrink factor.
     * @param {number} value - The flex shrink factor.
     * @returns {Object} CSS styles for the flex shrink factor.
     */
    return {
      flexShrink: value,
    };
  },

  // Style: flexBasis
  flexBasis: (value) => {
    /**
     * Function that returns CSS styles for setting the flex basis.
     * @param {string} value - The flex basis value.
     * @returns {Object} CSS styles for the flex basis.
     */
    return {
      flexBasis: value,
    };
  },

  // Style: flexCenter
  flexCenter: {
    /**
     * Object that represents the CSS styles for centering content in a flex container.
     */
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // Style: letterSpacing
  letterSpacing: (value) => {
    /**
     * Function that returns CSS styles for setting the letter spacing.
     * @param {string} value - The letter spacing value.
     * @returns {Object} CSS styles for the letter spacing.
     */
    return {
      letterSpacing: value,
    };
  },

  // Style: wordSpacing
  wordSpacing: (value) => {
    /**
     * Function that returns CSS styles for setting the word spacing.
     * @param {string} value - The word spacing value.
     * @returns {Object} CSS styles for the word spacing.
     */
    return {
      wordSpacing: value,
    };
  },

  // Style: textAlignJustify
  textAlignJustify: {
    /**
     * Object that represents the CSS styles for justifying text.
     */
    textAlign: "justify",
  },

  // Style: overflowEllipsis
  overflowEllipsis: {
    /**
     * Object that represents the CSS styles for truncating text with an ellipsis.
     */
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  // Style: cursorNotAllowed
  cursorNotAllowed: {
    /**
     * Object that represents the CSS styles for setting the cursor to not-allowed.
     */
    cursor: "not-allowed",
  },

  // Style: cursorGrab
  cursorGrab: {
    /**
     * Object that represents the CSS styles for setting the cursor to grab.
     */
    cursor: "grab",
  },

  // Style: cursorGrabbing
  cursorGrabbing: {
    /**
     * Object that represents the CSS styles for setting the cursor to grabbing.
     */
    cursor: "grabbing",
  },

  // Style: opacity
  opacity: (value) => {
    /**
     * Function that returns CSS styles for setting the opacity.
     * @param {number} value - The opacity value.
     * @returns {Object} CSS styles for the opacity.
     */
    return {
      opacity: value,
    };
  },

  // Style: filterBlur
  filterBlur: (value) => {
    /**
     * Function that returns CSS styles for applying a blur filter.
     * @param {string} value - The blur value.
     * @returns {Object} CSS styles for the blur filter.
     */
    return {
      filter: `blur(${value}px)`,
    };
  },

  // Style: filterBrightness
  filterBrightness: (value) => {
    /**
     * Function that returns CSS styles for adjusting the brightness.
     * @param {number} value - The brightness value.
     * @returns {Object} CSS styles for the brightness adjustment.
     */
    return {
      filter: `brightness(${value}%)`,
    };
  },

  // Style: filterContrast
  filterContrast: (value) => {
    /**
     * Function that returns CSS styles for adjusting the contrast.
     * @param {number} value - The contrast value.
     * @returns {Object} CSS styles for the contrast adjustment.
     */
    return {
      filter: `contrast(${value}%)`,
    };
  },

  // Style: filterGrayscale
  filterGrayscale: (value) => {
    /**
     * Function that returns CSS styles for applying grayscale.
     * @param {number} value - The grayscale value.
     * @returns {Object} CSS styles for the grayscale effect.
     */
    return {
      filter: `grayscale(${value}%)`,
    };
  },

  // Style: filterHueRotate
  filterHueRotate: (value) => {
    /**
     * Function that returns CSS styles for rotating the hue.
     * @param {number} value - The hue rotation value.
     * @returns {Object} CSS styles for the hue rotation.
     */
    return {
      filter: `hue-rotate(${value}deg)`,
    };
  },

  // Style: filterInvert
  filterInvert: (value) => {
    /**
     * Function that returns CSS styles for inverting colors.
     * @param {number} value - The invert value.
     * @returns {Object} CSS styles for the color inversion.
     */
    return {
      filter: `invert(${value}%)`,
    };
  },

  // Style: filterOpacity
  filterOpacity: (value) => {
    /**
     * Function that returns CSS styles for adjusting the opacity.
     * @param {number} value - The opacity value.
     * @returns {Object} CSS styles for the opacity adjustment.
     */
    return {
      filter: `opacity(${value}%)`,
    };
  },

  // Style: filterSaturate
  filterSaturate: (value) => {
    /**
     * Function that returns CSS styles for saturating colors.
     * @param {number} value - The saturation value.
     * @returns {Object} CSS styles for the color saturation.
     */
    return {
      filter: `saturate(${value}%)`,
    };
  },

  // Style: filterSepia
  filterSepia: (value) => {
    /**
     * Function that returns CSS styles for applying sepia.
     * @param {number} value - The sepia value.
     * @returns {Object} CSS styles for the sepia effect.
     */
    return {
      filter: `sepia(${value}%)`,
    };
  },
  // Style: bgPrimaryHover
  bgPrimaryHover: () => {
    const { ref, isHovered } = useHover();

    return {
      /**
       * Object that represents the CSS styles for setting the primary background color on hover with white text.
       */
      style: isHovered
        ? {
            backgroundColor: "#0056b3",
            color: "#fff",
          }
        : {},
      ref: ref,
    };
  },

  // Style: bgSuccessHover
  bgSuccessHover: () => {
    const { ref, isHovered } = useHover();

    return {
      /**
       * Object that represents the CSS styles for setting the success background color on hover with white text.
       */
      style: isHovered
        ? {
            backgroundColor: "#218838",
            color: "#fff",
          }
        : {},
      ref: ref,
    };
  },
  // Style: bgDangerHover
  bgDangerHover: () => {
    const { ref, isHovered } = useHover();

    return {
      /**
       * Object that represents the CSS styles for setting the danger background color on hover with white text.
       */
      style: isHovered
        ? {
            backgroundColor: "#d32f2f",
            color: "#fff",
          }
        : {},
      ref: ref,
    };
  },
};

export default styles;
