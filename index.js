//import part

import "fhf/dist/css/FHF.min.css"
import React from "react";
import { isValidColor , isValidSize , isValidBorderStyle , isValidTextDecoration , isValidTextTransform , isValidJContent , isValidAContent} from "./tools/validation"

// component part

function ClearFix() {
    return (
        <div className='clearFix'></div>
    )
}

function Container({ children , style = {} , className = "" , ...otherProps}) {
    return (
        <div 
            style={style} 
            className={`container ${className}`} 
            {...otherProps}>
                {children}
        </div>
    )
}

function FlexContainer({ children, style = {} , className = "" , ...otherProps }){
    return (
        <div 
            className={`flex-container ${className}`} 
            style={style}
            {...otherProps}>
                {children}
        </div>
    )
}

function FlexItem({ children, style = {} , className = "" , ...otherProps }) {
    return (
        <div 
            className={`flex-item ${className}`} 
            style={style}
            {...otherProps}>
                {children}
        </div>
    )
}

function DivV({ children, className = "" , style = {} , visibleIn = "", hiddenIn = "", ...otherProps }) {
    if (visibleIn === "" && hiddenIn === "") {
        console.warn("visibleIn and hiddenIn cannot be empty at the same time (use div instead of DivV)");
    }
    const visibilityClasses = {
        xs: "visibleXs",
        sm: "visibleSm",
        md: "visibleMd",
        lg: "visibleLg",
    };

    const hiddenClasses = {
        xs: "hiddenXs",
        sm: "hiddenSm",
        md: "hiddenMd",
        lg: "hiddenLg",
    };

    const getVisibilityClass = (visibility, classes) => (visibility && classes[visibility]) || "";

    const combinedClasses = `${getVisibilityClass(visibleIn, visibilityClasses)} ${getVisibilityClass(hiddenIn, hiddenClasses)} ${className}`;

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
        maxWidth: '100%',
        height: 'auto',
    };

    const combinedStyles = {
        ...respImg,
        ...style,
    };

    return (
        <img src={src} alt={alt} style={combinedStyles} className={className} {...otherProps} />
    );
}

function RespVideo({ src = "", alt, style = {}, className = "", ...otherProps }){
    if(src === undefined || src === ""){
        throw new Error("src cannot be undefined or empty");
    }
    const respVideo = {
        maxWidth: '100%',
        height: 'auto',
    };

    const combinedStyles = {
        ...respVideo,
        ...style,
    };
    return (
        <video src={src} alt={alt} style={combinedStyles} className={className} {...otherProps} />
    );
}

function RespGridFill({ children, size = 0 , style = {} , gap = 0 , className = "" , ...otherProps }){
    if (size === null || size === undefined || size === 0) {
        throw new Error("size cannot be null or undefined or 0");
    }
    const withOutGap = {
        ...style,
        display : "grid", 
        gridTemplateColumns: `repeat(auto-fill, minmax(${size}px, 1fr))` 
    }
    const withGap = {
        ...style,
        display : "grid", 
        gridTemplateColumns: `repeat(auto-fill, minmax(${size}px, 1fr))`,
        gap: `${gap}px`,
    }

    if (gap === "") {
        return (
            <div style={withOutGap} className={`${className}`} {...otherProps}>
                {children}
            </div>
        )
    }else{
        return (
            <div style={withGap} className={`${className}`} {...otherProps}>
                {children}
            </div>
        )
    }

}

function RespGridFit({ children, size = 0 , style = {} , gap = 0 , className = "" , ...otherProps }){
    if (size === null || size === undefined || size === 0) {
        throw new Error("size cannot be null or undefined or 0");
    }
    const withOutGap = {
        ...style,
        display : "grid", 
        gridTemplateColumns: `repeat(auto-fit, minmax(${size}px, 1fr))` 
    }
    const withGap = {
        ...style,
        display : "grid", 
        gridTemplateColumns: `repeat(auto-fit, minmax(${size}px, 1fr))`,
        gap: `${gap}px`,
    }

    if (gap === "") {
        return (
            <div style={withOutGap} className={`${className}`} {...otherProps}>
                {children}
            </div>
        )
    }else{
        return (
            <div style={withGap} className={`${className}`} {...otherProps}>
                {children}
            </div>
        )
    }

}

function UnstyledList ({ children , className = "" , style = {} , ...otherProps }) {
    const listStyle = {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    }
    const combinedStyles = {
        ...listStyle,
        ...style,
    }
    return (
        <ul style={combinedStyles} className={`${className}`} {...otherProps}>
            {children}
        </ul>
    )        
}


function NavUl({ children , style = {} , className = "" , ...otherProps}){
    const listStyle = {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent:'space-between',
    }
    const combinedStyles = {
        ...listStyle,
        ...style,
    }

    return (
        <ul style={combinedStyles} className={`${className}`} {...otherProps}>
            {children}
        </ul>
    )
}

function RespHeading({ element = "h1", style = {}, className = "", children, ...otherProps }) {
    if (element !== "h1" && element !== "h2" && element !== "h3" && element !== "h4" && element !== "h5" && element !== "h6") {
        throw new Error("Incorrect element value in RespHeading; it should be one of those (h1, h2, h3, h4, h5, h6)");
    } else {
        const responsiveTypography = {
            h1: {
                fontSize: 'clamp(32px, 4vw, 48px)',
            },
            h2: {
                fontSize: 'clamp(24px, 3vw, 36px)',
            },
            h3: {
                fontSize: 'clamp(20px, 2.5vw, 30px)',
            },
            h4: {
                fontSize: 'clamp(20px, 2.5vw, 30px)',
            },
            h5: {
                fontSize: 'clamp(16px, 2vw, 20px)',
            },
            h6: {
                fontSize: 'clamp(14px, 1.5vw, 18px)',
            },
        };
    
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

function Circle({ children , style = {} , className = "", ...otherProps }){
    const circleStyle = {
        borderRadius: '50%',
    }
    const combinedStyles = {
        ...circleStyle,
        ...style,
    }
    return (
        <div style={combinedStyles} className={`${className}`} {...otherProps}>
            {children}
        </div>
    )
}


function ResBackgImg({ element = "div" , url = '' ,children , style = {} , className = "" , ...otherProps}){
    if (url === "") {
        throw new Error(" url cannot be empty in ResBackgImg");
    }
    if(element!== "div" && element!== "section" && element != "header" && element != "footer"){
        throw new Error(" incorrect element value in ResBackgImg it should be one of those (div,section,header,footer)");
    }else{
        const respBackgImg = {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }
        const combinedStyles = {
            backgroundImage: `url(${url})`,
            ...respBackgImg,
            ...style
        }
        return React.createElement(
            element,
            {
                style: combinedStyles,
                className: `${className}`,
                ...otherProps,
            },
            children
        )
    }
}

const styles = {
    // Positioning
    centerPosition: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },

    // Text Alignment
    textCenter: {
        textAlign: 'center',
    },
    textLeft: {
        textAlign: 'left',
    },
    textRight: {
        textAlign: 'right',
    },

    // Floats
    floatLeft: {
        float: 'left',
    },
    floatRight: {
        float: 'right',
    },

    // Flexbox
    centerContentFlex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dispFlex: {
        display: 'flex',
    },
    dispInlineFlex: {
        display: 'inline-flex',
    },

    // Display
    dispNone: {
        display: 'none',
    },
    dispBlock: {
        display: 'block',
    },
    dispInline: {
        display: 'inline',
    },
    dispInlineBlock: {
        display: 'inline-block',
    },
    dispTable: {
        display: 'table',
    },
    dispTableRow: {
        display: 'table-row',
    },
    dispTableCell: {
        display: 'table-cell',
    },
    dispGrid: {
        display: 'grid',
    },
    dispInlineGrid: {
        display: 'inline-grid',
    },
    fontColor : (color)=>{
        if (isValidColor(color)) {
            return {
                color: color,
            };
        }else{
            throw new Error("Invalid color value in fontColor")
        }
    },
    bg : (color) => {
        if (isValidColor(color)) {
            return {
                backgroundColor: color,
            }
        }else{
            throw new Error("Invalid color value in bg")
        }
    },
    border : (size , type , color )=>{
        if(!isValidSize(size) || !isValidBorderStyle(type) || !isValidColor(color)){
            throw new Error("Invalid size , type or color value in border")
        }
        return {
            border : `${size}px ${type} ${color}`
        }
    },
    margin: (size) => {
        if(!isValidSize(size)){
            throw new Error("Invalid size value in margin")
        }
        return {
            margin: `${size}px`,
        }
    },
    marginTop: (size) => {
        if(!isValidSize(size)){
            throw new Error("Invalid size value in marginTop")
        }
        return {
            marginTop: `${size}px`,
        }
    },
    marginLeft: (size) => {
        if(!isValidSize(size)){
            throw new Error("Invalid size value in marginLeft")
        }
        return {
            marginLeft: `${size}px`,
        }
    },
    marginRight: (size) => {
        if(!isValidSize(size)){
            throw new Error("Invalid size value in marginRight")
        }
        return {
            marginRight: `${size}px`,
        }
    },
    marginBottom: (size) => {
        if(!isValidSize(size)){
            throw new Error("Invalid size value in marginBottom")
        }
        return {
            marginBottom: `${size}px`,
        }
    },
    padding: (size) => {
        if(!isValidSize(size)){
            throw new Error("Invalid size value in padding")
        }
        return {
            padding: `${size}px`,
        }
    },
    paddingTop: (size) => {
        if(!isValidSize(size)){
            throw new Error("Invalid size value in paddingTop")
        }
        return {
            paddingTop: `${size}px`,
        }
    },
    paddingLeft: (size) => {
        if(!isValidSize(size)){
            throw new Error("Invalid size value in paddingLeft")
        }
        return {
            paddingLeft: `${size}px`,
        }
    },
    paddingRight: (size) => {
        if(!isValidSize(size)){
            throw new Error("Invalid size value in paddingRight")
        }
        return {
            paddingRight: `${size}px`,
        }
    },
    paddingBottom: (size) => {
        if(!isValidSize(size)){
            throw new Error("Invalid size value in paddingBottom")
        }
        return {
            paddingBottom: `${size}px`,
        }
    },
    respMargin: (size1 , size2) => {
        if(!isValidSize(size1) || !isValidSize(size2)){
            throw new Error("Invalid size value in respMargin")
        }
        return {
            margin: `clamp( ${size1}px , 5vw , ${size2}px )`,
        }
    
    },
    respMarginTop: (size1 , size2) => {
        if(!isValidSize(size1) || !isValidSize(size2)){
            throw new Error("Invalid size value in respMarginTop")
        }
        return {
            marginTop: `clamp( ${size1}px , 5vw , ${size2}px )`,
        }
    },
    respMarginLeft: (size1, size2) => {
        if(!isValidSize(size1) ||!isValidSize(size2)){
            throw new Error("Invalid size value in respMarginLeft")
        }
        return {
            marginLeft: `clamp( ${size1}px, 5vw, ${size2}px )`,
        }
    },
    respMarginRight: (size1, size2) => {
        if(!isValidSize(size1) ||!isValidSize(size2)){
            throw new Error("Invalid size value in respMarginRight")
        }
        return {
            marginRight: `clamp( ${size1}px, 5vw, ${size2}px )`,
        }
    },
    respMarginBottom: (size1, size2) => {
        if(!isValidSize(size1) ||!isValidSize(size2)){
            throw new Error("Invalid size value in respMarginBottom")
        }
        return {
            marginBottom: `clamp( ${size1}px, 5vw, ${size2}px )`,
        }
    },
    respPadding: (size1, size2) => {
        if(!isValidSize(size1) ||!isValidSize(size2)){
            throw new Error("Invalid size value in respPadding")
        }
        return {
            padding: `clamp( ${size1}px, 5vw, ${size2}px )`,
        }
    },
    respPaddingTop: (size1, size2) => {
        if(!isValidSize(size1) ||!isValidSize(size2)){
            throw new Error("Invalid size value in respPaddingTop")
        }
        return {
            paddingTop: `clamp( ${size1}px, 5vw, ${size2}px )`,
        }
    },
    respPaddingLeft: (size1, size2) => {
        if(!isValidSize(size1) ||!isValidSize(size2)){
            throw new Error("Invalid size value in respPaddingLeft")
        }
        return {
            paddingLeft: `clamp( ${size1}px, 5vw, ${size2}px )`,
        }
    },
    respPaddingRight: (size1, size2) => {
        if(!isValidSize(size1) ||!isValidSize(size2)){
            throw new Error("Invalid size value in respPaddingRight")
        }
        return {
            paddingRight: `clamp( ${size1}px, 5vw, ${size2}px )`,
        }
    },
    respPaddingBottom: (size1, size2) => {
        if(!isValidSize(size1) ||!isValidSize(size2)){
            throw new Error("Invalid size value in respPaddingBottom")
        }
        return {
            paddingBottom: `clamp( ${size1}px, 5vw, ${size2}px )`,
        }
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
        boxShadow: 'none',
    },
    textShadowNone: {
        textShadow: 'none',
    },
    zIndex: (value) => {
        if(!isValidSize(value)){
            throw new Error("Invalid value in zIndex")
        }
        return {
            zIndex: value,
        }
    },
    textDeco: (value) => {
        if(!isValidTextDecoration(value)){
            throw new Error("Invalid value in textDeco")
        }
        return {
            textDecoration: value,
        }
    },
    textTrans: (value) => {
        if(!isValidTextTransform(value)){
            throw new Error("Invalid value in textTrans")
        }
        return {
            textTransform: value,
        }
    },
    transBg: {
        backgroundColor: 'transparent',
    },
    rounded: {
        borderRadius: '5px'
    },
    extraRounded: {
        borderRadius: '25px'
    },
    megaRounded: {
        borderRadius: '45px'
    },
    superRounded: {
        borderRadius: '65px'
    },
    ultraRounded: {
        borderRadius: '85px'
    },
    extremeRounded: {
        borderRadius: '105px'
    },
    radicalRounded: {
        borderRadius: '125px'
    },
    hyperRounded: {
        borderRadius: '145px'
    },
    ultimateRounded: {
        borderRadius: '165px'
    },
    maxRounded: {
        borderRadius: '185px'
    },
    beyondRounded: {
        borderRadius: '205px'
    },
    flexJContent: (type)=>{
        if (!isValidJContent(type)) {
            throw new Error("Invalid value in flexJContent");
        }
        return {
            justifyContent: type,
        }
        
    },
    flexAContent: (type)=>{
        if (!isValidAContent(type)) {
            throw new Error("Invalid value in flexAContent");
        }
        return {
            alignItems: type,
        }
        
    },

}




export {
    styles,
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
    ResBackgImg
}

