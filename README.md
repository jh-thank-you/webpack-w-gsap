**Hainis Art Direction - Portfolio**

================================

Thanks for checking out my work.

Feel free to contact me anytime.
(3 am can be tricky but you never know...)

======================================================

**Development build works.**

**Production build works.**

- All images and programmatic links are processed correctly with the Development and Production builds. 
- Looking into setting up git information header in the webpack config (not added yet).

======================================================

**Note not all sections and modals have images**

Note only the following modals have slideshow images: 
- print/advil
- print/amex
- print/bayer
- Also, video, outdoor and online sections are blank.
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

Nav Buttons Component:
- Vue-Router with routes for Print, Video, Outdoor and Online.

Section Hero Image Component:
- Need to sort how to dynamically pass in the appropriate image data for each section (currently hard coded for Print Section).

Modal Buttons Component:
- Section thumbnails will call up a Modal Overlay (not accomplished by a sub-route - sub-routes may be a better way - need to research).
- Event Bus passes modal-button ID to modal-slideshow.

Modal Slideshow Overlay Component:
- modal-slideshow listens for Event Bus change and loads the appropriate Vue Modal file. 
- Solved having to make individual import statements and component registration for each modal's slideshow content - based on the Event Bus data - see the getModal() function in modal-slideshow.vue file.
