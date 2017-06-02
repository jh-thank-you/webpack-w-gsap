<template>

	<div id="section-wrap" class="texture-paper-bkg"><!-- START section-content-djax  -->
	    
	    <button-close-section-raster></button-close-section-raster>

	    <hero-image></hero-image>
	        	
	    <examples-list-print></examples-list-print>

	</div><!-- END section-content-djax  -->

</template>


<script>

	import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';
	import heroImage from 'components/hero-image.vue';
	// import modalButton from 'components/modal-button.vue';
	import examplesListPrint from 'components/examples-list-print.vue';

	export default {

		props: [ 'imageSrc' ],// END props
		components: { 
			
			buttonCloseSectionRaster, 
			heroImage, 
			examplesListPrint, 

		}, // END components

	}; // END export default

</script>


<style scoped>


</style>