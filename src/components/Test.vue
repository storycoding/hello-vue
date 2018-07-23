<template>
 	<div>
 		<NestedTest title='Nuno knows Vue.js'></NestedTest>
 		<div>
 			<span v-if="visible">yes!</span>
	  		<span v-else>no!</span>
	  		<p v-for='todo in todos'>{{todo}}</p>
	  		<p v-for='place in places'>{{place.name}}</p>
	  		<p v-bind:class='{blue: isBlue}'>bind class blue with boolean</p>
	  		<p v-bind:style='{color: color}'>bind style color:'red'</p>
	 		<p v-text='text'></p>
 		</div>
 		<div>
 			<input type="text" v-model="boundText"></input>
 			<p>{{boundText}}</p>
 		</div>
 		<div>
 			<label>logs button's innerHTML: </label> <button v-on:click='handleClick'>this will be logged</button>
 		</div>
 		<div>
 			<label>logs bound content: </label> <button v-on:click="handleClick('I am the bound content!')">something else will be logged</button>
 		</div>
 		<div>
 			<label>log on keyup: </label> <input type="text" v-on:keyup='keypress'>
 			<br>
 			<label>alert on keyup.enter: </label> <input type="text" v-on:keyup.enter='alertContent'>
 		</div>
  		<div>
 			<label>first: </label> <input type="text" v-model="user.first"></input>
 			<br>
 			<label>last: </label> <input type="text" v-model="user.last"></input>
 			<br>
  			<h1>{{dynamicText()}}</h1>
  		</div>

  		<leComponent></leComponent>
	</div>
</template>

<script>

import Vue from 'vue';
import NestedTest from './NestedTest'

Vue.component('leComponent', { template: '<span> this is a Vue.component made in the Test.vue script</span>' })

export default {
  name: 'Test',
  components: { NestedTest },

   methods: {
  	handleClick : (content) => console.log( (content.target ? content.target.innerHTML : content ) ),
	keypress : (event) => console.log(event.target.value),
	alertContent : (event) => alert(event.target.value),
	dynamicText() { return this.user.first + ' ' + this.user.last }
  },

  data() {
  	return {
  		user: {
  			first: 'Nuno',
  			last: 'Neves'
  		},
  		visible: true,
  		todos: [
  			'array (for let) todos[0]',
  			'array (for let) todos[1]'
  		],
  		places: [
  			{ name: 'object (for in) places[0]' },
  			{ name: 'object (for in) places[1]'}
  		],
  		isBlue: true,
  		color: 'red',
  		text: 'text sourced via v-text',
  		boundText : 'this text is bound to an input via v-model'
  	}
  }
}
</script>