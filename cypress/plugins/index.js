// const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')
// module.exports = on => {
//   on('file:preprocessor', cypressTypeScriptPreprocessor)
// }
const browserify = require( '@cypress/browserify-preprocessor' )
module.exports = ( on ) => {
  const options = {
    browserifyOptions: {
      extensions: [ '.js', '.ts' ],
      plugin: [
        [ 'tsify' ],
      ],
    },
  }
  on( 'file:preprocessor', browserify( options ) )
}
