Hainis Art Direction - Portfolio
================================

Thanks for checking out my work.

Feel free to contact me anytime.
(3 am can be tricky but you never know...)


======================================================
================== IMPORTANT NOTE: ===================
======================================================

Dev build works great.

Production build has ISSUES:
1 - The modal templates are dynamically loaded (this work great) 
	BUT all of the hard/static coded src links in these templates are not processed.

2 - I used Copy Copy Webpack Plugin to get the images copied over BUT that has issues as well. If I copy over all of the images { from: 'asset/img', to: 'asset/img' } images are processed and linked (this creates duplicates - originals and hashed). THIS IS CURRENTLY THE WAY THE CONFIG AND COMPONENTS ARE SETUP - IT'S A HACK - BUT IT WORKS.

3 - To solve the duplicates issue I set a subdirectory - 'dynamic-img' with all of the dynamically modal images to be processed by Copy Webpack Plugin:

{ from: 'asset/img/dynamic-img', to: 'asset/img/dynamic-img' } 

This copies the images as expected and also solved all the duplicate issues BUT for some reason it breaks the links for the thumbnails. I'm not sure why!?


Will update when sorted, any help is appreciated. 



======================================================
======= Note all section and modal have images =======
======================================================

Note only: 
- print/advil
- print/amex
- print/bayer
have images that will load into the modals
Also, video, outdoor and online sections are blank.
Work in progress...

======================================================

In the (not so) early stages of setting up:

Webpack 2 config with various features, including:
	- Hot Module Reloading
	- Image/Fonts/etc. Processing
	- Path Aliases
	- dev-server
	- Vendor library code splitting
	- etc. 

Vue 2 project

GSAP Animation:
	- Tweenlite
	- CSSPlugin
	- ScrollToPlugin

