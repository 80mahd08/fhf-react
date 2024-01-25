// Import statements
import React from "react";
import { CSSProperties } from "react";
import GridSystemOop from "./tools/GridSystemOop";

// ClearFix component
/**
 * A utility component for layout adjustments, particularly designed to handle floated elements.
 * This component is used to clear floats and ensure proper rendering and layout within a webpage.
 * @returns {JSX.Element} An empty <div> element with the class "clearFix".
 */
declare function ClearFix(): JSX.Element;

// Container component
/**
 * responsive container with variable width based on the screen size.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the container.
 * @param {Object} props.style - The CSS styles to be applied to the container.
 * @param {string} props.className - The additional CSS class to be applied to the container.
 * @returns {JSX.Element} A div element with the class "container" and the specified child elements and styles.
 */
declare function Container(props: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
}): JSX.Element;

// FlexContainer component
/**
 * A component that creates a flex container, which allows FlexItem elements to be laid out in a flexible box.
 * @param {Object} props - The component props.
 * @param {React.ReactElement<typeof FlexItem> | React.ReactElement<typeof FlexItem>[]} props.children -
 *   The child elements to be displayed inside the flex container.
 *   Should be a single FlexItem element or an array of FlexItem elements.
 * @param {Object} props.style - The CSS styles to be applied to the flex container.
 * @param {string} props.className - The additional CSS class to be applied to the flex container.
 * @returns {JSX.Element} A div element representing the flex container.
 */
declare function FlexContainer(props: {
  children:
    | React.ReactElement<typeof FlexItem>
    | React.ReactElement<typeof FlexItem>[];
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
}): JSX.Element;

// FlexItem component
/**
 * A component that creates a flex item, which allows elements to be laid out in a flexible box.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the flex item.
 * @param {Object} props.style - The CSS styles to be applied to the flex item.
 * @param {string} props.className - The additional CSS class to be applied to the flex item.
 * @returns {JSX.Element} A div element representing the flex item.
 */
declare function FlexItem(props: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
}): JSX.Element;

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
declare function DivV(props: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  visibleIn?: string;
  hiddenIn?: string;
  [key: string]: any;
}): JSX.Element;

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
declare function RespImg(props: {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
}): JSX.Element;

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
declare function RespVideo(props: {
  src: string;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
}): JSX.Element;

// RespGridFill component
/**
 * A responsive grid component with automatic column sizing based on the specified size and gap, using auto-fill.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the grid.
 * @param {number} props.size - The size of each grid item in pixels.
 * @param {Object} props.style - The CSS styles to be applied to the grid.
 * @param {number} props.gap - The gap between grid items in pixels.
 * @param {string} props.className - The additional CSS class to be applied to the grid.
 * @returns {JSX.Element} A div element with the specified child elements and styles.
 */
declare function RespGridFill(props: {
  children: React.ReactNode;
  size: number;
  style?: React.CSSProperties;
  gap: number;
  className?: string;
  [key: string]: any;
}): JSX.Element;

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
declare function RespGridFit(props: {
  children: React.ReactNode;
  size: number;
  style?: React.CSSProperties;
  gap: number;
  className?: string;
  [key: string]: any;
}): JSX.Element;

/**
 * A component that creates an unstyled list, which allows only `li` elements as children.
 * @param {Object} props - The component props.
 * @param {React.ReactElement<"li"> | React.ReactElement<"li">[]} props.children -
 *   The child elements to be displayed inside the unstyled list.
 *   Should be a single `li` element or an array of `li` elements.
 * @param {string} props.className - The additional CSS class to be applied to the unstyled list.
 * @param {Object} props.style - The CSS styles to be applied to the unstyled list.
 * @returns {JSX.Element} A div element representing the unstyled list.
 */
declare function UnstyledList(props: {
  children: React.ReactElement<"li"> | React.ReactElement<"li">[];
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}): JSX.Element;

// Component: NavUl
/**
 * A component that creates an unordered list with certain default styles for navigation.
 * @param {Object} props - The component's properties.
 * @param {React.ReactElement<"li"> | React.ReactElement<"li">[]} props.children -
 *   The child elements to be displayed inside the unstyled list.
 *   Should be a single `li` element or an array of `li` elements.
 * @param {Object} props.style - The CSS styles to be applied to the unordered list.
 * @param {string} props.className - The additional CSS class to be applied to the unordered list.
 * @param {Object} props.otherProps - Any other additional properties that should be applied to the unordered list element.
 * @returns {JSX.Element} An unordered list element with the specified child elements and styles.
 */
declare function NavUl(props: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
}): JSX.Element;

/**
 * A responsive heading component that allows specifying the HTML heading element type.
 * @param {Object} props - The component props.
 * @param {"h1" | "h2" | "h3" | "h4" | "h5" | "h6"} [props.element="h1"] -
 *   The HTML heading element type. Defaults to "h1".
 * @param {Object} props.style - The CSS styles to be applied to the heading element.
 * @param {string} props.className - The additional CSS class to be applied to the heading element.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the heading element.
 * @returns {JSX.Element} A heading element with responsive styling.
 */
declare function RespHeading(props: {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}): JSX.Element;

// Component: RespP
/**
 * A React functional component that renders a paragraph element with responsive font size.
 * @param {object} props - The properties passed to the component.
 * @param {object} props.style - The inline CSS styles to apply to the paragraph element.
 * @param {string} props.className - The CSS class name to apply to the paragraph element.
 * @param {node} props.children - The content to display inside the paragraph element.
 * @param {any} otherProps - Any additional properties to pass to the paragraph element.
 * @returns {JSX.Element} The paragraph element with responsive font size.
 */
declare function RespP(props: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
}): JSX.Element;

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
declare function Circle(props: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
}): JSX.Element;

/**
 * A responsive background image component that adjusts its background size and position.
 * @param {Object} props - The component's properties.
 * @param {"div" | "section" | "header" | "footer"} [props.element="div"] -
 *   The HTML element type for the background image container.
 * @param {string} props.url - The URL of the background image.
 * @param {React.ReactNode} props.children - The content of the background image container.
 * @param {Object} props.style - The CSS styles to be applied to the background image container.
 * @param {string} props.className - The additional CSS class to be applied to the background image container.
 * @param {Object} props.otherProps - Any other additional properties that should be applied to the background image container element.
 * @returns {JSX.Element} An element with a background image and specified child elements and styles.
 * @throws {Error} Throws an error if the provided element is not one of: "div", "section", "header", "footer".
 * @throws {Error} Throws an error if the URL for the background image is empty.
 */
declare function RespBackgImg(props: {
  element?: "div" | "section" | "header" | "footer";
  url: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  [key: string]: any;
}): JSX.Element;

//custom hook
/**
 * React Hook for responsive media queries.
 *
 * @param {string} query - A media query string.
 * @returns {boolean} Whether the current device matches the given media query.
 */
declare function useMediaQuery(query: string): boolean;

/**
 * React Hook for applying styles based on responsive media queries.
 *
 * @param {string} query - A media query string.
 * @param {Object} style - The style object to be applied when the media query matches.
 * @returns {Object} The style object that should be applied to the component.
 */
declare function useMediaStyle(
  query: string,
  style: React.CSSProperties
): React.CSSProperties;

/**
 * React Hook for getting the current hover state.
 *
 * @returns {{ref: React.RefObject, isHovered: boolean}} An object containing a reference to the DOM element and the current hover state.
 */

declare function useHover(): {
  refOfUseHover: React.RefObject<any>;
  useHoverIsHovered: boolean;
};

/**
 * React Hook for handling active state based on mouse events.
 *
 * @returns {{ ref: React.MutableRefObject, isActive: boolean }} An object containing a mutable reference to the DOM element and the active state.
 */

declare function useActive(): {
  refOfUseActive: React.RefObject<any>;
  useActiveIsActive: boolean;
};

/**
 * React Hook for merging multiple React refs into a single ref object.
 *
 * @param  {...React.RefObject} refs - An array of React ref objects.
 * @returns {React.RefObject} A single ref object that represents the merged refs.
 */

declare function mergeRefs(
  ...refs: React.RefObject<any>[]
): React.RefObject<any>;

type GridSystemFunction = (
  numColumns?: number,
  gapValue?: number
) => GridSystemOop;

declare const styles: {
  /**
   * CSS styles for centering an element using absolute positioning and translate.
   * @type {CSSProperties}
   */

  centerPosition?: CSSProperties;
  /**
   * CSS styles for centering text.
   * @type {CSSProperties}
   */

  textCenter?: CSSProperties;

  /**
   * CSS styles for left-aligning text.
   * @type {CSSProperties}
   */

  textLeft?: CSSProperties;
  /**
   * CSS styles for right-aligning text.
   * @type {CSSProperties}
   */

  textRight?: CSSProperties;
  /**
   * CSS styles for floating an element to the left.
   * @type {CSSProperties}
   */

  floatLeft?: CSSProperties;
  /**
   * CSS styles for floating an element to the right.
   * @type {CSSProperties}
   */

  floatRight?: CSSProperties;
  /**
   * CSS styles for centering an element using flexbox.
   * @type {CSSProperties}
   */

  centerContentFlex?: CSSProperties;
  /**
   * CSS styles for displaying an element as a flex container.
   * @type {CSSProperties}
   */

  dispFlex?: CSSProperties;
  /**
   * CSS styles for displaying an element as an inline flex container.
   * @type {CSSProperties}
   */

  dispInlineFlex?: CSSProperties;
  /**
   * CSS styles for hiding an element.
   * @type {CSSProperties}
   */

  dispNone?: CSSProperties;
  /**
   * CSS styles for displaying an element as a block.
   * @type {CSSProperties}
   */

  dispBlock?: CSSProperties;
  /**
   * CSS styles for displaying an element as an inline element.
   * @type {CSSProperties}
   */

  dispInline?: CSSProperties;
  /**
   * CSS styles for displaying an element as an inline block.
   * @type {CSSProperties}
   */

  dispInlineBlock?: CSSProperties;
  /**
   * CSS styles for displaying an element as a table.
   * @type {CSSProperties}
   */

  dispTable?: CSSProperties;
  /**
   * CSS styles for displaying an element as a table row.
   * @type {CSSProperties}
   */

  dispTableRow?: CSSProperties;
  /**
   * CSS styles for displaying an element as a table cell.
   * @type {CSSProperties}
   */

  dispTableCell?: CSSProperties;
  /**
   * CSS styles for displaying an element as a grid container.
   * @type {CSSProperties}
   */

  dispGrid?: CSSProperties;
  /**
   * CSS styles for displaying an element as an inline grid container.
   * @type {CSSProperties}
   */

  dispInlineGrid?: CSSProperties;
  /**
   * Function that returns CSS styles for setting the font color.
   * @param {string} color - The color value.
   * @returns {CSSProperties} CSS styles for font color.
   * @throws {Error} Throws an error if the color value is invalid.
   */

  fontColor?: (color: string) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the background color.
   * @param {string} color - The color value.
   * @returns {CSSProperties} CSS styles for background color.
   * @throws {Error} Throws an error if the color value is invalid.
   */

  bg?: (color: string) => CSSProperties;
  /**
   * Function that returns CSS styles for creating a border.
   * @param {number} size - The size of the border in pixels.
   * @param {string} type - The style of the border (e.g., solid, dashed).
   * @param {string} color - The color of the border.
   * @returns {CSSProperties} CSS styles for the border.
   * @throws {Error} Throws an error if the size, type, or color values are invalid.
   */

  border?: (size: number, type: string, color: string) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the margin.
   * @param {number} size - The size of the margin in pixels.
   * @returns {CSSProperties} CSS styles for the margin.
   * @throws {Error} Throws an error if the size value is invalid.
   */

  margin?: (size: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the top margin.
   * @param {number} size - The size of the top margin in pixels.
   * @returns {CSSProperties} CSS styles for the top margin.
   * @throws {Error} Throws an error if the size value is invalid.
   */

  marginTop?: (size: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the bottom margin.
   * @param {number} size - The size of the bottom margin in pixels.
   * @returns {CSSProperties} CSS styles for the bottom margin.
   * @throws {Error} Throws an error if the size value is invalid.
   */

  marginBottom?: (size: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the left margin.
   * @param {number} size - The size of the left margin in pixels.
   * @returns {CSSProperties} CSS styles for the left margin.
   * @throws {Error} Throws an error if the size value is invalid.
   */

  marginLeft?: (size: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the right margin.
   * @param {number} size - The size of the right margin in pixels.
   * @returns {CSSProperties} CSS styles for the right margin.
   * @throws {Error} Throws an error if the size value is invalid.
   */

  marginRight?: (size: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the padding.
   * @param {number} size - The size of the padding in pixels.
   * @returns {CSSProperties} CSS styles for the padding.
   * @throws {Error} Throws an error if the size value is invalid.
   */

  padding?: (size: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the top padding.
   * @param {number} size - The size of the top padding in pixels.
   * @returns {CSSProperties} CSS styles for the top padding.
   * @throws {Error} Throws an error if the size value is invalid.
   */

  paddingTop?: (size: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the bottom padding.
   * @param {number} size - The size of the bottom padding in pixels.
   * @returns {CSSProperties} CSS styles for the bottom padding.
   * @throws {Error} Throws an error if the size value is invalid.
   */

  paddingBottom?: (size: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the left padding.
   * @param {number} size - The size of the left padding in pixels.
   * @returns {CSSProperties} CSS styles for the left padding.
   * @throws {Error} Throws an error if the size value is invalid.
   */

  paddingLeft?: (size: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the right padding.
   * @param {number} size - The size of the right padding in pixels.
   * @returns {CSSProperties} CSS styles for the right padding.
   * @throws {Error} Throws an error if the size value is invalid.
   */

  paddingRight?: (size: number) => CSSProperties;
  // Responsive Margin Styles
  /**
   * Function that returns responsive CSS styles for setting the margin.
   * @param {number} min - The minimum size of the margin in pixels.
   * @param {number} max - The maximum size of the margin in pixels.
   * @returns {CSSProperties} CSS styles for the responsive margin.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */

  respMargin?: (min: number, max: number) => CSSProperties;
  // Responsive Margin Styles
  /**
   * Function that returns responsive CSS styles for setting the top margin.
   * @param {number} min - The minimum size of the top margin in pixels.
   * @param {number} max - The maximum size of the top margin in pixels.
   * @returns {CSSProperties} CSS styles for the responsive top margin.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */

  respMarginTop?: (min: number, max: number) => CSSProperties;
  /**
   * Function that returns responsive CSS styles for setting the left margin.
   * @param {number} min - The minimum size of the left margin in pixels.
   * @param {number} max - The maximum size of the left margin in pixels.
   * @returns {CSSProperties} CSS styles for the responsive left margin.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */

  respMarginLeft?: (min: number, max: number) => CSSProperties;
  /**
   * Function that returns responsive CSS styles for setting the right margin.
   * @param {number} min - The minimum size of the right margin in pixels.
   * @param {number} max - The maximum size of the right margin in pixels.
   * @returns {CSSProperties} CSS styles for the responsive right margin.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */

  respMarginRight?: (min: number, max: number) => CSSProperties;
  /**
   * Function that returns responsive CSS styles for setting the bottom margin.
   * @param {number} min - The minimum size of the bottom margin in pixels.
   * @param {number} max - The maximum size of the bottom margin in pixels.
   * @returns {CSSProperties} CSS styles for the responsive bottom margin.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */

  respMarginBottom?: (min: number, max: number) => CSSProperties;
  /**
   * Function that returns responsive CSS styles for setting the padding.
   * @param {number} min - The minimum size of the padding in pixels.
   * @param {number} max - The maximum size of the padding in pixels.
   * @returns {CSSProperties} CSS styles for the responsive padding.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */

  respPadding?: (min: number, max: number) => CSSProperties;
  /**
   * Function that returns responsive CSS styles for setting the top padding.
   * @param {number} min - The minimum size of the top padding in pixels.
   * @param {number} max - The maximum size of the top padding in pixels.
   * @returns {CSSProperties} CSS styles for the responsive top padding.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */

  respPaddingTop?: (min: number, max: number) => CSSProperties;
  /**
   * Function that returns responsive CSS styles for setting the left padding.
   * @param {number} min - The minimum size of the left padding in pixels.
   * @param {number} max - The maximum size of the left padding in pixels.
   * @returns {CSSProperties} CSS styles for the responsive left padding.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */

  respPaddingLeft?: (min: number, max: number) => CSSProperties;
  /**
   * Function that returns responsive CSS styles for setting the right padding.
   * @param {number} min - The minimum size of the right padding in pixels.
   * @param {number} max - The maximum size of the right padding in pixels.
   * @returns {CSSProperties} CSS styles for the responsive right padding.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */

  respPaddingRight?: (min: number, max: number) => CSSProperties;
  /**
   * Function that returns responsive CSS styles for setting the bottom padding.
   * @param {number} min - The minimum size of the bottom padding in pixels.
   * @param {number} max - The maximum size of the bottom padding in pixels.
   * @returns {CSSProperties} CSS styles for the responsive bottom padding.
   * @throws {Error} Throws an error if the min or max values are invalid.
   */

  respPaddingBottom?: (min: number, max: number) => CSSProperties;
  /**
   * CSS style for setting the margin to 0.
   * @type {CSSProperties}
   */

  marginNone?: CSSProperties;
  /**
   * CSS style for setting the padding to 0.
   * @type {CSSProperties}
   */

  paddingNone?: CSSProperties;
  /**
   * CSS style for setting the border to 0.
   * @type {CSSProperties}
   */

  borderNone?: CSSProperties;
  /**
   * CSS style for setting the border-radius to 0.
   * @type {CSSProperties}
   */

  borderRadiusNone?: CSSProperties;
  /**
   * CSS style for setting the box-shadow to 0.
   * @type {CSSProperties}
   */

  boxShadowNone?: CSSProperties;
  /**
   * CSS style for setting the text-shadow to 0.
   * @type {CSSProperties}
   */

  textShadowNone?: CSSProperties;
  /**
   * Function that returns CSS styles for setting the z-index.
   * @param {number} value - The z-index value.
   * @returns {CSSProperties} CSS styles for the z-index.
   * @throws {Error} Throws an error if the value is invalid.
   */

  zIndex?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the text decoration.
   * @param {string} value - The text decoration value.
   * @returns {CSSProperties} CSS styles for the text decoration.
   * @throws {Error} Throws an error if the value is invalid.
   */

  textDeco?: (value: string) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the text transform.
   * @param {string} value - The text transform value.
   * @returns {CSSProperties} CSS styles for the text transform.
   * @throws {Error} Throws an error if the value is invalid.
   */

  textTrans?: (value: string) => CSSProperties;
  /**
   * CSS style for setting the background color to transparent
   * @type {CSSProperties}
   */

  transBg?: CSSProperties;
  /**
   * CSS style for setting the border radius to 5px.
   * @type {CSSProperties}
   */

  rounded?: CSSProperties;
  /**
   * CSS style for setting the border radius to 25px.
   * @type {CSSProperties}
   */

  extraRounded?: CSSProperties;
  /**
   * CSS style for setting the border radius to 45px.
   * @type {CSSProperties}
   */

  megaRounded?: CSSProperties;
  /**
   * CSS style for setting the border radius to 65px.
   * @type {CSSProperties}
   */

  superRounded?: CSSProperties;
  /**
   * CSS style for setting the border radius to 85px.
   * @type {CSSProperties}
   */

  ultraRounded?: CSSProperties;
  /**
   * CSS style for setting the border radius to 105px.
   * @type {CSSProperties}
   */

  extremeRounded?: CSSProperties;
  /**
   * CSS style for setting the border radius to 125px.
   * @type {CSSProperties}
   */

  radicalRounded?: CSSProperties;
  /**
   * CSS style for setting the border radius to 145px.
   * @type {CSSProperties}
   */

  hyperRounded?: CSSProperties;
  /**
   * CSS style for setting the border radius to 165px.
   * @type {CSSProperties}
   */

  ultimateRounded?: CSSProperties;
  /**
   * CSS style for setting the border radius to 185px.
   * @type {CSSProperties}
   */

  maxRounded?: CSSProperties;
  /**
   * CSS style for setting the border radius to 205px.
   * @type {CSSProperties}
   */

  beyondRounded?: CSSProperties;
  /**
   * Function that returns CSS styles for setting the justify-content property in a flex container.
   * @param {string} type - The justify-content value.
   * @returns {CSSProperties} CSS styles for the justify-content property.
   * @throws {Error} Throws an error if the value is invalid.
   */

  flexJContent?: (type: string) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the align-items property in a flex container.
   * @param {string} type - The align-items value.
   * @returns {CSSProperties} CSS styles for the align-items property.
   * @throws {Error} Throws an error if the value is invalid.
   */

  flexAContent?: (type: string) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the font size with clamped responsiveness.
   * @param {number} min - The minimum font size in pixels.
   * @param {number} max - The maximum font size in pixels.
   * @returns {CSSProperties} CSS styles for the font size with clamped responsiveness.
   */

  RespFontSize?: (min: number, max: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the line height with clamped responsiveness.
   * @param {number} min - The minimum line height in pixels.
   * @param {number} max - The maximum line height in pixels.
   * @returns {CSSProperties} CSS styles for the line height with clamped responsiveness.
   */

  RespLineHeight?: (min: number, max: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the font weight with clamped responsiveness.
   * @param {number} min - The minimum font weight.
   * @param {number} max - The maximum font weight.
   * @returns {CSSProperties} CSS styles for the font weight with clamped responsiveness.
   */

  respFontWeight?: (min: number, max: number) => CSSProperties;
  /**
   * CSS style for a light box shadow.
   * @type {CSSProperties}
   */

  boxShadowLight?: CSSProperties;
  /**
   * CSS style for setting the primary text color.
   * @type {CSSProperties}
   */

  textPrimary?: CSSProperties;
  /**
   * CSS style for setting the secondary text color.
   * @type {CSSProperties}
   */

  textSecondary?: CSSProperties;
  /**
   * CSS style for setting a light background color.
   * @type {CSSProperties}
   */

  bgLight?: CSSProperties;
  /**
   * CSS style for setting a border radius to create a rounded circle.
   * @type {CSSProperties}
   */

  roundedCircle?: CSSProperties;
  /**
   * CSS style for setting the primary background color with white text.
   * @type {CSSProperties}
   */

  bgPrimary?: CSSProperties;
  /**
   * CSS style for setting the success background color with white text.
   * @type {CSSProperties}
   */

  bgSuccess?: CSSProperties;
  /**
   * CSS style for setting the danger background color with white text.
   * @type {CSSProperties}
   */

  bgDanger?: CSSProperties;
  /**
   * CSS style for transforming text to uppercase.
   * @type {CSSProperties}
   */

  textUppercase?: CSSProperties;
  /**
   * CSS style for setting text to bold.
   * @type {CSSProperties}
   */

  textBold?: CSSProperties;
  /**
   * CSS style for setting the position to fixed.
   * @type {CSSProperties}
   */

  positionFixed?: CSSProperties;
  /**
   * CSS style for setting the width to 100%.
   * @type {CSSProperties}
   */

  fullWidth?: CSSProperties;
  /**
   * CSS style for setting the height to 100%.
   * @type {CSSProperties}
   */
  fullHeight?: CSSProperties;
  /**
   * CSS style for setting both width and height to 100%.
   * @type {CSSProperties}
   */

  fullWidthHeight?: CSSProperties;
  /**
   * CSS style for hiding overflow content.
   * @type {CSSProperties}
   */

  overflowHidden?: CSSProperties;
  /**
   * CSS style for setting the position to absolute.
   * @type {CSSProperties}
   */

  positionAbsolute?: CSSProperties;
  /**
   * CSS style for setting the position to relative.
   * @type {CSSProperties}
   */

  positionRelative?: CSSProperties;
  /**
   * CSS style for setting the position to sticky.
   * @type {CSSProperties}
   */

  positionSticky?: CSSProperties;
  /**
   * CSS style for setting the position to static.
   * @type {CSSProperties}
   */

  positionStatic?: CSSProperties;
  /**
   * Function that returns CSS styles for adding a transition effect.
   * @param {string} property - The CSS property to transition.
   * @param {number} duration - The duration of the transition.
   * @param {number} timingFunction - The timing function of the transition.
   * @param {number} delay - The delay of the transition.
   * @returns {CSSProperties} CSS styles for the transition effect.
   */

  transition?: (
    property: string,
    duration: number,
    timingFunction?: number,
    delay?: number
  ) => CSSProperties;
  /**
   * Function that returns CSS styles for rotating an element.
   * @param {number} degree - The degree of rotation.
   * @returns {CSSProperties} CSS styles for the rotation.
   */

  rotate?: (degree: number) => CSSProperties;
  /**
   * Function that returns CSS styles for scaling an element.
   * @param {number} factor - The scaling factor.
   * @returns {CSSProperties} CSS styles for the scaling.
   */

  scale?: (factor: number) => CSSProperties;
  /**
   * CSS style for a dark box shadow.
   * @type {CSSProperties}
   */

  boxShadowDark?: CSSProperties;
  /**
   * CSS style for removing the outline.
   * @type {CSSProperties}
   */

  outlineNone?: CSSProperties;
  /**
   * CSS style for setting the cursor to a pointer.
   * @type {CSSProperties}
   */

  pointer?: CSSProperties;
  /**
   * CSS style for disabling pointer events.
   * @type {CSSProperties}
   */

  noPointerEvents?: CSSProperties;
  /**
   * CSS style for enabling auto overflow.
   * @type {CSSProperties}
   */

  overflowAuto?: CSSProperties;
  /**
   * CSS style for enabling scroll overflow.
   * @type {CSSProperties}
   */

  overflowScroll?: CSSProperties;
  /**
   * CSS style for making overflow content visible.
   * @type {CSSProperties}
   */

  overflowVisible?: CSSProperties;
  /**
   * CSS style for hiding horizontal overflow content.
   * @type {CSSProperties}
   */

  overflowXHidden?: CSSProperties;
  /**
   * CSS style for hiding vertical overflow content.
   * @type {CSSProperties}
   */

  overflowYHidden?: CSSProperties;
  /**
   * Function that returns CSS styles for creating a gradient background.
   * @param {string} startColor - The starting color of the gradient.
   * @param {string} endColor - The ending color of the gradient.
   * @returns {CSSProperties} CSS styles for the gradient background.
   */

  gradientBg?: (startColor: string, endColor: string) => CSSProperties;
  /**
   * Function that returns CSS styles for setting a background image.
   * @param {string} url - The URL of the image.
   * @param {number} size - The size of the background image.
   * @param {{ x: number, y: number }} position - The position of the background image.
   * @param {boolean} repeat - The repeat behavior of the background image.
   * @returns {CSSProperties} CSS styles for the background image.
   */

  bgImage?: (
    url: string,
    size: number,
    position: { x: number; y: number },
    repeat: boolean
  ) => CSSProperties;
  /**
   * CSS style for a flex container with a column layout.
   * @type {CSSProperties}
   */

  flexColumn?: CSSProperties;
  /**
   * CSS style for a flex container with a row layout.
   * @type {CSSProperties}
   */

  flexRow?: CSSProperties;
  /**
   * CSS style for allowing flex items to wrap.
   * @type {CSSProperties}
   */

  flexWrap?: CSSProperties;
  /**
   * CSS style for preventing flex items from wrapping.
   * @type {CSSProperties}
   */

  flexNoWrap?: CSSProperties;
  /**
   * Function that returns CSS styles for setting the flex grow factor.
   * @param {number} value - The flex grow factor.
   * @returns {CSSProperties} CSS styles for the flex grow factor.
   */

  flexGrow?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the flex shrink factor.
   * @param {number} value - The flex shrink factor.
   * @returns {CSSProperties} CSS styles for the flex shrink factor.
   */

  flexShrink?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the flex basis.
   * @param {number} value - The flex basis.
   * @returns {CSSProperties} CSS styles for the flex basis.
   */

  flexBasisEm?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the flex basis.
   * @param {number} value - The flex basis.
   * @returns {CSSProperties} CSS styles for the flex basis.
   */

  flexBasisPerc?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the flex basis.
   * @param {number} value - The flex basis.
   * @returns {CSSProperties} CSS styles for the flex basis.
   */

  flexBasisPx?: (value: number) => CSSProperties;
  /**
   * CSS style for flex basis automatically
   * @type {CSSProperties}
   */

  flexBasisAuto?: CSSProperties;
  /**
   * CSS style for flex basis maximum content
   * @type {CSSProperties}
   */

  flexBasisMaxC?: CSSProperties;
  /**
   * CSS style for flex basis minimum content
   * @type {CSSProperties}
   */

  flexBasisMinC?: CSSProperties;
  /**
   * CSS style for flex basis fit content
   * @type {CSSProperties}
   */

  flexBasisFitC?: CSSProperties;
  /**
   * CSS style for flex basis content
   * @type {CSSProperties}
   */

  flexBasisC?: CSSProperties;
  /**
   * CSS style for centering content in a flex container.
   * @type {CSSProperties}
   */

  flexCenter?: CSSProperties;
  /**
   * Function that returns CSS styles for setting the letter spacing.
   * @param {number} value - The letter spacing value.
   * @returns {CSSProperties} CSS styles for the letter spacing.
   */

  letterSpacing?: (value: number) => CSSProperties;
  // Style: wordSpacing
  /**
   * Function that returns CSS styles for setting the word spacing.
   * @param {number} value - The word spacing value.
   * @returns {CSSProperties} CSS styles for the word spacing.
   */

  wordSpacing?: (value: number) => CSSProperties;
  /**
   * CSS style for justifying text.
   * @type {CSSProperties}
   */

  textAlignJustify?: CSSProperties;
  /**
   * CSS style for truncating text with an ellipsis.
   * @type {CSSProperties}
   */

  overflowEllipsis?: CSSProperties;
  /**
   * CSS style for setting the cursor to not-allowed.
   * @type {CSSProperties}
   */

  cursorNotAllowed?: CSSProperties;
  /**
   * CSS style for setting the cursor to grab.
   * @type {CSSProperties}
   */

  cursorGrab?: CSSProperties;
  /**
   * CSS style for setting the cursor to grabbing.
   * @type {CSSProperties}
   */

  cursorGrabbing?: CSSProperties;
  /**
   * Function that returns CSS styles for setting the opacity.
   * @param {number} value - The opacity value.
   * @returns {CSSProperties} CSS styles for the opacity.
   */

  opacity?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for applying a blur filter.
   * @param {number} value - The blur value.
   * @returns {CSSProperties} CSS styles for the blur filter.
   */

  filterBlur?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for adjusting the brightness.
   * @param {number} value - The brightness value.
   * @returns {CSSProperties} CSS styles for the brightness adjustment.
   */

  filterBrightness?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for adjusting the contrast.
   * @param {number} value - The contrast value.
   * @returns {CSSProperties} CSS styles for the contrast adjustment.
   */

  filterContrast?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for applying grayscale.
   * @param {number} value - The grayscale value.
   * @returns {CSSProperties} CSS styles for the grayscale effect.
   */

  filterGrayscale?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for rotating the hue.
   * @param {number} value - The hue rotation value.
   * @returns {CSSProperties} CSS styles for the hue rotation.
   */

  filterHueRotate?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for inverting colors.
   * @param {number} value - The invert value.
   * @returns {CSSProperties} CSS styles for the color inversion.
   */

  filterInvert?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for adjusting the opacity.
   * @param {number} value - The opacity value.
   * @returns {CSSProperties} CSS styles for the opacity adjustment.
   */

  filterOpacity?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for saturating colors.
   * @param {number} value - The saturation value.
   * @returns {CSSProperties} CSS styles for the color saturation.
   */

  filterSaturate?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for applying sepia.
   * @param {number} value - The sepia value.
   * @returns {CSSProperties} CSS styles for the sepia effect.
   */

  filterSepia?: (value: number) => CSSProperties;
  /**
   * Function that returns styles for a primary hover state.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the primary hover state.
   * @property {CSSProperties} stylePrimaryHover - Styles for the primary hover state.
   * @property {string} stylePrimaryHover.backgroundColor - Background color for the primary hover state.
   * @property {string} stylePrimaryHover.color - Text color for the primary hover state.
   * @property {CSSProperties} refPrimaryHover - Reference for the primary hover state.
   */

  bgPrimaryHover?: () => {
    refPrimaryHover: React.RefObject<any>;
    stylePrimaryHover: CSSProperties;
  };
  /**
   * Function that returns styles for a success hover state.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the success hover state.
   * @property {CSSProperties} styleSuccessHover - Styles for the success hover state.
   * @property {string} styleSuccessHover.backgroundColor - Background color for the success hover state.
   * @property {string} styleSuccessHover.color - Text color for the success hover state.
   * @property {CSSProperties} refSuccessHover - Reference for the success hover state.
   */

  bgSuccessHover?: () => {
    refSuccessHover: React.RefObject<any>;
    styleSuccessHover: CSSProperties;
  };
  /**
   * Function that returns styles for a danger hover state.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the danger hover state.
   * @property {CSSProperties} styleDangerHover - Styles for the danger hover state.
   * @property {string} styleDangerHover.backgroundColor - Background color for the danger hover state.
   * @property {string} styleDangerHover.color - Text color for the danger hover state.
   * @property {CSSProperties} refDangerHover - Reference for the danger hover state.
   */

  bgDangerHover?: () => {
    refDangerHover: React.RefObject<any>;
    styleDangerHover: CSSProperties;
  };
  /**
   * Function that returns styles for a warning hover state.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the warning hover state.
   * @property {CSSProperties} styleWarningHover - Styles for the warning hover state.
   * @property {string} styleWarningHover.backgroundColor - Background color for the warning hover state.
   * @property {string} styleWarningHover.color - Text color for the warning hover state.
   * @property {CSSProperties} refWarningHover - Reference for the warning hover state.
   */

  bgWarningHover?: () => {
    refWarningHover: React.RefObject<any>;
    styleWarningHover: CSSProperties;
  };
  /**
   * Function that returns styles for an info hover state.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the info hover state.
   * @property {CSSProperties} styleInfoHover - Styles for the info hover state.
   * @property {string} styleInfoHover.backgroundColor - Background color for the info hover state.
   * @property {string} styleInfoHover.color - Text color for the info hover state.
   * @property {CSSProperties} refInfoHover - Reference for the info hover state.
   */

  bgInfoHover?: () => {
    refInfoHover: React.RefObject<any>;
    styleInfoHover: CSSProperties;
  };
  /**
   * Function that returns styles for a secondary hover state.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the secondary hover state.
   * @property {CSSProperties} styleSecondaryHover - Styles for the secondary hover state.
   * @property {string} styleSecondaryHover.backgroundColor - Background color for the secondary hover state.
   * @property {string} styleSecondaryHover.color - Text color for the secondary hover state.
   * @property {CSSProperties} refSecondaryHover - Reference for the secondary hover state.
   */

  bgSecondaryHover?: () => {
    refSecondaryHover: React.RefObject<any>;
    styleSecondaryHover: CSSProperties;
  };
  /**
   * Function that returns styles for a light hover state.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the light hover state.
   * @property {CSSProperties} styleLightHover - Styles for the light hover state.
   * @property {string} styleLightHover.backgroundColor - Background color for the light hover state.
   * @property {string} styleLightHover.color - Text color for the light hover state.
   * @property {CSSProperties} refLightHover - Reference for the light hover state.
   */

  bgLightHover?: () => {
    refLightHover: React.RefObject<any>;
    styleLightHover: CSSProperties;
  };
  /**
   * Function that returns styles for a dark hover state.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the dark hover state.
   * @property {CSSProperties} styleDarkHover - Styles for the dark hover state.
   * @property {string} styleDarkHover.backgroundColor - Background color for the dark hover state.
   * @property {string} styleDarkHover.color - Text color for the dark hover state.
   * @property {CSSProperties} refDarkHover - Reference for the dark hover state.
   */

  bgDarkHover?: () => {
    refDarkHover: React.RefObject<any>;
    styleDarkHover: CSSProperties;
  };
  /**
   * Function that returns styles for a white hover state.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the white hover state.
   * @property {CSSProperties} styleWhiteHover - Styles for the white hover state.
   * @property {string} styleWhiteHover.backgroundColor - Background color for the white hover state.
   * @property {string} styleWhiteHover.color - Text color for the white hover state.
   * @property {CSSProperties} refWhiteHover - Reference for the white hover state.
   */

  bgWhiteHover?: () => {
    refWhiteHover: React.RefObject<any>;
    styleWhiteHover: CSSProperties;
  };
  /**
   * Function that returns styles for a transparent hover state.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the transparent hover state.
   * @property {CSSProperties} styleTransparentHover - Styles for the transparent hover state.
   * @property {string} styleTransparentHover.backgroundColor - Background color for the transparent hover state.
   * @property {string} styleTransparentHover.color - Text color for the transparent hover state.
   * @property {CSSProperties} refTransparentHover - Reference for the transparent hover state.
   */

  bgTransparentHover?: () => {
    refTransparentHover: React.RefObject<any>;
    styleTransparentHover: CSSProperties;
  };
  /**
   * Function that returns styles for a primary active state.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the primary active state.
   * @property {CSSProperties} stylePrimaryActive - Styles for the primary active state.
   * @property {string} stylePrimaryActive.backgroundColor - Background color for the primary active state.
   * @property {string} stylePrimaryActive.color - Text color for the primary active state.
   * @property {CSSProperties} refPrimaryActive - Reference for the primary active state.
   */

  bgPrimaryActive?: () => {
    refPrimaryActive: React.RefObject<any>;
    stylePrimaryActive: CSSProperties;
  };
  /**
   * Function that returns styles for a success active state.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the success active state.
   * @property {CSSProperties} styleSuccessActive - Styles for the success active state.
   * @property {string} styleSuccessActive.backgroundColor - Background color for the success active state.
   * @property {string} styleSuccessActive.color - Text color for the success active state.
   * @property {CSSProperties} refSuccessActive - Reference for the success active state.
   */

  bgSuccessActive?: () => {
    refSuccessActive: React.RefObject<any>;
    styleSuccessActive: CSSProperties;
  };
  /**
   * Function that returns styles for a danger active state.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the danger active state.
   * @property {CSSProperties} styleDangerActive - Styles for the danger active state.
   * @property {string} styleDangerActive.backgroundColor - Background color for the danger active state.
   * @property {string} styleDangerActive.color - Text color for the danger active state.
   * @property {CSSProperties} refDangerActive - Reference for the danger active state.
   */

  bgDangerActive?: () => {
    refDangerActive: React.RefObject<any>;
    styleDangerActive: CSSProperties;
  };
  /**
   * Function that returns styles for an active state with a warning background.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the active state.
   * @property {CSSProperties} styleWarningActive - Styles for the active state with a warning background.
   * @property {string} styleWarningActive.backgroundColor - Background color for the active state.
   * @property {string} styleWarningActive.color - Text color for the active state.
   * @property {CSSProperties} refWarningActive - Reference for the active state.
   */

  bgWarningActive?: () => {
    refWarningActive: React.RefObject<any>;
    styleWarningActive: CSSProperties;
  };
  /**
   * Function that returns styles for an active state with an info background.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the active state.
   * @property {CSSProperties} styleInfoActive - Styles for the active state with an info background.
   * @property {string} styleInfoActive.backgroundColor - Background color for the active state.
   * @property {string} styleInfoActive.color - Text color for the active state.
   * @property {CSSProperties} refInfoActive - Reference for the active state.
   */

  bgInfoActive?: () => {
    refInfoActive: React.RefObject<any>;
    styleInfoActive: CSSProperties;
  };
  /**
   * Function that returns styles for an active state with a secondary background.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the active state.
   * @property {CSSProperties} styleSecondaryActive - Styles for the active state with a secondary background.
   * @property {string} styleSecondaryActive.backgroundColor - Background color for the active state.
   * @property {string} styleSecondaryActive.color - Text color for the active state.
   * @property {CSSProperties} refSecondaryActive - Reference for the active state.
   */

  bgSecondaryActive: () => {
    refSecondaryActive: React.RefObject<any>;
    styleSecondaryActive: CSSProperties;
  };
  /**
   * Function that returns styles for an active state with a light background.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the active state.
   * @property {CSSProperties} styleLightActive - Styles for the active state with a light background.
   * @property {string} styleLightActive.backgroundColor - Background color for the active state.
   * @property {string} styleLightActive.color - Text color for the active state.
   * @property {CSSProperties} refLightActive - Reference for the active state.
   */

  bgLightActive?: () => {
    refLightActive: React.RefObject<any>;
    styleLightActive: CSSProperties;
  };
  /**
   * Function that returns styles for an active state with a dark background.
   * @returns {CSSProperties} CSSProperties containing styles and a ref for the active state.
   * @property {CSSProperties} styleDarkActive - Styles for the active state with a dark background.
   * @property {string} styleDarkActive.backgroundColor - Background color for the active state.
   * @property {string} styleDarkActive.color - Text color for the active state.
   * @property {CSSProperties} refDarkActive - Reference for the active state.
   */

  bgDarkActive?: () => {
    refDarkActive: React.RefObject<any>;
    styleDarkActive: CSSProperties;
  };
  /**
   * Function that returns CSS styles for setting width as a percentage.
   * @param {number} value - The percentage width value.
   * @returns {CSSProperties} CSS styles for setting width as a percentage.
   */

  persWidth?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting width and height as a percentage.
   * @param {number} value - The percentage width and height value.
   * @returns {CSSProperties} CSS styles for setting width and height as a percentage.
   */

  persWH?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting height as a percentage.
   * @param {number} value - The percentage height value.
   * @returns {CSSProperties} CSS styles for setting height as a percentage.
   */

  persHeight?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting width in pixels.
   * @param {number} value - The width value in pixels.
   * @returns {CSSProperties} CSS styles for setting width in pixels.
   */

  pxWidth?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting height in pixels.
   * @param {number} value - The height value in pixels.
   * @returns {CSSProperties} CSS styles for setting height in pixels.
   */

  pxHeight?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting width and height in pixels.
   * @param {number} value - The width and height values in pixels.
   * @returns {CSSProperties} CSS styles for setting width and height in pixels.
   */

  pxWH?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting height in dynamic viewport height units (dvh).
   * @param {number} value - The height value in dynamic viewport height units.
   * @returns {CSSProperties} CSS styles for setting height in dynamic viewport height units.
   */

  dvhHeight?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting width in dynamic viewport width units (dvw).
   * @param {number} value - The width value in dynamic viewport width units.
   * @returns {CSSProperties} CSS styles for setting width in dynamic viewport width units.
   */

  dvwWidth?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting width and height in dynamic viewport units (dvw and dvh).
   * @param {number} value - The width and height values in dynamic viewport units.
   * @returns {CSSProperties} CSS styles for setting width and height in dynamic viewport units.
   */

  dvWH?: (value: number) => CSSProperties;
  /**
   * CSS style for setting the width to fit content.
   * @type {CSSProperties}
   */

  fitContentW?: CSSProperties;
  /**
   * CSS style for setting the height to fit content.
   * @type {CSSProperties}
   */

  fitContentH?: CSSProperties;
  /**
   * CSS style for setting both width and height to fit content.
   * @type {CSSProperties}
   */

  fitContentHW?: CSSProperties;
  /**
   * Function that returns CSS styles for setting the maximum width in pixels.
   * @param {number} value - The maximum width value.
   * @returns {CSSProperties} CSS styles for setting the maximum width.
   */

  maxWidthPx?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the maximum height in pixels.
   * @param {number} value - The maximum height value.
   * @returns {CSSProperties} CSS styles for setting the maximum height.
   */

  maxHeightPx?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the maximum width and height in pixels.
   * @param {number} value - The maximum width and height value.
   * @returns {CSSProperties} CSS styles for setting the maximum width and height.
   */

  maxWHPx?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the minimum width in pixels.
   * @param {number} value - The minimum width value.
   * @returns {CSSProperties} CSS styles for setting the minimum width.
   */

  minWidthPx?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the minimum height in pixels.
   * @param {number} value - The minimum height value.
   * @returns {CSSProperties} CSS styles for setting the minimum height.
   */

  minHeightPx?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the minimum width and height in pixels.
   * @param {number} value - The minimum width and height value.
   * @returns {CSSProperties} CSS styles for setting the minimum width and height.
   */

  minWHPx?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the minimum width as a percentage.
   * @param {number} value - The minimum width as a percentage.
   * @returns {CSSProperties} CSS styles for setting the minimum width as a percentage.
   */

  minHeightPers?: (valu: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the minimum height as a percentage.
   * @param {number} value - The minimum height as a percentage.
   * @returns {CSSProperties} CSS styles for setting the minimum height as a percentage.
   */

  minWidthPers?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the minimum width and height as a percentage.
   * @param {number} value - The minimum width and height as a percentage.
   * @returns {CSSProperties} CSS styles for setting the minimum width and height as a percentage.
   */

  minWHPers?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the maximum width as a percentage.
   * @param {number} value - The maximum width as a percentage.
   * @returns {CSSProperties} CSS styles for setting the maximum width as a percentage.
   */

  maxWidthPers?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the maximum height as a percentage.
   * @param {number} value - The maximum height as a percentage.
   * @returns {CSSProperties} CSS styles for setting the maximum height as a percentage.
   */

  maxHeightPers?: (value: number) => CSSProperties;
  /**
   * Function that returns CSS styles for setting the maximum width and height as a percentage.
   * @param {number} value - The maximum width and height as a percentage.
   * @returns {CSSProperties} CSS styles for setting the maximum width and height as a percentage.
   */

  maxWHPers?: (value: number) => CSSProperties;
  /**
   * Generates styles for a grid system with a specified number of columns and gap.
   * @param {number} [numColumns=1] - Number of columns in the grid.
   * @param {number} [gapValue] - Gap between grid items.
   * @returns {GridSystem} Styles for the grid system.
   */

  gridSystem?: GridSystemFunction;
  /**
   * Create text with a gradient effect.
   * @param {string} angle - Gradient angle (e.g., 'to right', '45deg').
   * @param {string} colors - Comma-separated list of gradient colors (e.g., 'red, blue').
   * @returns {CSSProperties} - CSS styles for text with a gradient effect.
   */

  gradientText?: (angle: string, colors: string) => CSSProperties;
  /**
   * Set responsive spacing between flex items and gird items.
   * @param {number} minSpacing - Minimum spacing value.
   * @param {number} maxSpacing - Maximum spacing value.
   * @returns {CSSProperties} - CSS styles for responsive flex spacing.
   */

  flexibleGap?: (minSpacing: number, maxSpacing: number) => CSSProperties;
  /**
   * Create a neon text effect.
   * @param {string} color - Neon color.
   * @returns {CSSProperties} - CSS styles for neon text effect.
   */

  neonText?: (color: string) => CSSProperties;
  /**
   * Set the styles for a card with rounded corners.
   * @param {string} bgColor - The background color of the card.
   * @param {string} borderRadius - The border radius of the card.
   * @returns {CSSProperties} - The styles for a card with rounded corners.
   */

  roundedCard?: (bgColor: string, borderRadius: string) => CSSProperties;

  /**
   * This function generates an animation property value.
   *
   * @param {string} name - The name of the animation.
   * @param {number} duration - The duration of the animation in seconds.
   * @param {string} timingFunction - The timing function of the animation.
   * @param {number} delay - The delay of the animation in seconds.
   * @param {number} iterationCount - The number of times the animation should repeat.
   * @param {string} direction - The direction of the animation.
   * @param {string} fillMode - The fill mode of the animation.
   * @param {string} playState - The play state of the animation.
   * @return {CSSProperties} The generated animation property value.
   */
  animation?: (
    name: string,
    duration: number,
    timingFunction?: string,
    delay?: number,
    iterationCount?: number,
    direction?: string,
    fillMode?: string,
    playState?: string
  ) => CSSProperties;
};
/**
 * Utility function for handling styles based on hover state.
 *
 * @param {CSSProperties} style - The base style CSSProperties to be applied.
 * @returns {CSSProperties} An CSSProperties containing the reference and hover-based style.
 */

declare function hoverStyle(...styles: CSSProperties[]): {
  hoverRef: React.RefObject<any>;
  hoverStyle: CSSProperties;
};
/**
 * Utility function for handling styles based on the active state.
 *
 * @param {Array of CSSProperties} style - The base style CSSProperties to be applied.
 * @returns {CSSProperties} An CSSProperties containing the reference and active state-based style.
 */

declare function activeStyle(...styles: CSSProperties[]): {
  activeRef: React.RefObject<any>;
  activeStyle: CSSProperties;
};
/**
 * Function that returns a new CSSProperties that is the combination of two or more existing objects.
 * @param  {...CSSProperties} objects - The objects to merge.
 * @returns {CSSProperties} The merged CSSProperties.
 */

declare function mergeStyles(...styles: CSSProperties[]): CSSProperties;

/**
 * Generates a keyframe animation and adds it to the document's adopted style sheets.
 * @param {string} animationName - The name of the keyframe animation.
 * @param {Array<CSSProperties>} styleArrayOfCSSProperties - An array of objects representing the CSS properties of each keyframe.
 * @return {void} This function does not return anything.
 */
declare function animationKeyframe(
  animationName: string,
  styleArrayOfCSSProperties: CSSProperties[]
): void;

declare function applyStyles(selector: string, styles: CSSProperties): void;

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
  hoverStyle,
  activeStyle,
  animationKeyframe,
  applyStyles,
};
