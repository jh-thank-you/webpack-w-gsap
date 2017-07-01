<template>

	<div :id="id" class="section-wrap texture-paper-bkg">
	    
	    <button-close-section-raster></button-close-section-raster>

<!-- 	    <span>Checked Sectors: {{ checkedSector }}</span>
 -->		
		<!-- id data is passed in by routes see notes below-->
	    <hero-image :class="id"></hero-image>

		<modal-slideshow v-if="showModal" @close="showModal = false" :imageSrc="imagesource"></modal-slideshow>

		<!-- 
		have too research v-cloak more: 
		https://stackoverflow.com/questions/34870926/v-cloak-does-not-work-in-vue-js 
		-->
		<div v-cloak id="section-content" class="grid-isotope justify-content handwritten">
			<transition-group name="slideme">
				<modal-button v-for="example in getExamples()" v-bind:key="example.exampleid" :id="example.exampleid" :client="example.client" :sector="example.sector" :alt="example.alt" :access="example.access" @imageSelectChanged="imagesource = $event"></modal-button>
			</transition-group>
		</div>

	</div>

</template>


<script>
	import { eventBus } from 'assets/main.js';

	import buttonCloseSectionRaster from 'components/button-close-section-raster.vue';
	import heroImage from 'components/hero-image.vue';
	import modalSlideshow from 'components/modal-slideshow.vue';
	import modalButton from 'components/modal-button.vue';

	let currentExamples = null;

	export default {

		// passing in ID data from nav-button to hero-image through vue-router 
		// needs to be passed here in the parent level vs at the hero-image child level
		props: [ 'id' ],// END props
		components: { 
			buttonCloseSectionRaster, 
			heroImage, 
			modalSlideshow, 
			modalButton,

		}, // END components
		data() {
	      return {

	      	showModal: false,
	      	exampleid: '',
			client: '',
			sector: '',
			alt: '',
			imagesource: '',
			access: '',
			selected: [],
			examples: currentExamples,
			// checkedSector: [],

	      }
	    }, // END data
		created() {

			if (this.$root.debug) console.log('im created')

			eventBus.$on('modalVisibility', (showModal) => {
			    this.showModal = showModal
			    return this.showModal
			})
			eventBus.$on('selectedChanged', (selected) => {
			    this.selected = selected

			    if (this.$root.debug) console.log(selected + " = checkbox selected value passed to section.vue");
			 })


		}, // END created
		computed: {


		}, // END computed
		methods: {

			// dynamically set which array is passed based on the Parent ID data
		 	getExamples() {

		 		if (this.$root.debug) console.log('getExamples called')
		 		eventBus.$emit('sendSelected') // get the current preferece form value from the contacts-and-prefs component
				
		 		var currentID = this.id;

				if (currentID == 'section-print') {

					if (this.$root.debug) console.log( currentID + ' = currentID Print Examples');

					currentExamples = [ 

						{exampleid: 'modalPrintAdvil', alt: 'Advil Ad Blah Blah Blah', client: 'Advil', sector: ['default', 'healthcare', 'pharma'], access: 'unlocked', },

						{exampleid: 'modalPrintAMNH', alt: 'American Museum of Natural History Ad', client: 'AMNH', sector: ['tourism'], access: 'unlocked', },

						{exampleid: 'modalPrintAmex', alt: 'Amex Ad', client: 'Amex', sector: ['financial'], access: 'unlocked', },

						{exampleid: 'modalPrintAmtrak', alt: 'Amtrak Ad', client: 'Amtrak', sector: ['default', 'transportation', 'tourism'], access: 'unlocked', },

						{exampleid: 'modalPrintBayer', alt: 'Bayer Ad', client: 'Bayer', sector: ['default', 'healthcare', 'pharma'], access: 'unlocked', },

						{exampleid: 'modalPrintBonitaBay', alt: 'Bonita Bay Ad', client: 'Bonita Bay', sector: ['realestate', 'hotel'], access: 'unlocked', },

						{exampleid: 'modalPrintCardeneIV', alt: 'Cardene I.V. Ad', client: 'Cardene I.V.', sector: ['healthcare', 'pharma'], access: 'locked', },

						{exampleid: 'modalPrintCigna', alt: 'CIGNA Ad', client: 'CIGNA', sector: ['default', 'btob', 'insurance', 'healthcare'], access: 'unlocked', },

						{exampleid: 'modalPrintCimzia', alt: 'Cimzia Ad', client: 'Cimzia', sector: ['default', 'healthcare', 'pharma'], access: 'locked', },

						{exampleid: 'modalPrintDell', alt: 'Dell Ad', client: 'Dell', sector: ['default', 'technology'], access: 'unlocked', },

						{exampleid: 'modalPrintCreditSuisse', alt: 'Credit Suisse Ad', client: 'Credit Suisse', sector: ['default', 'financial'], access: 'unlocked', },

						{exampleid: 'modalPrintEllisIsland', alt: 'Ellis Island Ad', client: 'Ellis Island', sector: ['default', 'tourism'], access: 'unlocked', },

						{exampleid: 'modalPrintEspn', alt: 'ESPN Ad', client: 'ESPN', sector: ['default', 'sports', 'fitness'], access: 'unlocked', },

						{exampleid: 'modalPrintFlIntlMuseum', alt: 'Florida International Museum Ad', client: 'FL Intl. Museum', sector: ['default', 'tourism'], access: 'unlocked', },

						{exampleid: 'modalPrintGinkoba', alt: 'Ginkoba Ad', client: 'Ginkoba', sector: ['default', 'healthcare', 'pharma', 'nutrition'], access: 'unlocked', },

						{exampleid: 'modalPrintGoldmanSachs', alt: 'Goldman Sachs Ad', client: 'Goldman Sachs', sector: ['financial'], access: 'unlocked', },

						{exampleid: 'modalPrintKoFightgear', alt: 'KO Fightgear Ad', client: 'KO Fightgear', sector: ['default', 'sports', 'fitness'], access: 'unlocked', },

						{exampleid: 'modalPrintLcc', alt: 'LCC Ad', client: 'LCC', sector: ['publicservice'], access: 'unlocked', },

						{exampleid: 'modalPrintLevemir', alt: 'Levemir Ad', client: 'Levemir', sector: ['healthcare', 'pharma'], access: 'locked', },

						{exampleid: 'modalPrintLogos', alt: 'Logos Various', client: 'Logos', sector: ['default', 'branding', 'btob', 'healthcare', 'fitness', 'publicservice', 'sports'], access: 'unlocked', },

						{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: ['default', 'beauty', 'fashion', 'fragrance'], access: 'unlocked', },

						{exampleid: 'modalPrintMistral', alt: 'Mistral Ad', client: 'Mistral', sector: ['default', 'sports', 'fitness'], access: 'unlocked', },

						{exampleid: 'modalPrintNyBloodCenter', alt: 'NY Blood Center Ad', client: 'NY Blood Center', sector: ['default', 'healthcare', 'publicservice'], access: 'unlocked', },

						{exampleid: 'modalPrintOyamaKarate', alt: 'Oyama Karate Ad', client: 'Oyama Karate', sector: ['default', 'sports', 'fitness'], access: 'unlocked', },

						{exampleid: 'modalPrintSpiriva', alt: 'Spiriva Ad', client: 'Spiriva', sector: ['healthcare', 'pharma'], access: 'locked', },

						{exampleid: 'modalPrintTradestream', alt: 'Tradestream Ad', client: 'Tradestream', sector: ['btob', 'shipping'], access: 'unlocked', },

						{exampleid: 'modalPrintVertexLinens', alt: 'Vertex Linens Ad', client: 'Vertex Linens', sector: ['btob', 'cleaning'], access: 'unlocked', },

					]; // END currentExamples

					// return currentExamples;
					return this.filteredExamples(currentExamples);

				} else if (currentID == 'section-video') {

					if (this.$root.debug) console.log( currentID + ' = currentID Video Examples');

					currentExamples =  [ 

						{exampleid: 'modalPrintAdvil', alt: 'Advil Video Campaign', client: 'Advil', sector: ['default', 'healthcare', 'pharma'], access: 'unlocked', },

						{exampleid: 'modalPrintCimzia', alt: 'Cimzia Video Campaign', client: 'Cimzia', sector: ['default', 'healthcare', 'pharma'], access: 'locked', },

						{exampleid: 'modalPrintCreditSuisse', alt: 'Credit Suisse Video Campaign', client: 'Credit Suisse', sector: ['default', 'financial'], access: 'unlocked', },

						{exampleid: 'modalPrintCSFBDirect', alt: 'CSFB Direct Video Campaign', client: 'CSFB Direct', sector: ['default', 'financial'], access: 'unlocked', },

						{exampleid: 'modalPrintGinkoba', alt: 'Ginkoba Video Campaign', client: 'Ginkoba', sector: ['default', 'healthcare', 'pharma', 'nutrition'], access: 'unlocked', },

						{exampleid: 'modalPrintNyBloodCenter', alt: 'NY Blood Center Video Campaign', client: 'NY Blood Center', sector: ['default', 'healthcare', 'publicservice'], access: 'unlocked', },

					]; // END currentExamples

					// return currentExamples;
					return this.filteredExamples(currentExamples);

				} else if (currentID == 'section-outdoor') {

					if (this.$root.debug) console.log( currentID + ' = currentID Outdoor Examples');

					currentExamples =  [ 

						{exampleid: 'modalPrintCimzia', alt: 'Cimzia Ad', client: 'Cimzia', sector: ['default', 'healthcare', 'pharma'], access: 'locked', },

						{exampleid: 'modalPrintGinkoba', alt: 'Ginkoba Ad', client: 'Ginkoba', sector: ['default', 'healthcare', 'pharma', 'nutrition'], access: 'unlocked', },

						{exampleid: 'modalPrintGoldmanSachs', alt: 'Goldman Sachs Ad', client: 'GTE', sector: ['financial'], access: 'unlocked', },

						{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: ['default', 'beauty', 'fashion', 'fragrance'], access: 'unlocked', },

						{exampleid: 'modalPrintVertexLinens', alt: 'Vertex Linens Ad', client: 'Metro Card', sector: ['btob', 'cleaning'], access: 'unlocked', },

					]; // END currentExamples

					// return currentExamples;
					return this.filteredExamples(currentExamples);

				} else if (currentID == 'section-online') {

					if (this.$root.debug) console.log( currentID + ' = currentID Online Examples');

					currentExamples =  [ 

						{exampleid: 'modalPrintDell', alt: 'Dell Ad', client: 'Dell', sector: ['default', 'technology'], access: 'unlocked', },

						{exampleid: 'modalPrintCreditSuisse', alt: 'Credit Suisse Ad', client: 'Credit Suisse', sector: ['default', 'financial'], access: 'unlocked', },

						{exampleid: 'modalPrintKoFightgear', alt: 'KO Fightgear Ad', client: 'KO Fightgear', sector: ['default', 'sports', 'fitness'], access: 'unlocked', },

						{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'Mally Beauty', sector: ['default', 'beauty', 'fashion', 'fragrance'], access: 'unlocked', },

						{exampleid: 'modalPrintMallyBeauty', alt: 'Mally Beauty Ad', client: 'HEART Martial Arts', sector: ['default', 'beauty', 'fashion', 'fragrance'], access: 'unlocked', },

						{exampleid: 'modalPrintVertexLinens', alt: 'Vertex Linens Ad', client: 'Vertex Linens', sector: ['btob', 'cleaning'], access: 'unlocked', },

					]; // END currentExamples

					// return currentExamples;
					return this.filteredExamples(currentExamples);

				} else {
					if (this.$root.debug) console.log(this.id + ' - Error no data for examples in section.vue component');
				}; // END If - Else Examples

		    }, // END getExamples

		    /* ****************************************************** 
					A Big thank you to Sven for helping me with
					the filter and eventBus communication.
					https://github.com/svevil

					To Everyone, he is Super nice! 
					Super fast! and Super knowledgeable!

						- P.S. Sven, I promise to learn Vuex!
		    ******************************************************* */

		    // Filter the results from the checkboxes
		    filteredExamples(currentExamples) {
		    	if (this.$root.debug) console.log(this.selected + " = filteredExamples - current selected industries form value");

		    	return currentExamples.filter((sector) => { // loop over all items in currentExamples
				    return sector.sector.some((el) => { // check every item in the 'sector' array
				      return this.selected.indexOf(el) > -1 // check if it exists in this.selected
				    })
				 })

				// return currentExamples;

			}, // END filteredExamples

		}, // END methods

	}; // END export default

</script>


<style scoped>

	/* slideme in or out - modal-button */

	.slideme-enter {
		opacity: 0;
		width: 0;
		/* height: 0; */
	}

	.slideme-enter-active {
		transition: all .35s ease-in;
	}


	@media all and (min-width: 801px) {
		.slideme-enter-to {
			/* Vue JS Default is opacity: 1; */
			width: 32%;
			/* height: 100%; */
		}
	}

	@media all and (min-width: 501px) and (max-width: 800px) {
	  .slideme-enter-to {
			/* Vue JS Default is opacity: 1; */
			width: 49%;
			/* height: 100%; */
		}
	}

	@media all and (max-width: 500px) {
	  .slideme-enter-to {
			/* Vue JS Default is opacity: 1; */
			width: 100%;
			/* height: 100%; */
		}
	}



	@media all and (min-width: 801px) {
		.slideme-leave {
			/* Vue JS Default is opacity: 1; */
			width: 32%;
			/* height: 100%; */
		}
	}

	@media all and (min-width: 501px) and (max-width: 800px) {
	  .slideme-leave {
			/* Vue JS Default is opacity: 1; */
			width: 49%;
			/* height: 100%; */
		}
	}

	@media all and (max-width: 500px) {
	  .slideme-leave {
			/* Vue JS Default is opacity: 1; */
			width: 100%;
			/* height: 100%; */
		}
	}

	.slideme-leave-active {
		transition: all .35s ease-out;
		/* position: absolute; */
		/* would normally result in a smoother 
		animation but div size os based on a 
		percentage when position is absolute 
		it scales too large */
	}

	.slideme-leave-to {
		opacity: 0;
		width: 0;
		/* height: 0; */
	}
	
	.slideme-move {
		transition: transform .35s;
	}


</style>