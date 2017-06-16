<template>

	
	<div>
	
		<nav-small-screen-menu></nav-small-screen-menu>

		<nav class="conrner-nav">

			<nav-button v-for="navigationButton in navigationButtons" v-bind:key="navigationButton.id" :id="navigationButton.id" :section="navigationButton.section"></nav-button>

		</nav>

	</div>

</template>


<script>

	import navButton from 'components/nav-button.vue';

	import navSmallScreenMenu from 'components/nav-small-screen-menu.vue';

	export default {

		components: {
		 
			navButton,
			navSmallScreenMenu,

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