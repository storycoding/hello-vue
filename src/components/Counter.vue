<template>
	<div>
		<h3 data-testid='count'>{{count}}</h3>
	</div>
	
</template>

<script>
	
	export default {
		name: 'Counter',
		props : {
			count : {
				type : Number,
				default	: 0
			}	
		}
	}

</script>

<style scoped>

	h3 {
		color: blue;
	}

</style>