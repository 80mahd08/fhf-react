class StyleHashTable {
  constructor() {
    this.table = {};
  }

  // Hash function to generate a hash key
  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue;
  }

  // Insert a property into the hash table
  insert(key, element, pseudoElement) {
    if (element instanceof Element) {
      const hashKey = this.hash(key);
      const computedStyle = window.getComputedStyle(element, pseudoElement);
      this.table[hashKey] = computedStyle.getPropertyValue(key);
    } else {
      console.error("Invalid element provided to insert into StyleHashTable");
    }
  }

  // Search for a property in the hash table
  search(key) {
    const hashKey = this.hash(key);
    return this.table[hashKey];
  }
}

const generateWarnings = (selector) => {
  const warnings = [];
  const element = document.querySelector(selector);
  if (element instanceof Element) {
    // Check for height and width issues
    const heightAndWidthWarning = heightAndWidthWarnings(element, selector);
    if (heightAndWidthWarning !== null) {
      warnings.push(heightAndWidthWarning);
    }

    // Check for font-related issues
    const fontWarning = fontWarnings(element, selector);
    if (fontWarning !== null) {
      warnings.push(fontWarning);
    }

    // Check for padding and margin issues
    const paddingAndMarginWarning = paddingAndMarginWarnings(element, selector);
    if (paddingAndMarginWarning !== null) {
      warnings.push(paddingAndMarginWarning);
    }

    // Check for color-related issues
    const colorWarning = colorWarnings(element, selector);
    if (colorWarning !== null) {
      warnings.push(colorWarning);
    }

    // Check for border-related issues
    const borderWarning = borderWarnings(element, selector);
    if (borderWarning !== null) {
      warnings.push(borderWarning);
    }

    // Check for flexbox-related issues
    const flexboxWarning = flexboxWarnings(element, selector);
    if (flexboxWarning !== null) {
      warnings.push(flexboxWarning);
    }
    // Check for text-related issues
    const textWarning = textWarnings(element, selector);
    if (textWarning !== null) {
      warnings.push(textWarning);
    }
    //check for box-sizing issues
    const boxSizingWarning = boxSizingWarnings(element, selector);
    if (boxSizingWarning !== null) {
      warnings.push(boxSizingWarning);
    }
    // check for box-shadow issues
    const boxShadowWarnings = boxShadowWarning(element, selector);
    if (boxShadowWarnings !== null) {
      warnings.push(boxShadowWarnings);
    }

    return warnings;
  } else {
    console.error(
      "Invalid element provided to generateWarnings inside applyStyles"
    );
    return null;
  }
};

const heightAndWidthWarnings = (element, selector) => {
  const myStyleHashTable = new StyleHashTable();
  myStyleHashTable.insert("display", element);
  myStyleHashTable.insert("height", element);
  myStyleHashTable.insert("width", element);
  const worn = [];
  const heightValue = myStyleHashTable.search("height");
  const widthValue = myStyleHashTable.search("width");
  const displayValue = myStyleHashTable.search("display");

  if (
    displayValue === "inline" &&
    (heightValue !== "auto" || widthValue !== "auto")
  ) {
    worn.push(
      "inline elements do not support height or width property(in style of the element) in " +
        selector
    );
  }
  if (heightValue === "100vh" || widthValue === "100vw") {
    worn.push(
      "Utilizing 'height: 100vh' or 'width: 100vw' is not considered best practice for responsive design, as it may lead to unintended side-scrolling issues, particularly on devices lacking floating scroll bars, due to overflow considerations. Consider employing 'height: 100dvh' or 'width: 100dvw' as alternative solutions for a more robust and responsive layout.  in " +
        selector
    );
  }
  if (worn.length === 0) {
    return null;
  } else {
    return worn;
  }
};
const fontWarnings = (element, selector) => {
  const myStyleHashTable = new StyleHashTable();
  myStyleHashTable.insert("font-size", element);
  myStyleHashTable.insert("line-height", element);

  const fontSizeValue = myStyleHashTable.search("font-size");
  const lineHeightValue = myStyleHashTable.search("line-height");

  if (
    fontSizeValue &&
    lineHeightValue &&
    parseFloat(fontSizeValue) > 1.5 * parseFloat(lineHeightValue)
  ) {
    return (
      "Font size is significantly larger than line height (may affect readability) in " +
      selector
    );
  }

  return null;
};

const paddingAndMarginWarnings = (element, selector) => {
  const myStyleHashTable = new StyleHashTable();
  myStyleHashTable.insert("padding", element);
  myStyleHashTable.insert("margin", element);
  const worn = [];

  const paddingValue = myStyleHashTable.search("padding");
  const marginValue = myStyleHashTable.search("margin");

  // Check if padding is greater than 50px
  if (parseFloat(paddingValue) > 200) {
    worn.push(
      "Padding value is unusually large (may lead to layout issues) in " +
        selector
    );
  }

  // Check if margin is negative
  if (parseFloat(marginValue) < 0) {
    worn.push(
      "Negative margin values can lead to unexpected layout behavior in " +
        selector
    );
  }

  if (worn.length === 0) {
    return null;
  } else {
    return worn;
  }
};
const colorWarnings = (element, selector) => {
  const myStyleHashTable = new StyleHashTable();
  myStyleHashTable.insert("color", element);
  myStyleHashTable.insert("background-color", element);
  const worn = [];

  const textColor = myStyleHashTable.search("color");
  const bgColor = myStyleHashTable.search("background-color");
  if (selector === "*") {
    return null;
  }
  // check if the color is hex or rgb
  if (!isValidColor(textColor) || !isValidColor(bgColor)) {
    return (
      "Invalid color value in color or background-color (please enter hex or rgb or rgba color) in " +
      selector
    );
  }

  // Check if contrast between text color and background color is insufficient
  if (textColor && bgColor) {
    const contrastRatio = getContrastRatio(textColor, bgColor);
    if (contrastRatio < 4.5) {
      worn.push(
        "Low contrast between text color and background color (may affect accessibility) in " +
          selector
      );
    }
    const isSim = isColorTooSimilar(textColor, bgColor);
    if (isSim) {
      worn.push(
        "color and background-color is too similer consider adjust them for more readability in " +
          selector
      );
    }
  }

  if (worn.length === 0) {
    return null;
  } else {
    return worn;
  }
};
const isValidColor = (color) => {
  // Check if the color is a valid HEX color
  const hexRegex = /^#([0-9a-fA-F]{3}){1,2}$/;
  if (hexRegex.test(color)) {
    return true;
  }

  // Check if the color is a valid RGB color
  const rgbRegex = /^rgb\(\s?\d+\s?,\s?\d+\s?,\s?\d+\s?\)$/;
  if (rgbRegex.test(color)) {
    return true;
  }

  // Check if the color is a valid RGBA color
  const rgbaRegex = /^rgba\(\s?\d+\s?,\s?\d+\s?,\s?\d+\s?,\s?0?\.\d+\s?\)$/;
  if (rgbaRegex.test(color)) {
    return true;
  }

  // If none of the above, return false
  return false;
};

const getContrastRatio = (color1, color2) => {
  // Function to calculate contrast ratio between two colors
  const luminance = (color) => {
    const value = color;
    return value <= 0.03928
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, 2.4);
  };

  const getColorArray = (color) => {
    if (color[0] === "#") {
      const { r, g, b } = hexToRgb(color);
      return [r / 255, g / 255, b / 255];
    }

    if (color.startsWith("rgba")) {
      const rgbaValues = color.match(/\d+(\.\d+)?/g);
      return [
        parseFloat(rgbaValues[0]) / 255,
        parseFloat(rgbaValues[1]) / 255,
        parseFloat(rgbaValues[2]) / 255,
      ];
    }

    return color.match(/\d+(\.\d+)?/g).map((value) => parseFloat(value) / 255);
  };

  const rgb1 = getColorArray(color1);
  const rgb2 = getColorArray(color2);

  const luminance1 =
    0.2126 * luminance(rgb1[0]) +
    0.7152 * luminance(rgb1[1]) +
    0.0722 * luminance(rgb1[2]);
  const luminance2 =
    0.2126 * luminance(rgb2[0]) +
    0.7152 * luminance(rgb2[1]) +
    0.0722 * luminance(rgb2[2]);

  const brighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);

  return (brighter + 0.05) / (darker + 0.05);
};

const borderWarnings = (element, selector) => {
  const myStyleHashTable = new StyleHashTable();
  myStyleHashTable.insert("border-radius", element);

  const borderRadiusValue = myStyleHashTable.search("border-radius");

  // Check if border radius is too small
  if (parseFloat(borderRadiusValue) < 5 && parseFloat(borderRadiusValue) > 0) {
    return "Border radius is too small (may not be noticeable) in " + selector;
  }

  return null;
};

const flexboxWarnings = (element, selector) => {
  const myStyleHashTable = new StyleHashTable();
  myStyleHashTable.insert("display", element);
  myStyleHashTable.insert("flex-direction", element);
  myStyleHashTable.insert("align-items", element); // New check for align-items
  const worn = [];

  const displayValue = myStyleHashTable.search("display");
  const flexDirectionValue = myStyleHashTable.search("flex-direction");
  const alignItemsValue = myStyleHashTable.search("align-items"); // New variable for align-items

  if (
    (displayValue === "flex" || displayValue === "inline-flex") &&
    flexDirectionValue === "row"
  ) {
    const children = element.children;

    // Check if flex container has children with fixed width
    for (let i = 0; i < children.length; i++) {
      myStyleHashTable.insert("width", children[i]);
      const childWidthValue = myStyleHashTable.search("width");

      if (
        childWidthValue &&
        childWidthValue !== "auto" &&
        childWidthValue !== "100%"
      ) {
        worn.push(
          `Flex container has a child '${selector} > ${children[i].nodeName}' with fixed width (may cause layout issues).`
        );
        break;
      }
    }

    // Check if flex items have fixed height
    for (let i = 0; i < children.length; i++) {
      myStyleHashTable.insert("height", children[i]);
      const childHeightValue = myStyleHashTable.search("height");

      if (
        childHeightValue &&
        childHeightValue !== "auto" &&
        childHeightValue !== "100%"
      ) {
        worn.push(
          `Flex item '${selector} > ${children[i].nodeName}' has fixed height in a row layout (may cause layout issues).`
        );
        break;
      }
    }

    // Check if align-items is set to stretch (default) when flex items have fixed height
    if (alignItemsValue === "stretch") {
      for (let i = 0; i < children.length; i++) {
        myStyleHashTable.insert("height", children[i]);
        const childHeightValue = myStyleHashTable.search("height");

        if (
          childHeightValue &&
          childHeightValue !== "auto" &&
          childHeightValue !== "100%"
        ) {
          worn.push(
            `Flex container '${selector}' has 'align-items: stretch' while flex items have fixed height. Consider adjusting 'align-items' for better layout control.`
          );
          break;
        }
      }
    }
  }

  if (worn.length === 0) {
    return null;
  } else {
    return worn;
  }
};
const textWarnings = (element, selector) => {
  const myStyleHashTable = new StyleHashTable();
  myStyleHashTable.insert("font-family", element);
  myStyleHashTable.insert("text-align", element);
  const worn = [];

  const fontFamilyValue = myStyleHashTable.search("font-family");
  const textAlignValue = myStyleHashTable.search("text-align");
  const textDecorationValue = myStyleHashTable.search("text-decoration");

  // Check if font-family is generic and not specific
  if (fontFamilyValue.includes("sans-serif")) {
    worn.push(
      "Consider using a more specific font-family for better cross-browser compatibility in " +
        selector
    );
  }

  // Check if text-align is justified
  if (textAlignValue === "justify") {
    worn.push(
      "Avoid using 'text-align: justify' as it may cause uneven spacing between words in " +
        selector
    );
  }
  if (textDecorationValue === "underline") {
    worn.push(
      `Warning: Text decoration is set to 'underline' in ${selector}.` +
        ` Consider avoiding underlined text for better readability or use other text styling options.`
    );
  }
  if (worn.length === 0) {
    return null;
  } else {
    return worn;
  }
};
const boxSizingWarnings = (element, selector) => {
  const myStyleHashTable = new StyleHashTable();
  myStyleHashTable.insert("box-sizing", element);
  const boxSizingValue = myStyleHashTable.search("box-sizing");
  if (boxSizingValue !== "border-box") {
    return `Consider using 'box-sizing: border-box' in ${selector} or consider using it in all elements like this
    when using the 'applyStyles' function:
      applyStyles( "*" , {
        boxSizing: "border-box",
      })
    when using css : 
      * {
        box-sizing: border-box;
      }
    `;
  }
  return null;
};
const boxShadowWarning = (element, selector) => {
  const myStyleHashTable = new StyleHashTable();
  myStyleHashTable.insert("box-shadow", element);
  const boxShadowValue = myStyleHashTable.search("box-shadow");

  // Check if box-shadow is set to a large or unusual value
  if (boxShadowValue && boxShadowValue.includes("px")) {
    const boxShadowValues = boxShadowValue.split(" ");
    const maxShadowSize = Math.max(
      ...boxShadowValues.map((value) => parseFloat(value))
    );
    if (maxShadowSize > 50) {
      return (
        `Warning: Box shadow size is unusually large (may impact design) in ${selector}.` +
        ` Consider adjusting the box shadow for a more balanced appearance.`
      );
    }
  }

  return null;
};

const isColorTooSimilar = (color1, color2) => {
  // Function to check if two colors are too similar based on CIE76 color difference formula
  const getColorArray = (color) => {
    if (color[0] === "#") {
      const { r, g, b } = hexToRgb(color);
      return [r / 255, g / 255, b / 255];
    }

    if (color.startsWith("rgba")) {
      const rgbaValues = color.match(/\d+(\.\d+)?/g);
      return [
        parseFloat(rgbaValues[0]) / 255,
        parseFloat(rgbaValues[1]) / 255,
        parseFloat(rgbaValues[2]) / 255,
      ];
    }

    return color.match(/\d+(\.\d+)?/g).map((value) => parseFloat(value) / 255);
  };

  const rgb1 = getColorArray(color1);
  const rgb2 = getColorArray(color2);

  // Calculate color difference using CIE76 formula
  const deltaE = Math.sqrt(
    Math.pow(rgb2[0] - rgb1[0], 2) +
      Math.pow(rgb2[1] - rgb1[1], 2) +
      Math.pow(rgb2[2] - rgb1[2], 2)
  );

  // Define a threshold for color difference (you can adjust this value)
  const threshold = 0.6; // Adjusted threshold for normalized values

  // Return true if the colors are too similar, false otherwise
  return deltaE < threshold;
};

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export { generateWarnings };
