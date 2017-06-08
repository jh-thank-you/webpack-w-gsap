<template>

	<nav class="conrner-nav">

		<nav-button v-for="navigationButton in navigationButtons" v-bind:key="navigationButton.id" :id="navigationButton.id" :section="navigationButton.section"></nav-button>

		<!-- <hero-image></hero-image> -->

	</nav>

</template>


<script>

	import navButton from 'components/nav-button.vue';
	// import heroImage from 'components/hero-image.vue';


	export default {

		components: {
		 
			navButton,
			// heroImage,

		}, // END components
		data() {
			return {

				navigationButtons: [ 

					{id: 'nav-print', section: 'PRINT', },
					{id: 'nav-video', section: 'VIDEO', },
					{id: 'nav-outdoor', section: 'OUTDOOR', },
					{id: 'nav-online', section: 'ONLINE', },

				], // END navButtons

				id: '',
				section: '',

			}; // END return
		}, // END data

	}; // END export default

</script>



<style scoped>

#hero-wrap,
.hero-image {
	display: none;
	background-image: none;
}
	


</style>