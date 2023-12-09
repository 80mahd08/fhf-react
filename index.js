//import part

import "fhf/dist/css/FHF.min.css"
import PropTypes from 'prop-types';
import React from "react";
import { isValidColor , isValidSize , isValidBorderStyle } from "./tools/validation"

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

function RespVideo({ src, alt, style = {}, className = "", ...otherProps }){
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

function RespGridFill({ children, size , style = {} , gap = "" , className = "" , ...otherProps }){

    const withOutGap = {
        ...style,
        display : "grid", 
        gridTemplateColumns: `repeat(auto-fill, minmax(${size}, 1fr))` 
    }
    const withGap = {
        ...style,
        display : "grid", 
        gridTemplateColumns: `repeat(auto-fill, minmax(${size}, 1fr))`,
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

function RespGridFit({ children, size , style = {} , gap = "" , className = "" , ...otherProps }){

    const withOutGap = {
        ...style,
        display : "grid", 
        gridTemplateColumns: `repeat(auto-fit, minmax(${size}, 1fr))` 
    }
    const withGap = {
        ...style,
        display : "grid", 
        gridTemplateColumns: `repeat(auto-fit, minmax(${size}, 1fr))`,
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

function RespHeading({ element = "h1" , style = {} , className = "", ...otherProps }){
    if(element !== "h1" && element !== "h2" && element !== "h3" && element !== " h4" && element !== " h5" && element !== " h6 "){
        throw new Error(" incorrect element value in RespHeading  it should be one of those (h1,h2,h3,h4,h5,h6)");
    }else{
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
        }
        return (
            <element 
            style={combinedStyles} 
            className={`${className}`}
            {...otherProps}>
                {children}
            </element>
        )
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
        return (
            <element 
            style={combinedStyles} 
            className={`${className}`}
            {...otherProps}>
                {children}
            </element>
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
        return {
            border : `${size}px ${type} ${color}`
        }
    }
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

// propsTypes part

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
}

FlexContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.elementType(FlexItem)),
        PropTypes.elementType(FlexItem)
    ]).isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
};

FlexItem.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
};

DivV.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    visibleIn: PropTypes.string,
    hiddenIn: PropTypes.string
}

RespImg.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

ResVideo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
}

RespGridFill.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.number.isRequired,
    gap: PropTypes.number,
    className: PropTypes.string,
};

RespGridFit.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.number.isRequired,
    gap: PropTypes.number,
    className: PropTypes.string,
};

UnstyledList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
}

NavUl.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
}

RespHeading.propTypes = {
    element: PropTypes.oneOf(["h1","h2","h3","h4","h5","h6"]).isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

ResBackgImg.propTypes = {
    element: PropTypes.oneOf(["div","section","header","footer"]).isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node,
    url: PropTypes.string.isRequired,
}

Circle.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
};
