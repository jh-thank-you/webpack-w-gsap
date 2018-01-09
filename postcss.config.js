module.exports = {
  plugins: [
    require('autoprefixer')({ 
    /* options */

    /*

    browsers (array): list of browsers query (like last 2 versions), which are supported in your project. We recommend to use browserslist config or browserslist key in package.json, rather than this option to share browsers with other tools. See Browserslist docs for available queries and default value.
	env (string): environment for Browserslist.
	cascade (boolean): should Autoprefixer use Visual Cascade, if CSS is uncompressed. Default: true
	add (boolean): should Autoprefixer add prefixes. Default is true.
	remove (boolean): should Autoprefixer [remove outdated] prefixes. Default is true.
	supports (boolean): should Autoprefixer add prefixes for @supports parameters. Default is true.
	flexbox (boolean|string): should Autoprefixer add prefixes for flexbox properties. With "no-2009" value Autoprefixer will add prefixes only for final and IE versions of specification. Default is true.
	grid (boolean): should Autoprefixer add IE prefixes for Grid Layout properties. Default is false.
	stats (object): custom usage statistics for > 10% in my stats browsers query.
	
	*/

	}) // END options
  ]
};