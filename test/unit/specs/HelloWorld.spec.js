import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld';
import Counter from '@/components/Counter';

import { render, Simulate } from 'vue-testing-library';

describe('HelloWorld.vue', () => {
 	it('should render correct contents', () => {
	    const Constructor = Vue.extend(HelloWorld);
	    const vm = new Constructor().$mount();
	    expect(vm.$el.querySelector('.hello h1').textContent)
      		.toEqual('Welcome to Your Vue.js App');
  	});
});


// This vvvvvv

describe('HelloWorld.vue', () => {
	it('should render component', () => {

		const rendered = render(HelloWorld);

		// get all the methods and properties of rendered component
		// for (var key in rendered) {
		// 	console.log(key + ': ' + rendered[key]);
		// 	console.log('=================================================')
		// }

		expect(rendered.getAllByText('Essential Links'))
	});
});


describe( 'Counter.vue', () => {
	it('Should exist', () => {
		const rendered = render(Counter);
		expect(rendered.getByTestId('count'));
	});

	it('Should render with the intial value of 0', () => {
		const rendered = render(Counter);
		expect(rendered.getByTestId('count').textContent).toBe('0');
	});


});