import Message from './Message';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import {createStore} from 'redux';
import reducer from '../../redux/reducer';
import {expect} from 'chai';

describe('<Message />', function() {
    let messageWrapper;

    afterEach(function() {
        messageWrapper.unmount();
    })


    describe('when app starts', function(){
        

        // mount to my component
        // when my app starts
        beforeEach(function() {
            const div = document.createElement('div');
            messageWrapper = mount(
                (
                    <Provider store={store}>
                        <Message />
                    </Provider>
                )
                , {attachTo: div}
            );
            document.body.appendChild(div);
        })
    });

    describe('after something happened and there is a different state', function() {


        beforeEach(function() {
            const specialStore = createStore(reducer, {message: 'after a few action this is the message'})

            const div = document.createElement('div');
            messageWrapper = mount(
                (
                    <Provider store={specialStore}>
                        <Message />
                    </Provider>
                )
                , {attachTo: div}
            );
            document.body.appendChild(div);
        });

        

        it.only('our component displays the proper message', function() {
            expect(messageWrapper.find('h1').text()).to.equal('after a few action this is the message');    
        })

        it.only('our component displays the proper message', function() {
            messageWrapper.find('button').simulate('click');
            expect(messageWrapper.find('h1').text()).to.equal('new message');    
        })
    });

    

})