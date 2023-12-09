const isValidColor = (color) => {
    // Regular expression to check for a valid color in various formats
    if(color === "" || color === undefined  ){
        return false;
    }
    const colorRegex = /^(#([0-9a-fA-F]{3}){1,2}|[a-zA-Z]+|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(0(\.\d+)?|1(\.0+)?)\)|hsl\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?\s*\)|hsla\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?\s*,\s*(0(\.\d+)?|1(\.0+)?)\))$/;
    return colorRegex.test(color);
};

const isValidSize = (size) => {
    return typeof size === 'number' && size >= 0;
};

const isValidBorderStyle = (type) => {
    const allowedStyles = ['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset', 'none'];
    return allowedStyles.includes(type);
};

export { isValidColor , isValidSize , isValidBorderStyle }