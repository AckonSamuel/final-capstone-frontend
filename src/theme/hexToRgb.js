import chroma from 'chroma-js';

const hexToRgb = (color) => chroma(color).rgb().join(", ");

export default hexToRgb;