import hexToRgb from './hexToRgb';

const rgba = ( color, opacity ) => `rgba(${hexToRgb(color)}, ${opacity})`;

export default rgba;