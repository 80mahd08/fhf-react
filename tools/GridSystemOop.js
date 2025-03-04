/**
 * Represents a simple grid system with configurable columns and gaps.
 */
class GridSystemOop {
  /**
   * @param {number} [numColumns=1] - The number of columns in the grid.
   * @param {number} [gapValue=0] - The gap size between columns in pixels.
   */
  constructor(numColumns = 1, gapValue = 0) {
    if (numColumns <= 0 || !Number.isInteger(numColumns)) {
      console.warn("Invalid numColumns. Using default value (1).");
      numColumns = 1;
    }

    if (gapValue < 0 || typeof gapValue !== "number") {
      console.warn("Invalid gapValue. Using default value (0).");
      gapValue = 0;
    }

    /**
     * @type {Object}
     * @property {string} display - The display type (always "grid").
     * @property {string} gridTemplateColumns - The grid column template.
     * @property {string} gap - The gap between columns in pixels.
     */
    this.container = {
      display: "grid",
      gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
      gap: `${gapValue}px`,
    };

    this.column = this.column.bind(this);
  }

  /**
   * Generates styles for a column within the grid.
   * @param {number} [span=1] - The number of columns the element should span.
   * @param {number} [offset=0] - The number of columns to offset.
   * @returns {Object} The styles for the column.
   */
  column(span = 1, offset = 0) {
    if (span < 1 || span > 12 || !Number.isInteger(span)) {
      console.warn("Invalid span. Using default value (1).");
      span = 1;
    }

    if (offset < 0 || offset > 11 || !Number.isInteger(offset)) {
      console.warn("Invalid offset. Using default value (0).");
      offset = 0;
    }

    const columnStyles = {
      gridColumn: `span ${span} / span ${span}`,
    };

    if (offset > 0) {
      columnStyles.marginLeft = `calc(${offset} * 1fr + ${offset * 16}px)`;
    }

    return columnStyles;
  }

  /**
   * Updates the grid template columns.
   * @param {string} template - The new grid template configuration.
   */
  setGridTemplate(template) {
    if (typeof template !== "string") {
      console.warn("Invalid grid template. Using default configuration.");
      return;
    }
    this.container.gridTemplateColumns = template;
  }
}

export default GridSystemOop;
