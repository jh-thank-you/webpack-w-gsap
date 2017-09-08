**Hainis Art Direction - Portfolio**

================================

Thanks for checking out my work.

Feel free to contact me anytime.
(3 am can be tricky but you never know...)


======================================================

**Webpack Development build works.**

**Webpack Production build works**

Notes:
- Added scripts to package.json:
- "preinstall" script adds `.metadata_never_index` file to `node_modules` directory
- "build" script adds `.metadata_never_index` file to `dist` directory
- Issue - modal buttons not being processed. **SOLVED**
  - Issue was the require statement return was commented out in the modal-button.vue getPic() function.

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
- Updated Config 7/2/17 - running the latest versions of all packages.
- Hot Module Reloading
- Image/Fonts/etc. Processing
- Path Aliases
- dev-server
- Vendor library code splitting
- etc. 


**Vue 2 project:**

Need to update imports and reruires to new format for

GSAP Animation (only modal-slideshow has GSAP animations applied but not in a Vue way - using jquery):
- Tweenlite
- CSSPlugin
- ScrollToPlugin

Simplifying the Build:
Todo:
- Cleaning up the CSS.
  - Cleaned up CSS grid. **DONE**
- Cleaning up the HTML.
- Need to update `import` and `reruire` to new format for for vue-loader v13.x.x. **DONE**
- Need to not bind TweenMax and ScrollToPlugin to window within main.js
  - Bad practice only bind within the componets where it is needed.
- Organized assets/img folder all art and code links updated to match new structure.
  - Set new folder/file structure.
  - Researching if it is possible to hash the Copy Webpack Plugin images and JSON files. Not sure how to get the hashes Copy Webpack Plugin images/assets. **SOLVED**

Nav Buttons Component:
Todo:
- Vue-Router with routes for Print, Video, Outdoor and Online. **DONE**

Nav Small Screen Menu:
Todo:
- Create small screen nav menu. **DONE**
- CSS style and set media queries. **DONE**
- Animate in or out based on queries (from small screen nav to medium-up screen nav). **DONE**

Section and Hero Image Component:
- Todo:
  - Need to create min math function for height and width. **DONE**
  - repeatable/small background texture for the each section. **DONE**
  - Set hero-image animated sprite sheet to fade out when buttons animate into frame. **DONE**
    - Note: hero animations are now sprite sheets (maybe do something with more control through GSAP). **DONE**
    - Research why there is a slight jiggle when sprite sheet animates, it doesn't happen all the time. (This is the nature of running through a sprite sheet that is not purely vertical or horizontal - Source GreenSock forums). **DONE**
    - Need to split the sprite sheets up - there is a size limiatation for mobile devices - Older is 1024 x 1024 - Newer is 2048 x 2048. **DONE**
    - Text, while sprite sheet animates, is blurry in the "skip" button. **Better but not solved**
    - Need to use CopyWebpackPlugin to copy sprite sheets to assets folder. **DONE**
  - Animate modal-buttons in from bottom. **DONE**
  - Need to wire up "skip" button on hero animations. **DONE**
    - Timing and visibility issue. **DONE**
    - Add different hover graphic for "skip button". **DONE**
  - Need to fix Firefox image flashing issue. **DONE**

Modal Password:
Todo:
- Added a modal to enter a password to view certain content. **DONE**
- CSS styles, including media queries applied. **DONE**
- Added vue functionality for wrong password message. **DONE**
- Pass props to modal-slideshow when the correct password is entered. **DONE**
- Add transition to selected modal-button/slideshow. **DONE**

Modal Slideshow Overlay Component:
Todo:
- Need to recreate slideshow with Vue vs jQuery. **DONE**
  - Section is DRY now, once slideshow component for all slides
    - All slide content imported by a data array.
- Need to add video player (vimeo, youtube or roll my own). Added Vimeo Videos **DONE**

Preference & Contact Tab:
Todo:
- Added, CSS styles including media queries applied. **DONE**
- Visibility set with v-if directive (bound to showTab prop). **DONE**
- Added open and close animation. **DONE**
- Tab hides completely when slideshow modal is open. **DONE**
- Update tab background image with repeating texture. **DONE**
- Style Select All and Default checkboxes to look like buttons. **DONE**
- Add localStorage for cross page load persistence of the selected industries. **DONE**
- Add Filtering based on sector/selected idustry. **DONE** 
- Add transition-group animation for filtered results. **DONE**

General Todo:
- Add linting for Vue files. **DONE**
- Use flexbox to cut down on CSS. **DONE**
- Code Cleanup.
