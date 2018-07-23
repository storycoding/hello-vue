<template>
 	<button v-on:click="$emit('childEmission','1')">emit number to parent</button>
</template>

<script>

	export default { 
		name: 'Emitter'
	}

</script>


<style scoped>

	button {
		background-color: blue;
		color: white;
	}

</style>