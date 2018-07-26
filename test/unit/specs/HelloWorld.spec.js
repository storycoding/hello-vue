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

		//get all the methods and properties of rendered component
		for (var key in rendered) {
			console.log(key + ': ' + rendered[key]);
			console.log('=================================================')
		}

		expect(rendered.getAllByText('Essential Links'))
	});
});


describe( 'Counter.vue', () => {

	const rendered = render(Counter);

	it('Should exist', () => {
		expect(rendered.getByTestId('count'));
	});

	it('Should render with the intial value of 0', () => {
		expect(rendered.getByTestId('count').textContent).toBe('0');
	});

	it('Should increment when increment button is clicked', () => {
		Simulate.click(rendered.getByTestId('increment'));
		expect(rendered.getByTestId('count').textContent).toBe('1');
	});

	it('Should decrement when decrement button is clicked', () => {
		Simulate.click(rendered.getByTestId('decrement'));
		expect(rendered.getByTestId('count').textContent).toBe('0');
	});


});