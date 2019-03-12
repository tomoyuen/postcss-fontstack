# PostCSS Fontstack [![Build Status][travis-img]][travis]

Easy insertion of font stacks into font-family declarations

```css
body {
  font-family: 'Open Sans', fontstack('Arial');
}

/* results */
body {
  font-family: 'Open Sans', Arial, "Helvetica Neue", Helvetica, sans-serif;
}
```

## Usage
Add [PostCSS Fontstack](https://github.com/tomoyuen/postcss-fontstack) in your project.

`npm i postcss-fontstack -D`

Use [PostCSS Fontstack](https://github.com/tomoyuen/postcss-fontstack) to process your CSS:

```javascript
import FontStack from 'postcss-fontstack'

FontStack.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS](https://github.com/postcss/postcss) Plugin:

```javascript
import postcss from 'postcss';
import FontStack from 'postcss-fontstack';

postcss([
  FontStack(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

[PostCSS Stack](https://github.com/tomoyuen/postcss-fontstack) runs with Webpack

Add PostCSS Loader to your project:

`npm i postcss-loader -D`

Use PostCSS Fontstack in your Webpack configuration:

```javascript
const FontStack = require('postcss-fontstack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                FontStack(/* pluginOptions */)
              ]
            }
          }
        ]
      }
    ]
  }
}
```

## Options

### fontstacks

You can custom the fontstacks by the `fontstacks` option.

```javascript
FontStack({
  fontstacks: {
    'Tomo': '"Tomo Regular", Arial, sans-serif',
  }
})
```

```css
body {
  font-family: fontstack('Tomo');
}

/* results */
body {
  font-family: 'Tomo Regular', Arial, sans-serif;
}
```

### Misc

the default fontstacks
```json
  // Sans-serif
  'Arial': 'Arial, "Helvetica Neue", Helvetica, sans-serif',
  'Arial Black': '"Arial Black", "Arial Bold", Gadget, sans-serif',
  'Arial Narrow': '"Arial Narrow", Arial, sans-serif',
  'Gill Sans': '"Gill Sans", "Gill Sans MT", Calibri, sans-serif',
  'Tahoma': 'Tahoma, Verdana, Segoe, sans-serif',
  'Verdana': 'Verdana, Geneva, sans-serif',

  // Serif
  'Georgia': 'Georgia, Times, "Times New Roman", serif',
  'Palatino': 'Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif',
  'Times New Roman': 'TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif',

  // Monospaced
  'Courier New': '"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace',
  'Lucida Sans Typewriter': '"Lucida Sans Typewriter", "Lucida Console", monaco, "Bitstream Vera Sans Mono", monospace',

  // Fantasy
  'Copperplate': 'Copperplate, "Copperplate Gothic Light", fantasy',
  'Papyrus': 'Papyrus, fantasy',

  // Script
  'Brush Script MT': '"Brush Script MT", cursive'
```

[travis-img]: https://travis-ci.org/tomoyuen/postcss-fontstack.svg
[travis]: https://travis-ci.org/tomoyuen/postcss-fontstack
