**Hainis Art Direction - Portfolio**

================================

Thanks for checking out my work.

Feel free to contact me anytime.
(3 am can be tricky but you never know...)

======================================================

**Webpack Development build works.**

**Webpack Production build works.**

- Added ```--max_old_space_size=2048``` to dev build to sort out of memory error. 
- Added git information banner via git-revision-webpack-plugin.

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
- Cleaning up the HTML 

Nav Buttons Component:
- Vue-Router with routes for Print, Video, Outdoor and Online.

Section and Hero Image Component:
- Each Section (Print, Video, Outdoor and Online) have duplicate code - need to research how to have the props update along with the corresponding examples-list dynamically based on the nav button clicked.
- Cleaned up CSS grid.
- Hero image data is passed en by an eventBus - ISSUE - only loads images on second load of a section (for example: click on the PRINT Nav button the first time and the Hero Image will not load, close out and click on PRINT Nav button again and the Hero Image loads. Need to figure out why the eventBus data is not working on first load.

Modal Buttons Component:
- Section thumbnails will call up a Modal Overlay (not accomplished by a sub-route - sub-routes may be a better way - need to research).
- Event Bus passes modal-button ID to modal-slideshow.

Modal Slideshow Overlay Component:
- modal-slideshow listens for Event Bus change and loads the appropriate Vue Modal file. 
- Solved having to make individual import statements and component registration for each modal's slideshow content - based on the Event Bus data - see the getModal() function in modal-slideshow.vue file.

Prefeence & Contact Tab:
- Placeholder for now.
