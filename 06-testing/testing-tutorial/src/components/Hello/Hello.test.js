
// beforeEach => mount our component
// beforeEach => fakes
// afterEach => unmount component
// afterEach => remove fakes
// it ... 
import { mount } from 'enzyme';
import Hello from './Hello';
import React from 'react';
import {expect} from 'chai';

describe('<Hello />', function() {
    let helloWrapper;

    // before(function() {

    // });

    // before(function() {

    // });

    // after(function() {

    // });

    // beforeEach(function() {

    // });

    // afterEach(function() {

    // });

    // describe('sdfsa', function() {

    // })

    beforeEach(function() {
        const div = document.createElement('div');
        helloWrapper = mount(<Hello />, {attachTo: div});
        document.body.appendChild(div);
    });

    afterEach(function() {
        helloWrapper.unmount();
    });

    it('component displays hello world', function() {
        const h1Wrapper = helloWrapper.find('h1');
        const helloText = h1Wrapper.text();
        expect(helloText).to.equal('hello default message');
    });

    it('changing the prop will change the message', function() {
        helloWrapper.setProps({message: 'new hello'});
        const h1Wrapper = helloWrapper.find('h1');
        const helloText = h1Wrapper.text();
        expect(helloText).to.equal('new hello');
    });


})