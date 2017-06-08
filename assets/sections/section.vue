<template>

	<div :id="id" class="section-wrap texture-paper-bkg">
	    
	    <button-close-section-raster></button-close-section-raster>
		
		<!-- id data is passed in by routes see notes below-->
	    <hero-image :class="id"></hero-image>
	        	
	    <examples-list-print></examples-list-print>

	</div>

</template>


<script>

	import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';
	import heroImage from 'components/hero-image.vue';

	import examplesListPrint from 'components/examples-list-print.vue';

	export default {

		// passing in ID data from routes
		// it has to be passed in to this parent component (section.vue) 
		// it will then be passed down to the hero-image.vue root template.
		// if you pass the data in to the template for some reason it does not
		// register until after the component has been loaded and cached once.
		// meaning on first click/run through the hero-image will not show.
		props: [ 'id' ],// END props
		data() {
	      return {

	      }
	    }, // END data
		components: { 
			
			buttonCloseSectionRaster, 
			heroImage, 
			examplesListPrint, 

		}, // END components
		mounted() {


		}, // END created

	}; // END export default

</script>


<style scoped>


</style>