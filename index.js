
const backgroundColor = '#21252b'
const foregroundColor = '#abb2bf'
const cursorColor = foregroundColor
const borderColor = 'rgba(255, 0, 0, .25)'

const colors = [
  backgroundColor,
  '#e06c75', // red
  '#98c379', // green
  '#d19a66', // yellow
  '#56b6c2', // blue
  '#C678DD', // pink
  '#56B6C2', // cyan
  '#d0d0d0', // light gray
  '#808080', // medium gray
  '#e06c75', // red
  '#98c379', // green
  '#d19a66', // yellow
  '#56b6c2', // blue
  '#C678DD', // pink
  '#56B6C2', // cyan
  '#ffffff', // white
  foregroundColor
]

exports.decorateConfig = config => {
  console.log('Hi mom!')

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
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active {
        font-weight: bold;
        color: ${backgroundColor} !important;
        background-color: ${foregroundColor};
      }
    `
  })
}
