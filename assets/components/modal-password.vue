<template>

	<div v-if="showPasswordModal" class='password-modal'>

		<form id='password-form' class='log-in-form'>

			<label class="password-title">Password<input type='text' name='password' placeholder='Password' v-model="password"></label>

			<label class='password-response' v-model="message"><transition name="fade" @after-enter="show = false"><span v-if="show">{{ message }}</span></transition></label>

			<p><input @click.prevent="passwordSubmit()" id='submit-button' type='submit' class='button expanded'></p>

			<p><a @click="show = false; password = ''; showPasswordModal = false;" type='cancel' class='button expanded cancel-me'>Cancel</a></p>
		</form>
	</div>

</template>


<script>

	import { eventBus } from 'assets/main.js';

	export default {

		props: [ 'id', 'alt', 'client', 'sector', 'lockit', ], // END props
		data() {
			return {

				showPasswordModal: false,
				show: false,
				message: '',
				password: '',
				selectResponse: [
					'No soup for you!', 
					"I'm a Toys'R'Us Kid too!", 
					"These aren't the droids you're looking for... Move along.", 
					'Hhhhhmmmm Salty!',
					'Again? Really?!',
					'Shall we play a game?',
					'Great googly moogly Batman!',
					"Dammit Jim I'm a Doctor!",
					"A mind is a terrible thing to waste.",
					"Reach out and touch someone.",
					"Help! I've fallen and can't get up.",
					"When will there be a sidekick uprising?",
					"Help me Obi-Wan Kenobi, you're my only hope.",
					"Just do it!",
					"Think Different.",
					"Enjoy the ride.",
					"Isn't that special.",
					"Meteor S**t!",
					"To infinity and beyond!",
					"Wrecked 'em? Damn near killed 'em!",
					"I am afraid I can't do that Dave.",
					"This sucks worse than that time I went to that museum.",
					"I owe it all to little chocolate donuts.",
					'I need more cowbell!',
					"One tube is all you need.",
					"My brother might be coming the other way!",
					"Thank you for taking Johnny Cab."
				], // END selectResponse
			}
		}, // END data
		computed: {


		}, // END computed
		created() {

			eventBus.$on('passwordStatus', (showPasswordModal) => {
	        
		        this.showPasswordModal = showPasswordModal;
		        return this.showPasswordModal;

		      }); // END eventBus


		}, // END created
		methods: {

			passwordSubmit() {

				var password = this.password 

				if (password == 'BigPharma') {

					// then animate the modal
					console.log('Correct password entered');
					
					this.password = '';
					return this.password;

				} else {
					console.log('Wrong password entered');

						this.show = true;

						this.password = '';

						this.message = this.selectResponse[Math.floor(Math.random() * this.selectResponse.length)];

						console.log(this.message + ' = currentResponse');
						
						return this.message, this.password, this.show;

				} // END IF ELSE

			}, // END passwordSubmit

		} // END methods
		

	}; // END export default

</script>



<style scoped>

	/* fade the wrong password response text */
	
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 1.75s ease;
	}

	.fade-leave-leave {
		/* Vue JS Default is opacity: 1; */
		/* opacity: 1; */
	}

	.fade-leave-active {
		transition: opacity 1.75s ease;
		opacity: 0;
	}


</style>