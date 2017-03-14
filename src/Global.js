// import Colr from 'colr';
const Colr = require('colr');

const Global = {
  color: {
    primary: '#ED1C40',
    secondary: '#FFFFFF',
    tertiary: '#AAAAAA',
  },
  size: {
    body: 12,
    header: 25,
  }
};

const colr = new Colr();
const hex = colr.fromHex(Global.color.primary);
const dark = hex.darken(5);
const border = dark.toHex();
const background = hex.darken(15).toHex();

Global.color.border = border;
Global.color.background = background;

export default Global;
