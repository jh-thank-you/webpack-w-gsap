<template>

	<nav class="conrner-nav">

		<nav-button v-for="navigationButton in navigationButtons" v-bind:key="navigationButton.id" :id="navigationButton.id" :section="navigationButton.section"></nav-button>

	</nav>

</template>


<script>

	import navButton from 'components/nav-button.vue';

	export default {

		components: {
		 
			navButton,

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
	


</style>