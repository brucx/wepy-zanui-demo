const path = require('path');

module.exports = {
  eslint: true,
  wpyExt: ".wpy",
  build: {
    web: {
      apis: ['showToast', 'showActionSheet', 'showModal'],
      components: ['navigator', 'button', 'icon', 'progress', 'slider'],
      htmlTemplate: path.join('src', 'index.template.html'),
      htmlOutput: path.join('web', 'index.html'),
      jsOutput: path.join('web', 'index.js')
    }
  },
  compilers: {
    // sass: {
    //   outputStyle: "compressed"
    // },
    babel: {
      sourceMap: true,
      presets: [
        "es2015",
        "stage-1"
      ],
      plugins: [
        "transform-export-extensions",
        "syntax-export-extensions",
      ]
    }
  }
};


