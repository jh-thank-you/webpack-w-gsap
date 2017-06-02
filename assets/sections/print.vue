<template>

	<div id="section-wrap" class="texture-paper-bkg">
	    
	    <button-close-section-raster></button-close-section-raster>

	    <hero-image></hero-image>
	        	
	    <examples-list-print></examples-list-print>

	</div>

</template>


<script>

	import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';
	import heroImage from 'components/hero-image.vue';
	// import modalButton from 'components/modal-button.vue';
	import examplesListPrint from 'components/examples-list-print.vue';

	export default {

		props: [ 'imageSrc' ],// END props
		data() {
	      return {
	        heroSrc: '',
	      }
	    }, // END data
		components: { 
			
			buttonCloseSectionRaster, 
			heroImage, 
			examplesListPrint, 

		}, // END components
		mounted() {

			// use $once instead of $on - so the event bus does not compound listening
			eventBus.$once('heroImageSelected', (herosource) => {
				this.heroSrc = herosource;

				currentClass = [ `${this.heroSrc}`, 'hero-image' ];

				currentAnimation = ( this.heroSrc + '-hero-animation');

				return currentClass, currentAnimation;

				getHero(currentClass, currentAnimation);

				return this.heroSrc

			}); // END eventBus

		}, // END created

	}; // END export default

</script>


<style scoped>


</style>