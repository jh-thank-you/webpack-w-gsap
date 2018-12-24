module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jquery: false,
  },
  globals: {
    "TimelineLite" : false,
    "TimelineMax" : false,
    "TweenLite" : false,
    "TweenMax" : false,
    "Back" : false,
    "Bounce" : false,
    "Circ" : false,
    "Cubic" : false,
    "Ease" : false,
    "EaseLookup" : false,
    "Elastic" : false,
    "Expo" : false,
    "Linear" : false,
    "Power0" : false,
    "Power1" : false,
    "Power2" : false,
    "Power3" : false,
    "Power4" : false,
    "Quad" : false,
    "Quart" : false,
    "Quint" : false,
    "RoughEase" : false,
    "Sine" : false,
    "SlowMo" : false,
    "SteppedEase" : false,
    "Strong" : false,
    "Draggable" : false,
    "SplitText" : false,
    "VelocityTracker" : false, 
    "CSSPlugin" : false,
    "ThrowPropsPlugin" : false, 
    "BezierPlugin" : false
  },
  plugins: [
        'html',
  ],
  settings: {
        // if you have .vue active for eslint-html-plugin settings
        // linting will not progress through all subdirectories
        // it will stop at the main entry point.
        // it conflicts with eslint-plugin-vue (latest v3.5.0)
        "html/html-extensions": [".html", /* ".vue" */],  // consider .html files as XML
        "html/report-bad-indent": "error",
        "html/indent": "+2",  // indentation is the <script> indentation plus two spaces.
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended' // or 'plugin:vue/base'
  ],
  parserOptions: {
    sourceType: 'module',
    "allowImportExportEverywhere": true // need to use babel-eslint for this to work but will then conflict with eslint-plugin-vue
  },
  rules: {
    // 0 = Off/Disable
    // 1 = Warn - emit a warning
    // 2 = Error
    'block-spacing': "error",
    'computed-property-spacing': ["error", "never"],
    'array-bracket-newline': ["error", { "multiline": true }],
    curly: "error",
    'no-floating-decimal': "error",
    'no-multi-spaces': ["error", { 
        "ignoreEOLComments": false,
        "exceptions": {
            "VariableDeclarator": true,
            "ImportDeclaration": true 
        }
    }],
    'keyword-spacing': ["error", { "after": true }],
    'eol-last': ["error", "always"],
    'no-trailing-spaces': ["error", { "ignoreComments": true }],
    'no-multiple-empty-lines': ["error", { "max": 2, "maxEOF": 1 }],
    'key-spacing': ["error", { align: "value" }],
    'dot-location': ["error", "property"],
    'dot-notation': ["error", { "allowPattern": "^[a-z]+(_[a-z]+)+$" }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-tabs': "error",
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': ['warn'],
    'no-console': 0,
    // 'no-unreachable': 0,
    'vue/order-in-components': [2, {
      order: [
        ['name', 'delimiters', 'functional', 'model'],
        ['components', 'directives', 'filters'],
        ['parent', 'mixins', 'extends', 'provide', 'inject'],
        'el',
        'template',
        'props',
        'propsData',
        'data',
        'computed',
        'watch',
        'lifecycle_hooks',
        'methods',
        'render',
        'renderError'
      ]
    }] // END order
  },
};