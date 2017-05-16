<template>

	<nav class="conrner-nav">

		<nav-button-print></nav-button-print>

		<nav-button-video></nav-button-video>

		<nav-button-outdoor></nav-button-outdoor>

		<nav-button-online></nav-button-online>

	</nav>

</template>


<script>

	import navButtonPrint from 'components/nav-button-print.vue';
	import navButtonVideo from 'components/nav-button-video.vue';
	import navButtonOutdoor from 'components/nav-button-outdoor.vue';
	import navButtonOnline from 'components/nav-button-online.vue';
	import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';


	export default {

		components: { navButtonPrint, navButtonVideo, navButtonOutdoor, navButtonOnline, buttonCloseSectionRaster }, // END components

	}; // END export default

</script>



<style>
	


</style>