module.exports = {
  eslint: true,
  wpyExt: '.wpy',
  compilers: {
    sass: {
      outputStyle: 'compressed'
    },
    babel: {
      sourceMap: true,
      presets: ['es2015', 'stage-1'],
      plugins: ['transform-export-extensions', 'syntax-export-extensions']
    }
  }
}
