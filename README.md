**Hainis Art Direction - Portfolio**

================================

Thanks for checking out my work.

Feel free to contact me anytime.
(3 am can be tricky but you never know...)

======================================================

**Webpack Development build works.**

**Webpack Production build works.**

======================================================

**Note not all sections and modals have images**

Only the following modals have slideshow images: 
- print/advil
- print/amex
- print/bayer
- Work in progress...

======================================================

In the (not so) early stages of setting up:

**Webpack 2 config with various features, including:**
- Hot Module Reloading
- Image/Fonts/etc. Processing
- Path Aliases
- dev-server
- Vendor library code splitting
- etc. 


**Vue 2 project:**

GSAP Animation (only modal-slideshow has GSAP animations applied but not in a Vue way - using jquery):
- Tweenlite
- CSSPlugin
- ScrollToPlugin

Simplifying the Build:
- Cleaning up the CSS
	- Cleaned up CSS grid.
- Cleaning up the HTML 

Nav Buttons Component:
- Vue-Router with routes for Print, Video, Outdoor and Online.

Section and Hero Image Component:
- SOLVED: section hero-image.vue component now loads the correct images without the prior hack:
	- Solved by passing an ID prop through the vue-router to the section.vue component.
	- Then binding the hero-image class to the the ID value of the parent.
	- Used more explicit CSS to target the divs 
	- Got rid of the unused logic to change div class in hero-image component.
- section.vue code is DRY:
	- Deleted individual .vue section files (print, video, outdoor and online).
	- Deleted example-list .vue files (moved the arrays into the section file).

Modal Buttons Component:
- Looking into options to load Modals via sub-routes

Modal Slideshow Overlay Component:
- Looking into options to load Modal content via sub-routes
- Sub-routes may help with history and bookmarking etc.

Preference & Contact Tab:
- Placeholder for now.
