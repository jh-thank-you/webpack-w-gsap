<template>
    
<!-- 	<div @click="exampleSelected" :id="id" class="boxframe" :sector="sector">

		<div class="inner-frame-3 hover-me"></div>
		<span class="client-label handwritten"><p>{{ client }}</p></span>

		<img class="fadeMe" :src="getPic()" :alt="this.id + ' advertisment'">
	</div> -->

	<div v-if="showPasswordModal" class='password-modal'>

		<form id='password-form' class='log-in-form'>

			<label class="password-title">Password<input type='text' name='password' placeholder='Password'></label>

			<label class='password-response'>&nbsp;</label>

			<p><input id='submit-button' type='submit' class='button expanded'></p>

			<p><a type='cancel' class='button expanded cancel-me'>Cancel</a></p>
		</form>
	</div>

</template>


<script>

	import { eventBus } from 'assets/main.js';

	export default {

		props: [ 'id', 'alt', 'client', 'sector' ], // END props
		data() {
			return {

				showPasswordModal: false,
			}
		}, // END data
		computed: {


		}, // END computed
		methods: {


		}, // END methods
		created() {

			eventBus.$on('passwordStatus', (showPasswordModal) => {
	        
		        this.showPasswordModal = showPasswordModal;
		        return this.showPasswordModal;

		      }); // END eventBus


		}, // END created

	}; // END export default

</script>



<style scoped>
	


</style>