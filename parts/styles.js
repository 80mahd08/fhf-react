import {
  isValidColor,
  isValidSize,
  isValidBorderStyle,
  isValidTextDecoration,
  isValidTextTransform,
  isValidJContent,
  isValidAContent,
} from "../tools/validation";
import GridSystemOop from "../tools/GridSystemOop";

const styles = {
  centerPosition: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },

  textCenter: {
    textAlign: "center",
  },
  textLeft: {
    textAlign: "left",
  },
  textRight: {
    textAlign: "right",
  },

  floatLeft: {
    float: "left",
  },
  floatRight: {
    float: "right",
  },
  centerContentFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dispFlex: {
    display: "flex",
  },
  dispInlineFlex: {
    display: "inline-flex",
  },

  dispNone: {
    display: "none",
  },
  dispBlock: {
    display: "block",
  },
  dispInline: {
    display: "inline",
  },
  dispInlineBlock: {
    display: "inline-block",
  },
  dispTable: {
    display: "table",
  },
  dispTableRow: {
    display: "table-row",
  },
  dispTableCell: {
    display: "table-cell",
  },

  dispGrid: {
    display: "grid",
  },
  dispInlineGrid: {
    display: "inline-grid",
  },

  fontColor: (color) => {
    if (isValidColor(color)) {
      return {
        color: color,
      };
    } else {
      throw new Error("Invalid color value in fontColor");
    }
  },
  bg: (color) => {
    if (isValidColor(color)) {
      return {
        backgroundColor: color,
      };
    } else {
      throw new Error("Invalid color value in bg");
    }
  },
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

  margin: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in margin");
    }
    return {
      margin: `${size}px`,
    };
  },
  marginTop: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in marginTop");
    }
    return {
      marginTop: `${size}px`,
    };
  },
  marginBottom: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in marginBottom");
    }
    return {
      marginBottom: `${size}px`,
    };
  },
  marginLeft: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in marginLeft");
    }
    return {
      marginLeft: `${size}px`,
    };
  },
  marginRight: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in marginRight");
    }
    return {
      marginRight: `${size}px`,
    };
  },
  padding: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in padding");
    }
    return {
      padding: `${size}px`,
    };
  },
  paddingTop: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in paddingTop");
    }
    return {
      paddingTop: `${size}px`,
    };
  },
  paddingBottom: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in paddingBottom");
    }
    return {
      paddingBottom: `${size}px`,
    };
  },
  paddingLeft: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in paddingLeft");
    }
    return {
      paddingLeft: `${size}px`,
    };
  },
  paddingRight: (size) => {
    if (!isValidSize(size)) {
      throw new Error("Invalid size value in paddingRight");
    }
    return {
      paddingRight: `${size}px`,
    };
  },
  respMargin: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMargin");
    }
    return {
      margin: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respMarginTop: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMarginTop");
    }
    return {
      marginTop: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respMarginLeft: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMarginLeft");
    }
    return {
      marginLeft: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respMarginRight: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMarginRight");
    }
    return {
      marginRight: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respMarginBottom: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respMarginBottom");
    }
    return {
      marginBottom: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respPadding: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPadding");
    }
    return {
      padding: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respPaddingTop: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPaddingTop");
    }
    return {
      paddingTop: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respPaddingLeft: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPaddingLeft");
    }
    return {
      paddingLeft: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respPaddingRight: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPaddingRight");
    }
    return {
      paddingRight: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  respPaddingBottom: (min, max) => {
    if (!isValidSize(min) || !isValidSize(max)) {
      throw new Error("Invalid size value in respPaddingBottom");
    }
    return {
      paddingBottom: `clamp(${min}px, 5vw, ${max}px)`,
    };
  },
  marginNone: {
    margin: 0,
  },
  paddingNone: {
    padding: 0,
  },
  borderNone: {
    border: 0,
  },
  borderRadiusNone: {
    borderRadius: 0,
  },
  boxShadowNone: {
    boxShadow: "none",
  },
  textShadowNone: {
    textShadow: "none",
  },

  zIndex: (value) => {
    if (!isValidSize(value)) {
      throw new Error("Invalid value in zIndex");
    }
    return {
      zIndex: value,
    };
  },
  textDeco: (value) => {
    if (!isValidTextDecoration(value)) {
      throw new Error("Invalid value in textDeco");
    }
    return {
      textDecoration: value,
    };
  },
  textTrans: (value) => {
    if (!isValidTextTransform(value)) {
      throw new Error("Invalid value in textTrans");
    }
    return {
      textTransform: value,
    };
  },

  transBg: {
    backgroundColor: "transparent",
  },
  rounded: {
    borderRadius: "5px",
  },
  extraRounded: {
    borderRadius: "25px",
  },
  megaRounded: {
    borderRadius: "45px",
  },
  superRounded: {
    borderRadius: "65px",
  },
  ultraRounded: {
    borderRadius: "85px",
  },
  extremeRounded: {
    borderRadius: "105px",
  },
  radicalRounded: {
    borderRadius: "125px",
  },
  hyperRounded: {
    borderRadius: "145px",
  },
  ultimateRounded: {
    borderRadius: "165px",
  },
  maxRounded: {
    borderRadius: "185px",
  },
  beyondRounded: {
    borderRadius: "205px",
  },

  flexJContent: (type) => {
    if (!isValidJContent(type)) {
      throw new Error("Invalid value in flexJContent");
    }
    return {
      justifyContent: type,
    };
  },

  flexAContent: (type) => {
    if (!isValidAContent(type)) {
      throw new Error("Invalid value in flexAContent");
    }
    return {
      alignItems: type,
    };
  },

  RespFontSize: (min, max) => ({
    fontSize: `clamp(${min}px, 4vw, ${max}px)`,
  }),
  RespLineHeight: (min, max) => ({
    lineHeight: `clamp(${min}px, 4vw, ${max}px)`,
  }),
  respFontWeight: (min, max) => ({
    fontWeight: `clamp(${min}, 4vw, ${max})`,
  }),
  boxShadowLight: {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },

  textPrimary: {
    color: "#007bff",
  },

  textSecondary: {
    color: "#6c757d",
  },

  bgLight: {
    backgroundColor: "#f8f9fa",
  },

  roundedCircle: {
    borderRadius: "50%",
  },
  bgPrimary: {
    backgroundColor: "#007bff",
    color: "#fff",
  },

  bgSuccess: {
    backgroundColor: "#28a745",
    color: "#fff",
  },

  bgDanger: {
    backgroundColor: "#dc3545",
    color: "#fff",
  },

  textUppercase: {
    textTransform: "uppercase",
  },

  textBold: {
    fontWeight: "bold",
  },
  positionFixed: {
    position: "fixed",
  },

  fullWidth: {
    width: "100%",
  },
  fullHeight: {
    height: "100%",
  },
  fullWidthHeight: {
    width: "100%",
    height: "100%",
  },
  overflowHidden: {
    overflow: "hidden",
  },
  positionAbsolute: {
    position: "absolute",
  },
  positionRelative: {
    position: "relative",
  },
  positionSticky: {
    position: "sticky",
  },
  positionStatic: {
    position: "static",
  },
  transition: (property, duration, timingFunction, delay) => {
    return {
      transition: `${property} ${duration}s ${timingFunction}s ${delay}s`,
    };
  },

  rotate: (degree) => {
    return {
      transform: `rotate(${degree}deg)`,
    };
  },

  scale: (factor) => {
    return {
      transform: `scale(${factor})`,
    };
  },
  boxShadowDark: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },

  outlineNone: {
    outline: "none",
  },

  pointer: {
    cursor: "pointer",
  },

  noPointerEvents: {
    pointerEvents: "none",
  },

  overflowAuto: {
    overflow: "auto",
  },

  overflowScroll: {
    overflow: "scroll",
  },

  overflowVisible: {
    overflow: "visible",
  },

  overflowXHidden: {
    overflowX: "hidden",
  },

  overflowYHidden: {
    overflowY: "hidden",
  },

  gradientBg: (startColor, endColor) => {
    return {
      background: `linear-gradient(${startColor}, ${endColor})`,
    };
  },

  bgImage: (url, size, position, repeat) => {
    const { x, y } = position;
    return {
      background: `url(${url}) ${size}px ${x}px ${y}px ${
        repeat ? "repeat" : "no-repeat"
      }`,
    };
  },

  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },

  flexRow: {
    display: "flex",
    flexDirection: "row",
  },

  flexWrap: {
    flexWrap: "wrap",
  },

  flexNoWrap: {
    flexWrap: "nowrap",
  },

  flexGrow: (value) => {
    return {
      flexGrow: value,
    };
  },

  flexShrink: (value) => {
    return {
      flexShrink: value,
    };
  },

  flexBasisEm: (value) => {
    return {
      flexBasis: `${value}em`,
    };
  },
  flexBasisPerc: (value) => {
    return {
      flexBasis: `${value}%`,
    };
  },
  flexBasisPx: (value) => {
    return {
      flexBasis: `${value}px`,
    };
  },
  flexBasisAuto: {
    flexBasis: "auto",
  },
  flexBasisMaxC: {
    flexBasis: "max-content",
  },
  flexBasisMinC: {
    flexBasis: "min-content",
  },
  flexBasisFitC: {
    flexBasis: "fit-content",
  },
  flexBasisC: {
    flexBasis: "content",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  letterSpacing: (value) => {
    return {
      letterSpacing: `${value}px`,
    };
  },

  wordSpacing: (value) => {
    return {
      wordSpacing: `${value}px`,
    };
  },

  textAlignJustify: {
    textAlign: "justify",
  },

  overflowEllipsis: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  cursorNotAllowed: {
    cursor: "not-allowed",
  },

  cursorGrab: {
    cursor: "grab",
  },

  cursorGrabbing: {
    cursor: "grabbing",
  },

  opacity: (value) => {
    return {
      opacity: value,
    };
  },

  filterBlur: (value) => {
    return {
      filter: `blur(${value}px)`,
    };
  },

  filterBrightness: (value) => {
    return {
      filter: `brightness(${value}%)`,
    };
  },

  filterContrast: (value) => {
    return {
      filter: `contrast(${value}%)`,
    };
  },

  filterGrayscale: (value) => {
    return {
      filter: `grayscale(${value}%)`,
    };
  },

  filterHueRotate: (value) => {
    return {
      filter: `hue-rotate(${value}deg)`,
    };
  },

  filterInvert: (value) => {
    return {
      filter: `invert(${value}%)`,
    };
  },

  filterOpacity: (value) => {
    return {
      filter: `opacity(${value}%)`,
    };
  },

  filterSaturate: (value) => {
    return {
      filter: `saturate(${value}%)`,
    };
  },

  filterSepia: (value) => {
    return {
      filter: `sepia(${value}%)`,
    };
  },
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
  persWidth: (value) => {
    return {
      width: `${value}%`,
    };
  },
  persWH: (value) => {
    return {
      width: `${value}%`,
      height: `${value}%`,
    };
  },
  persHeight: (value) => {
    return {
      height: `${value}%`,
    };
  },
  pxWidth: (value) => {
    return {
      width: `${value}px`,
    };
  },
  pxHeight: (value) => {
    return {
      height: `${value}px`,
    };
  },
  pxWH: (value) => {
    return {
      width: `${value}px`,
      height: `${value}px`,
    };
  },
  dvhHeight: (value) => {
    return {
      height: `${value}dvh`,
    };
  },
  dvwWidth: (value) => {
    return {
      width: `${value}dvw`,
    };
  },
  dvWH: (value) => {
    return {
      width: `${value}dvw`,
      height: `${value}dvh`,
    };
  },
  fitContentW: {
    width: "fit-content",
  },
  fitContentH: {
    height: "fit-content",
  },
  fitContentHW: {
    width: "fit-content",
    height: "fit-content",
  },
  maxWidthPx: (value) => {
    return {
      width: "100%",
      maxWidth: `${value}px`,
    };
  },
  maxHeightPx: (value) => {
    return {
      width: "100%",
      maxHeight: `${value}px`,
    };
  },
  maxWHPx: (value) => {
    return {
      width: "100%",
      maxWidth: `${value}px`,
      maxHeight: `${value}px`,
    };
  },
  minWidthPx: (value) => {
    return {
      width: "100%",
      minWidth: `${value}px`,
    };
  },
  minHeightPx: (value) => {
    return {
      width: "100%",
      minHeight: `${value}px`,
    };
  },
  minWHPx: (value) => {
    return {
      width: "100%",
      minWidth: `${value}px`,
      minHeight: `${value}px`,
    };
  },
  minHeightPers: (value) => {
    return {
      width: "100%",
      minWidth: `${value}%`,
    };
  },
  minWidthPers: (value) => {
    return {
      width: "100%",
      minHeight: `${value}%`,
    };
  },
  minWHPers: (value) => {
    return {
      width: "100%",
      minWidth: `${value}%`,
      minHeight: `${value}%`,
    };
  },
  maxWidthPers: (value) => {
    return {
      width: "100%",
      maxWidth: `${value}%`,
    };
  },
  maxHeightPers: (value) => {
    return {
      width: "100%",
      maxHeight: `${value}%`,
    };
  },
  maxWHPers: (value) => {
    return {
      width: "100%",
      maxWidth: `${value}%`,
      maxHeight: `${value}%`,
    };
  },
  gradientText: (angle, colors) => ({
    backgroundImage: `linear-gradient(${angle}, ${colors})`,
    WebkitBackgroundClip: "text",
    color: "transparent",
  }),
  flexibleGap: (minSpacing, maxSpacing) => ({
    gap: `clamp(${minSpacing}px, 2vw, ${maxSpacing}px)`,
  }),
  neonText: (color) => ({
    textShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`,
  }),
  roundedCard: (bgColor, borderRadius) => ({
    backgroundColor: bgColor,
    borderRadius,
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }),
  stickyHeader: (scrollThreshold) => {
    const stickyHeaderRef = useRef();
    useEffect(() => {
      const handleScroll = () => {
        const isSticky = window.scrollY > scrollThreshold;
        stickyHeaderRef.current.style.position = isSticky ? "fixed" : "static";
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [scrollThreshold]);
    return stickyHeaderRef;
  },
  gridTemplateAreas: (areas) => ({
    gridTemplateAreas: areas.map((areas) => `"${areas}"`).join(" "),
  }),
  animation: (
    name, // Required for the animation name
    options = {} // Optional object for overriding defaults
  ) => {
    // Define default values for animation properties:
    const defaults = {
      duration: "1s",
      timingFunction: "ease",
      delay: 0,
      iterationCount: 1,
      direction: "normal",
      fillMode: "none",
      playState: "running",
    };
    const validatedOptions = { ...defaults, ...options };

    // Validate numeric properties
    const validateNumber = (prop, value) => {
      if (
        typeof value !== "number" ||
        isNaN(value) ||
        (prop === "delay" && (value < 0 || value > 60))
      ) {
        console.warn(
          `Invalid ${prop} value: "${value}". Using default "${defaults[prop]}".`
        );
        return defaults[prop];
      }
      return value;
    };

    validatedOptions.duration = validateNumber(
      "duration",
      validatedOptions.duration
    );
    validatedOptions.delay = validateNumber("delay", validatedOptions.delay);
    validatedOptions.iterationCount = validateNumber(
      "iterationCount",
      Math.max(1, validatedOptions.iterationCount)
    ); // Ensure iterationCount is at least 1

    // Validate string properties with allowed values
    const validateString = (prop, value, allowedValues) => {
      if (typeof value !== "string" || !allowedValues.includes(value.trim())) {
        console.warn(
          `Invalid ${prop}: "${value}". Using default "${defaults[prop]}".`
        );
        return defaults[prop];
      }
      return value.trim();
    };

    validatedOptions.timingFunction = validateString(
      "timingFunction",
      validatedOptions.timingFunction,
      ["linear", "ease", "ease-in", "ease-out", "ease-in-out"]
    );
    validatedOptions.direction = validateString(
      "direction",
      validatedOptions.direction,
      ["normal", "reverse", "alternate", "alternate-reverse"]
    );
    validatedOptions.fillMode = validateString(
      "fillMode",
      validatedOptions.fillMode,
      ["none", "forwards", "backwards", "both"]
    );
    validatedOptions.playState = validateString(
      "playState",
      validatedOptions.playState,
      ["running", "paused"]
    );

    // Build the animation string
    const animation = `${name} ${validatedOptions.duration} ${validatedOptions.timingFunction} ${validatedOptions.delay}s ${validatedOptions.iterationCount} ${validatedOptions.direction} ${validatedOptions.fillMode} ${validatedOptions.playState}`;

    return { animation };
  },
};

export default styles;
