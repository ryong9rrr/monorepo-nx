import fs from 'fs'
import * as theme from '../dist/index.js'

const toCssCasting = (str) => {
  return str
    .replace(/([a-z])(\d)/, '$1-$2')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
}

const generateThemeCssVariables = () => {
  const cssString = []

  Object.entries(theme.vars).forEach(([key, value]) => {
    if (key === 'colors') {
      Object.entries(value.$static).forEach(([colorKey, colorValue]) => {
        if (colorKey === 'light') {
          const selector = ':root'

          const cssVariables = Object.entries(colorValue)
            .map(([mainKey, mainValue]) =>
              Object.entries(mainValue)
                .map(
                  ([subKey, subValue]) =>
                    `--${colorKey}-${toCssCasting(mainKey)}-${toCssCasting(subKey)}: ${subValue}`,
                )
                .join('\n'),
            )
            .join('\n')

          cssString.push(`${selector} {\n${cssVariables}\n}`)
        }

        if (colorKey === 'dark') {
        }
      })
    }
  })

  return cssString.join('\n')
}

const generateThemeCss = () => {
  const variables = generateThemeCssVariables()

  fs.writeFileSync('dist/themes.css', variables)
}

generateThemeCss()
