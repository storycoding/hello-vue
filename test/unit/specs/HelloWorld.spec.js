import Vue from 'vue';
import { render, Simulate } from 'vue-testing-library';

import HelloWorld from '@/components/HelloWorld';

describe('HelloWorld.vue', () => {
 	it('should render correct contents', () => {
	    const Constructor = Vue.extend(HelloWorld);
	    const vm = new Constructor().$mount();
	    expect(vm.$el.querySelector('.hello h1').textContent)
      		.toEqual('Welcome to Your Vue.js App');
  	});
});


describe('HelloWorld.vue', () => {
	it('should render component', () => {

		const rendered = render(HelloWorld);

		//get all the methods and properties of rendered component
		for (var key in rendered) {
			console.log(key + ': ' + rendered[key]);
			console.log('=================================================')
		}

		expect(rendered.getAllByText('Essential Links'))
	});
});