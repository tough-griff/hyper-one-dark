
const backgroundColor = '#282c34'
const foregroundColor = '#abb2bf'
const cursorColor = foregroundColor
const borderColor = backgroundColor

const colors = {
  black       : backgroundColor,
  red         : '#e06c75', // red
  green       : '#98c379', // green
  yellow      : '#d19a66', // yellow
  blue        : '#56b6c2', // blue
  magenta     : '#c678dd', // pink
  cyan        : '#56b6c2', // cyan
  white       : '#d0d0d0', // light gray
  lightBlack  : '#808080', // medium gray
  lightRed    : '#e06c75', // red
  lightGreen  : '#98c379', // green
  lightYellow : '#d19a66', // yellow
  lightBlue   : '#56b6c2', // blue
  lightMagenta: '#c678dd', // pink
  lightCyan   : '#56b6c2', // cyan
  colorCubes  : '#ffffff', // white
  grayscale   : foregroundColor
}

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #21252b !important;
        border-bottom-color: rgba(0,0,0,.15) !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: rgba(0,0,0,.27) !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
    `
  })
}
