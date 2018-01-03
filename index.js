const darkBlack = '#181a1f';
const black = '#21252b';
const darkGrey = '#282c34';
const mediumGrey = '#5c6370';
const lightGrey = '#abb2bf';
const white = '#fff';

const red = '#e06c75';
const yellow = '#d19a66';
const green = '#98c379';
const cyan = '#56b6c2';
const blue = '#61afef';
const magenta = '#c678dd';

const borderBlue = '#528bff';

const backgroundColor = darkGrey;
const foregroundColor = lightGrey;
const transparentForegroundColor = 'rgba(171, 178, 191, 0.4)';
const cursorColor = foregroundColor;
const borderColor = backgroundColor;

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white: lightGrey,
  lightBlack: mediumGrey,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite: white,
  colorCubes: white,
  grayscale: lightGrey,
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      
      ::-webkit-scrollbar {
        width: 4px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${mediumGrey};
        border-radius: 5px;
      }
      
      .cursor-node {
        border-left-width: 2px;
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      
      .header_header {
        left: 0;
        right: 0;
        top: 0;
      }
      
      .splitpane_divider {
        background-color: rgba(171, 178, 191, 0.15) !important; 
      }
      
      .tabs_list {
        background-color: ${black};
      }
      
      .tab_tab {
        border-style: solid;
        border-width: 0 0 0 1px;
        color: ${transparentForegroundColor};
        font-weight: 500;
      }
      .tab_tab:first-of-type {
        border-width: 0;
      }
      .tab_tab:hover {
        color: ${foregroundColor};
        transition: none;
      }
      .tab_tab::after {
        background: ${borderBlue};
        border-bottom: 1px solid ${backgroundColor};
        bottom: -1px;
        content: "";
        height: inherit;
        left: 0;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition: opacity .16s;
        width: 2px;
        z-index: 1;
      }
      .tabs_title,
      .tab_tab.tab_active {
        color: ${foregroundColor};
        font-weight: 500;
      }
      .tab_tab.tab_active {
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active::before {
        bottom: -1px;
        content: "";
        height: inherit;
        left: -1px;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
      }
      .tab_tab.tab_active:last-of-type::before {
        border-right-width: 0;
      }
      .tab_tab.tab_active::after {
        opacity: 1;
        transition-duration: .32s;
      }
      
      .tab_icon {
        background: ${transparentForegroundColor};
        border-radius: 0;
        display: block;
        height: 100%;
        -webkit-mask-image: url('${__dirname}/close.svg');
        mask-image: url('${__dirname}/close.svg');
        -webkit-mask-position-x: 8px;
        mask-position-x: 8px;
        -webkit-mask-position-y: center;
        mask-position-y: center;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: 7px;
        mask-size: 7px;
        right: 0;
        top: 0;
        transform: scale(0);
        transition: transform .08s;
        width: 26px;
        z-index: 2;
      }
      .tab_tab.tab_active .tab_icon {
        background: ${transparentForegroundColor};
      }
      .tab_icon:hover,
      .tab_tab.tab_active .tab_icon:hover {
        background: ${foregroundColor};
      }
      .tab_tab:hover .tab_icon {
        transform: scale(1);
        transition-duration: .16s;
      }
      .tab_icon svg,
      .tab_icon::after {
        display: none;
      }
    `,
  });
};
