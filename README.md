** bHainis Art Direction - Portfolio **

================================

Thanks for checking out my work.

Feel free to contact me anytime.
(3 am can be tricky but you never know...)

======================================================

** IMPORTANT NOTE: **

Dev build works great.

Production build has ISSUES:
1. The modal templates are dynamically loaded (this works great) BUT all of the hard/static coded src links in these templates are not processed. ** - SOLVED - Thanks to Evan You & Thorsten Lünborg ** by adding a ~ (tilde) to the front of the path name. This still raises issues - why webpack path aliases are not being honored in Vue template files? For example:

This shorted path alias does not work:
`src="~assets/modalPrintAdvil1c.jpg"`

This relative path does not work:
`src="./assets/img/modalPrintAdvil1c.jpg"`

**This works:**
`src="~assets/img/modalPrintAdvil1c.jpg"`



2 - To solve programmatic link images not being processed (currently only the Print section has button thumbnail place holders) I created a subdirectory - 'assets/img-dynamic' - with all of the programmatically called thumbnail images. This directory is then copied over by Copy Webpack Plugin:

{ from: 'assets/img-dynamic', to: 'assets/img-dynamic/[name].[ext]' } 

This copies the images as expected but it does not take advantage of hashed image names and links for caching. Need to research how to accomplish this.


Will update when sorted, any help is appreciated. 


======================================================

** Note not all sections and modals have images **

Note only the following have images: 
- print/advil
- print/amex
- print/bayer
- Also, video, outdoor and online sections are blank.
- Work in progress...

======================================================

In the (not so) early stages of setting up:

Webpack 2 config with various features, including:
	- Hot Module Reloading
	- Image/Fonts/etc. Processing
	- Path Aliases
	- dev-server
	- Vendor library code splitting
	- etc. 

Vue 2 project:

GSAP Animation (only modal-slideshow has GSAP animations applied but not in a Vue way - using jquery):
	- Tweenlite
	- CSSPlugin
	- ScrollToPlugin
Nav Buttons Component:
	Vue-Router with routes for Print, Video, Outdoor and Online.
Section Hero Image Component:
	- Need to sort how to dynamically pass in the appropriate image data for each section (currently hard coded for Print Section)
Modal Buttons Component:
	Section thumbnails will call up a Modal Overlay (not accomplished by a sub-route - sub-routes may be a better way - need to research).
	- Event Bus passes modal-button ID to modal-slideshow
Modal Slideshow Overlay Component:
	- modal-slideshow listens for Event Bus change and loads about the appropriate Vue Modal file 
	- NOTE still trying to sort how to use dynamic imports to solve having to create import statements for each individual modal and also having to register each individual modal component in the `export default`
