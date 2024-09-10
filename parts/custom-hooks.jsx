import { useRef, useCallback, useState } from "react";

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

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event) => {
		setMousePosition({ x: event.clientX, y: event.clientY });
	};

	useEffect(() => {
		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return mousePosition;
};

export { useActive, useHover, useMediaQuery, useMediaStyle, useMousePosition };
