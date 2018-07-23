<template>
 	<h1 id="NestedTest">{{title}}</h1>
</template>

<script>

	export default { 
		name: 'NestedTest',
		props: {
	  	title : {
	  		type: String,
	  		default: 'Nuno tries Vue.js'
	  	}
	  }

	}

</script>>


<style scoped>

	h1 {
		color: green;
	}

</style>