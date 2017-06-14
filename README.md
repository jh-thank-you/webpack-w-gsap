**Hainis Art Direction - Portfolio**

================================

Thanks for checking out my work.

Feel free to contact me anytime.
(3 am can be tricky but you never know...)

======================================================

**Webpack Development build works.**

**Webpack Production build works.**

- Added scripts to package.json: 
	- "preinstall" script adds `.metadata_never_index` file to `node_modules` directory
	- "build" script adds `.metadata_never_index` file to `dist` directory

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

Nav Small Screen Menu
-Todo:
	- Create small screen nave menu.
	- CSS style and set media queries.
	- Animation based on queries (from small screen nav to medium-up screen nav).

Section and Hero Image Component:
- Todo:
	- Set corner nav button image as a full screen background image
		- Maybe transition to a repeatable/small background texture.
	- Set hero-image animated gif to fade out when buttons animate into frame.
	- Animate modal-buttons in from bottom.

Modal Password:
- Added a modal to enter a password to view certain content
- CSS styles, including media queries applied.
- Todo:
	- Add vue functionality for wrong password message
	- Pass props to modal-slideshow when correct the correct password is entered.

Modal Buttons Component:
- Looking into options to load Modals via sub-routes

Modal Slideshow Overlay Component:
- Looking into options to load Modal content via sub-routes
- Sub-routes may help with history and bookmarking etc.

Preference & Contact Tab:
- Tab added, CSS styles including media queries applied.
- Tab visibility set with v-if directive (bound to showTab prop).
	- Todo:
		- Create filtering.
		- Create local storage to save settings across page loads.
