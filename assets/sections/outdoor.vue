<template>
	<div id="section-wrap" class="texture-paper-bkg">

		<button-close-section-raster></button-close-section-raster>

	    <hero-image></hero-image>
	        	
	    <examples-list-outdoor></examples-list-outdoor>

		
	</div>
</template>


<script>

	import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';
	import heroImage from 'components/hero-image.vue';
	// import modalButton from 'components/modal-button.vue';
	import examplesListOutdoor from 'components/examples-list-outdoor.vue';

	export default {

		components: {

			buttonCloseSectionRaster, 
			heroImage, 
			examplesListOutdoor,

		}, // END

	}; // END export default

</script>


<style scoped>


</style>