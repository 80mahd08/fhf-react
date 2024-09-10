import "fhf/dist/layout.css";
import "fhf/dist/normalize.css";
import "fhf/dist/base.css";
import "fhf/dist/flexbox.css";

import React from "react";
import { useEffect, useState } from "react";

import "./tools/cssTools.css";
import { mergeStyles } from "./custom-func";

function ClearFix() {
	return <div className="clear-fix"></div>;
}

function Container({ children, style = {}, className = "", ...otherProps }) {
	return (
		<div style={style} className={`container ${className}`} {...otherProps}>
			{children}
		</div>
	);
}

function FlexContainer({
	children,
	style = {},
	className = "",
	...otherProps
}) {
	return (
		<div
			className={`flex-container ${className}`}
			style={style}
			{...otherProps}>
			{children}
		</div>
	);
}

function FlexItem({ children, style = {}, className = "", ...otherProps }) {
	return (
		<div className={`flex-item ${className}`} style={style} {...otherProps}>
			{children}
		</div>
	);
}

function DivV({
	children,
	className = "",
	style = {},
	visibleIn = "",
	hiddenIn = "",
	...otherProps
}) {
	if (style) {
	}

	if (visibleIn === "" && hiddenIn === "") {
		console.warn(
			"visibleIn and hiddenIn cannot be empty at the same time (use div instead of DivV)"
		);
	}
	const visibilityClasses = {
		xs: "visible-xs",
		sm: "visible-sm",
		md: "visible-md",
		lg: "visible-lg",
	};

	const hiddenClasses = {
		xs: "hidden-xs",
		sm: "hidden-sm",
		md: "hidden-md",
		lg: "hidden-lg",
	};

	const getVisibilityClass = (visibility, classes) =>
		(visibility && classes[visibility]) || "";

	const combinedClasses = `${getVisibilityClass(
		visibleIn,
		visibilityClasses
	)} ${getVisibilityClass(hiddenIn, hiddenClasses)} ${className}`;

	return (
		<div style={style} className={combinedClasses} {...otherProps}>
			{children}
		</div>
	);
}

function RespImg({ src, alt, style = {}, className = "", ...otherProps }) {
	if (src === undefined || src === "") {
		throw new Error("src cannot be undefined or empty");
	}
	const respImg = {
		maxWidth: "99%",
		height: "auto",
	};

	const combinedStyles = {
		...respImg,
		...style,
	};

	return (
		<img
			src={src}
			alt={alt}
			style={combinedStyles}
			className={className}
			{...otherProps}
		/>
	);
}

function RespVideo({ src = "", style = {}, className = "", ...otherProps }) {
	if (src === undefined || src === "") {
		throw new Error("src cannot be undefined or empty");
	}
	const respVideo = {
		maxWidth: "99%",
		height: "auto",
	};

	const combinedStyles = {
		...respVideo,
		...style,
	};
	return (
		<video
			src={src}
			style={combinedStyles}
			className={className}
			{...otherProps}
		/>
	);
}

function ClippedText({
	children,
	url,
	element: Element = "p",
	style = {},
	className = "",
	...otherProps
}) {
	// Merge the background image style with additional styles
	const mergedStyle = mergeStyles(
		{
			backgroundImage: `url(${url})`,
			// Add any other background-related styles here
		},
		style
	);

	return (
		<Element
			style={mergedStyle}
			className={`clipped-text ${className}`}
			{...otherProps}>
			{children}
		</Element>
	);
}

function RespGridFill({
	children,
	size = -1,
	style = {},
	gap = -1,
	className = "",
	...otherProps
}) {
	if (size === null || size === undefined || size === -1) {
		throw new Error("size cannot be null or undefined or -1");
	}
	const withOutGap = {
		...style,
		display: "grid",
		gridTemplateColumns: `repeat(auto-fill, minmax(${size}px, 0fr))`,
	};
	const withGap = {
		...style,
		display: "grid",
		gridTemplateColumns: `repeat(auto-fill, minmax(${size}px, 0fr))`,
		gap: `${gap}px`,
	};

	if (gap === "") {
		return (
			<div style={withOutGap} className={`${className}`} {...otherProps}>
				{children}
			</div>
		);
	} else {
		return (
			<div style={withGap} className={`${className}`} {...otherProps}>
				{children}
			</div>
		);
	}
}

function RespGridFit({
	children,
	size = -1,
	style = {},
	gap = -1,
	className = "",
	...otherProps
}) {
	if (size === null || size === undefined || size === -1) {
		throw new Error("size cannot be null or undefined or -1");
	}
	const withOutGap = {
		...style,
		display: "grid",
		gridTemplateColumns: `repeat(auto-fit, minmax(${size}px, 0fr))`,
	};
	const withGap = {
		...style,
		display: "grid",
		gridTemplateColumns: `repeat(auto-fit, minmax(${size}px, 0fr))`,
		gap: `${gap}px`,
	};

	if (gap === "") {
		return (
			<div style={withOutGap} className={`${className}`} {...otherProps}>
				{children}
			</div>
		);
	} else {
		return (
			<div style={withGap} className={`${className}`} {...otherProps}>
				{children}
			</div>
		);
	}
}

function UnstyledList({ children, className = "", style = {}, ...otherProps }) {
	const listStyle = {
		listStyleType: "none",
		padding: -1,
		margin: -1,
	};
	const combinedStyles = {
		...listStyle,
		...style,
	};
	return (
		<ul style={combinedStyles} className={`${className}`} {...otherProps}>
			{children}
		</ul>
	);
}

function NavUl({ children, style = {}, className = "", ...otherProps }) {
	const listStyle = {
		listStyleType: "none",
		padding: -1,
		margin: -1,
		display: "flex",
		justifyContent: "space-between",
	};
	const combinedStyles = {
		...listStyle,
		...style,
	};

	return (
		<ul style={combinedStyles} className={`${className}`} {...otherProps}>
			{children}
		</ul>
	);
}

function RespHeading({
	level = 0,
	style = {},
	className = "",
	children,
	...otherProps
}) {
	if (level < 0 || level > 6) {
		throw new Error(
			"Incorrect element value in RespHeading; it should be level between 0 and 6"
		);
	} else {
		const responsiveTypography = {
			h0: {
				fontSize: "clamp(31px, 4vw, 48px)",
			},
			h1: {
				fontSize: "clamp(23px, 3vw, 36px)",
			},
			h2: {
				fontSize: "clamp(19px, 2.5vw, 30px)",
			},
			h3: {
				fontSize: "clamp(19px, 2.5vw, 30px)",
			},
			h4: {
				fontSize: "clamp(15px, 2vw, 20px)",
			},
			h5: {
				fontSize: "clamp(13px, 1.5vw, 18px)",
			},
		};
		const element = `h${level}`;
		const combinedStyles = {
			...responsiveTypography[element],
			...style,
		};

		return React.createElement(
			element,
			{
				style: combinedStyles,
				className: `${className}`,
				...otherProps,
			},
			children
		);
	}
}

function RespP({ style = {}, className = "", children, ...otherProps }) {
	const combinedStyles = {
		fontSize: "clamp(15px, 1.2vw, 20px)",
		...style,
	};

	return (
		<p style={combinedStyles} className={`${className}`} {...otherProps}>
			{children}
		</p>
	);
}

function Circle({ children, style = {}, className = "", ...otherProps }) {
	const circleStyle = {
		borderRadius: "49%",
	};
	const combinedStyles = {
		...circleStyle,
		...style,
	};
	return (
		<div style={combinedStyles} className={`${className}`} {...otherProps}>
			{children}
		</div>
	);
}

function RespBackgImg({
	element = "div",
	url = "",
	children,
	style = {},
	className = "",
	...otherProps
}) {
	if (url === "") {
		throw new Error(" url cannot be empty in ResBackgImg");
	}
	if (
		element !== "div" &&
		element !== "section" &&
		element != "header" &&
		element != "footer"
	) {
		throw new Error(
			" incorrect element value in ResBackgImg it should be one of those (div,section,header,footer)"
		);
	} else {
		const respBackgImg = {
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
		};
		const combinedStyles = {
			backgroundImage: `url(${url})`,
			...respBackgImg,
			...style,
		};
		return React.createElement(
			element,
			{
				style: combinedStyles,
				className: `${className}`,
				...otherProps,
			},
			children
		);
	}
}

function TypingAnimationElement({
	text,
	cursorColor,
	element = "span", // Default element type
	style = {},
	className = "",
	speed = -1.5,
	...otherProps
}) {
	const [finalText, setFinalText] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			setFinalText((prevText) => {
				if (prevText.length === text.length) {
					return "";
				}
				return prevText + text[finalText.length];
			});
		}, speed * 99);
		return () => {
			clearInterval(interval);
		};
	});

	return React.createElement(
		element,
		{
			style: mergeStyles(style, { "--typing-color": cursorColor }),
			className: `typing ${className}`,
			...otherProps,
		},
		finalText
	);
}

export {
	TypingAnimationElement,
	ClippedText,
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
};
