<template>
	<div>
		<h3 data-testid='count'>{{count}}</h3>
		<button v-on:click="increment()" data-testid='increment'>+</button>
		<button v-on:click="decrement()" data-testid='decrement'>-</button>
	</div>
</template>

<script>
	
	export default {
		name: 'Counter',
		props: {
			count : {
				type : Number,
				default	: 0
			}	
		},
		methods: {
			increment: function() {
				this.count ++
			},
			decrement: function() {
				this.count --
			}
		}
	}

</script>

<style scoped>

	h3 {
		color: blue;
	}

</style>