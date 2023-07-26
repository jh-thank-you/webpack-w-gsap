// DeprecationWarning: loaderUtils.parseQuery() received a non-string value
// which can be problematic, see https://github.com/webpack/loader-utils/issues/56
// parseQuery() will be replaced with getOptions() in the next major version of loader-utils.

// Caused by babel-loader v6.4.1 stable
// Updated to babel-loader 7.x see Babel Loader Documentation https://github.com/babel/babel-loader
// process.traceDeprecation = true;

// removing Jquery from project/ webpack config, the project dependencies -- Also, in eslintrc.js, jquery is now set to false.

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var PreloadWebpackPlugin = require('preload-webpack-plugin');
var ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// var DashboardPlugin = require('webpack-dashboard/plugin');
var PrerenderSpaPlugin = require('prerender-spa-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');  
var GitRevisionPlugin = require('git-revision-webpack-plugin');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const build = PRODUCTION
  ? [
    './assets/main.js', // updated to reflect production build output
  ]
  : [
    './assets/main.js', // updated to reflect production build output
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
  ];


const plugins = PRODUCTION
  ?   [
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: 'assets/css/styles-[contenthash:6].css', // this will put the css in asset/css directoy.
                                                         // You also need to resolve the path in the
                                                         // ExtractTextPlugin.extract see const cssLoader below
      allChunks: true
    }),
    new HTMLWebpackPlugin({
      template: 'index-template.html'
    }),
    new PreloadWebpackPlugin({
      // For settings see - https://github.com/googlechrome/preload-webpack-plugin
      // Below is the default setting
      rel: 'preload',
      as: 'script',
      include: 'asyncChunks',
    }),
      // For setting see - https://github.com/jantimon/favicons-webpack-plugin
    new FaviconsWebpackPlugin({
      logo: './assets/img/ui-elements/favicon-hainis.png',
      inject: true, // Inject the html into the html-webpack-plugin
      persistentCache: true,  // Generate a cache file with control hashes and
                              // don't rebuild the favicons until those hashes change

      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: false, // Set to true for Production
        appleIcon: false, // Set to true for Production
        appleStartup: false, // Set to true for Production
        coast: false,
        favicons: true,
        firefox: false, // Set to true for Production
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
    new ResourceHintWebpackPlugin(), // Add only once see documentation
    // new DashboardPlugin(), // if you want a fancy dashboard in terminal 
                              // uncomment the DashboardPlugin line and the global var
                              // Also, see the package.json file to modify the "build" script
    new webpack.optimize.CommonsChunkPlugin({
          names: ['vendor']
    }), // split vendor library from app code
    new FriendlyErrorsWebpackPlugin(),
    new CopyWebpackPlugin([
        // need to copy sprite sheets to assets folder since the links can't be hashed in tha canvas call
        { from: 'assets/img/sprite-sheets', to: 'assets/img/sprite-sheets' }
    ]),
    new webpack.ProvidePlugin({

    }),
  ]
  : [
    new webpack.HotModuleReplacementPlugin(), // disabled Vue-JS has HMR built in.
    // new DashboardPlugin(), // if you want a fancy dashboard in terminal 
                              // uncomment the DashboardPlugin line and the global var
                              // Also, see the package.json file to modify the "dev" script
    // FaviconsWebpackPlugin only rendered during production build
    new FriendlyErrorsWebpackPlugin(),
    new webpack.ProvidePlugin({


    }),
  ];


plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION),
  })
);


const imageLoaderQuery = {
  bypassOnDebug: true,
  mozjpeg: {
    progressive: true,
  },
  gifsicle: {
    interlaced: false,
    optimizationLevel: 3,
    colors: 256,
    buffer: false, // 'buffer' // set boolean if you wan to buffer.
  },
  optipng: {
    optimizationLevel: 4,
  },
  svgo:{
    plugins: [
      {
        removeViewBox: false,
        removeEmptyAttrs: false,
      },
    ],
  },
  pngquant: {
    quality: '75-90',
    speed: 3,
  },
}; // END imageLoaderQuery

const cssIdentifier = PRODUCTION ? '[hash:base64:6]' : '[path][name]---[local]';

const projectMap = PRODUCTION ? '#source-map' : '#eval-source-map';

const cssLoader = PRODUCTION
  ? ExtractTextPlugin.extract({
    publicPath: '../../', // since the ExtractTextPlugin is saving 
                          // the CSS file to assets/css directory (see const plugins above) 
                          // you need to resolve the publicPath to take this into account.
    use: ['css-loader?minimize&localIdentName=' + cssIdentifier, 
          {
            loader: 'postcss-loader',
            options: {
            config: {
                path: 'postcss.config.js'
              } // END config
            } // END options
          }
         ],
  })
  :   ['style-loader', 'css-loader?localIdentName=' + cssIdentifier, 
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: 'postcss.config.js'
            } // END config
          } // END options
        }
      ];


module.exports = {
  devtool: projectMap,
  entry: { build, vendor: ['vue', 'vuex', 'vuex-localstorage', 'gsap/TweenMax', 'gsap/ScrollToPlugin', 'widowtamer-npm'] },
  resolve: {
    // IMPORTANT - keep in mind that path values are relative to the file you are writing in
    // Need to research how to create an alias to the root of the build or dist folder

    alias: { // changed dev folder structure to match production output - updated path aliases to reflect change - all files link properly in dev and prod
      'vue$': 'vue/dist/vue.esm.js',
      'vuex': 'vuex/dist/vuex.esm.js',
      'widowtamer-npm': 'widowtamer-npm/widowtamer.js',
      modernizr$: path.resolve(__dirname, "./.modernizrrc"),
      assets: path.resolve(__dirname, './assets'),
      components: path.resolve(__dirname, './assets/components'),
      css: path.resolve(__dirname, './assets/css'),
      fonts: path.resolve(__dirname, './assets/fonts'),
      img: path.resolve(__dirname, './assets/img'),
      js: path.resolve(__dirname, './assets/js'),
      store: path.resolve(__dirname, './assets/store'),
      modals: path.resolve(__dirname, './assets/modals'),
      scss: path.resolve(__dirname, './assets/scss'),
      sections: path.resolve(__dirname, './assets/sections'),
    },
  },
  plugins: plugins,
  module: {
    rules: [{
      enforce: 'pre', // with this eslint will not process files done by babel-loader
      test: /\.(vue|js)$/, // /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      options: {
        emitWarning: true,
        // community formatter
        formatter: require('eslint-friendly-formatter'),
        // cache: DEVELOPMENT,        
        fix: true, // Set to true for eslint autofixing
        // quite: true, // Process report errors only and ignore warnings
      },
    }, {
        test: /\.vue$/,
        loader: 'vue-loader', // Used for Vue Templates. Also Hot Module Replacement only works with .vue files
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      }, {
        test: /\.modernizrrc.js$/,
        use: [ 'modernizr-loader' ]
      }, {
        test: /\.modernizrrc(\.json)?$/,
        use: [ 'modernizr-loader', 'json-loader' ]
      }, {
        test: /\.json$/,
        loader: 'json-loader', // Used for Vue Templates. Also Hot Module Replacement only works with .vue files
        options: {
          loaders: {
          }
        }
      }, {
      // Conditions
      test: /\.js$/,
      // include: PATHS.app,
      exclude: /node_modules/,

      // Actions
      use: {
        loader: 'babel-loader',
        options: {
          // IMPORTANT - Need to set presets in .babelrc for Vue-Loader to work
          // If not it will throw an an error - Unexpected EOF at line 15 column 1 of the JSON5 data. Still to read: ""
          babelrc: true,
          cacheDirectory: true,
          presets: [ 
            // ['latest', {
            //   'es2015': { 'modules': false }
            // }]
          ],
        },
      },
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      use: [
        'url-loader?limit=10000&name=assets/img/[name]-[hash:6].[ext]',
        'image-webpack-loader?${JSON.stringify(imageLoaderQuery)}',
      ],
    }, {
      test: /\.(svg)$/i,
      use: [
        'file-loader?name=assets/img/[name]-[hash:6].[ext]',
        'image-webpack-loader?${JSON.stringify(imageLoaderQuery)}',
      ],
      exclude: /fonts/,
    }, {  
      test: /\.mp4$/, 
      use: 'file-loader?name=assets/img/modal-videos/[name]-[hash:6].[ext]', 
    },  {  
      test: /\.webm$/, 
      use: 'file-loader?name=assets/img/modal-videos/[name]-[hash:6].[ext]', 
    },  {  
      test: /\.vtt$/, 
      use: 'file-loader?name=assets/img/modal-videos/[name]-[hash:6].[ext]', 
    }, {  
      test: /\.svg$/, 
      use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=assets/fonts/[name].[ext]',
    }, {  
      test: /\.woff$/, 
      use: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]', 
    }, {  
      test: /\.woff2$/, 
      use: 'url-loader?limit=10000&mimetype=application/font-woff2&name=assets/fonts/[name].[ext]', 
    }, {  
      test: /\.otf$/, 
      use: 'url-loader?limit=10000&mimetype=font/opentype&name=assets/fonts/[name].[ext]', 
    }, {  
      test: /\.ttf$/, 
      use: 'url-loader?limit=10000&mimetype=font/ttf&name=assets/fonts/[name].[ext]', 
    }, {  
      test: /\.eot$/, 
      use: 'file-loader?mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name].[ext]', 
    },  {
      test: /\.(css|scss)$/,
      use: cssLoader,
    }], // END rules
  },
  output: {
    path: path.join(__dirname, './dist'),
    // Note: to view production build locally 
    // run npx serve from root of dist folder
    publicPath: PRODUCTION ? '/' : '/dist/',
    filename: PRODUCTION ? '[name].min.js' : '[name].js',
  },
}; // END module.exports



