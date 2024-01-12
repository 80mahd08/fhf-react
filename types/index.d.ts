// Import statements
import React from "react";

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
  alt: string;
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
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
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

declare function useHover(): { ref: React.RefObject<any>; isHovered: boolean };

/**
 * React Hook for handling active state based on mouse events.
 *
 * @returns {{ ref: React.MutableRefObject, isActive: boolean }} An object containing a mutable reference to the DOM element and the active state.
 */

declare function useActive(): { ref: React.RefObject<any>; isActive: boolean };

/**
 * React Hook for merging multiple React refs into a single ref object.
 *
 * @param  {...React.RefObject} refs - An array of React ref objects.
 * @returns {React.RefObject} A single ref object that represents the merged refs.
 */

declare function mergeRefs(
  ...refs: React.RefObject<any>[]
): React.RefObject<any>;

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
