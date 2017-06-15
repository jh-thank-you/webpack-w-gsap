<template>
    
	<div @click="exampleSelected" :id="id" class="boxframe" :sector="sector" :access="access">

		<div :class="currentClassArray()"></div>
		<span class="client-label handwritten"><p>{{ client }}</p></span>

		<img class="fadeMe" :src="getPic()" :alt="this.id + ' advertisment'">
	</div>

</template>


<script>

	import { eventBus } from 'assets/main.js';
	let currentClass = ['inner-frame-3', 'hover-me' ];

	export default {

		props: [ 'id', 'alt', 'client', 'sector', 'access', 'showModal' ], // END props
		data() {
			return {

				classArray: currentClass,

			}
		}, // END data
		computed: {


		}, // END computed
		created() {



		}, // END created
		methods: {

			currentClassArray() {

				currentClass = [ 'inner-frame-3', 'hover-me', this.access ];
	        	return currentClass;

			}, // END currentClassArray

			exampleSelected() {

				var access = this.access;

				if (access == 'locked') {

					var showModal = false;
		        	eventBus.$emit('modalVisibility', showModal);

					var showPasswordModal = true;
					eventBus.$emit('passwordStatus', showPasswordModal);

				} else {

					var showModal = true;
		        	eventBus.$emit('modalVisibility', showModal);

					this.imageSrc = this.id;

					this.$emit('imageSelectChanged', this.imageSrc);

					console.log(this.imageSrc + " = this.imageSrc - modal button clicked");

				}

			}, // END exampleSelected

			getPic() {
			  return require('assets/img/' + this.id + '1a-sm.png');
		      return 'assets/img/' + this.id + '1a-sm.png';
		    }, // END getPic

		}, // END methods
		mounted() {


		}, // END mounted

	}; // END export default

</script>



<style scoped>
	


</style>