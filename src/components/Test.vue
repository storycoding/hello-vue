<template>
 	<div>
 		<div>{{title}}</div>
  		<span v-if="visible">yes!</span>
  		<span v-else>no!</span>
  		<p v-for='todo in todos'>{{todo}}</p>
  		<p v-for='place in places'>{{place.name}}</p>
  		<p v-bind:class='{blue: isBlue}'>bind class blue with boolean</p>
  		<p v-bind:style='{color: color}'>bind style color:'red'</p>
 		<p v-text='text'></p>
 		<div>
 			<input type="text" v-model="boundText"></input>
 		</div>
 		<p>{{boundText}}</p>
 		<div>
 			<label>logs button's innerHTML</label> <button v-on:click='handleClick'>this will be logged</button>
 		</div>
 		<div>
 			<label>logs bound content</label> <button v-on:click="handleClick('I am the bound content!')">something else will be logged</button>
 		</div>
 		<div>
 			<input type="text" v-on:keyup='keypress'>
 		</div>
 		<div>
 			<input type="text" v-on:keyup.enter='alertContent'>
 		</div>
  		<leComponent></leComponent>
  		<NestedTest></NestedTest>
	</div>
</template>

<script>

import Vue from 'vue';
import NestedTest from './NestedTest'

Vue.component('leComponent', { template: '<span> this is a Vue.component made in the Test.vue script</span>' })

export default {
  name: 'Test',
  components: { NestedTest },
  data() {
  	return {
  		title: 'Nuno tries vue',
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
  		boundText : 'this text is bound to an input via v-model',
  		handleClick : (content) => console.log( (content.target ? content.target.innerHTML : content ) ),
  		keypress : (event) => console.log(event.target.value),
  		alertContent : (event ) => alert(event.target.value)
  	}
  }
}
</script>