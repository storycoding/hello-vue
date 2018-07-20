<template>
 	<div>
 		<div>{{title}}</div>
  		<spam v-if="visible">yes!</spam>
  		<spam v-else>no!</spam>
  		<p v-for='todo in todos'>{{todo}}</p>
  		<p v-for='place in places'>{{place.name}}</p>
  		<p v-bind:class='{blue: isBlue}'>this should have the class blue</p>
  		<p v-bind:style='{color: color}'>this should just be red by inline</p>
  		<leComponent></leComponent>
	</div>
</template>

<script>

import Vue from 'vue';

Vue.component('leComponent', { template: '<span>this is a template component</span>' })

export default {
  name: 'Man',
  data() {
  	return {
  		title: 'Nuno tries vue',
  		visible: true,
  		todos: [
  			'learn basic vuejs',
  			'get some kombutchas for the homies'
  		],
  		places: [
  			{ name: 'home' },
  			{ name: 'work'}
  		],
  		isBlue: true,
  		color: 'red'
  	}
  }
}
</script>