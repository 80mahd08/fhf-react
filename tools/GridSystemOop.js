class GridSystemOop {
  constructor(numColumns = 1, gapValue) {
    this.styles = {
      container: {
        display: "grid",
        gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
        gap: gapValue ? `${gapValue}px` : "0px",
      },
    };

    this.column = this.column.bind(this);
  }

  column(span, offset = 0) {
    if (span < 1 || span > 12 || offset < 0 || offset > 11) {
      throw Error("Invalid column span or offset values");
    }

    this.styles.column = {
      gridColumn: `span ${span} / span ${span}`,
      marginLeft:
        offset > 0 ? `calc(${offset} * 1fr + ${offset * 16}px)` : undefined,
    };

    return this;
  }
}

export default GridSystemOop;
