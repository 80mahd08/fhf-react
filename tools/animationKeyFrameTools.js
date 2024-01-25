const generateKeyframeFromStyles = (styleObjects) => {
  if (styleObjects.length === 1) {
    return `100%{${styleObjectToCss(styleObjects[0])}}`;
  } else {
    let initialKeyframe = `0% {${styleObjectToCss(styleObjects[0])}}`;
    styleObjects.shift();
    let keyframeStep = 100 / styleObjects.length;
    const outputKeyframes = styleObjects
      .map((style, index) => {
        const cssStyle = styleObjectToCss(style);
        return `${(index + 1) * keyframeStep}% {${cssStyle}}`;
      })
      .join("");
    return initialKeyframe + outputKeyframes;
  }
};

function styleObjectToCss(styleObject) {
  let css = "";
  for (let property in styleObject) {
    css += `${convertToCssKey(property)}: ${styleObject[property]};`;
  }
  return css; // Remove trailing newline character
}

function convertToCssKey(property) {
  return property
    .replace(/([A-Z])/g, (match) => `-${match[0].toLowerCase()}`)
    .replace(/^./, (str) => str.toLowerCase());
}

export { convertToCssKey, styleObjectToCss, generateKeyframeFromStyles };
