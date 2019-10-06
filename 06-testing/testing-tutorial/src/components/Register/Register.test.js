import {mount} from 'enzyme';
import React from 'react';
import Register from './Register';
import {expect} from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import { MemoryRouter, withRouter, Route } from 'react-router-dom';


describe('<Register />', function() {
    let registerWrapper;
    let historyRouter;

    // mount to our component
    beforeEach(function() {
        const div = document.createElement('div');
        registerWrapper = mount(
            (
            <MemoryRouter>
                <Route component={Register} />
                
                <Route component={({history}) => {
                    historyRouter= history
                    return null;
                    }} /> 
            </MemoryRouter>
            ), 
            {attachTo: div}
        );
        document.body.appendChild(div);
    });

    afterEach(function() {
        // registerWrapper.unmount();
    });

    it('sanity check', function() {
        expect(registerWrapper.find('form').exists()).to.equal(true);
    });

    it('required validation is working', function(done) {
        // registerWrapper.find('button').simulate('click');
        registerWrapper.find('form').simulate('submit');
        setTimeout(() => {
            registerWrapper.update();
            expect(registerWrapper.find('.alert.alert-danger').hostNodes().length).to.equal(2);
            done();
        });
    });

    it.only('axios is sending the proper values from the form', function(done) {
        // const fakeCb = sinon.fake();
        // registerWrapper.setProps({
        //     cb: fakeCb
        // });

        console.log(registerWrapper.props());

        const axiosFake = sinon.fake.resolves({
            data: {
                firstName: 'Yariv',
                lastName: 'Katz',
                id: 1
            },
            status: 201
        });
        sinon.replace(axios, 'post', axiosFake);
        
        const firstNameWrapper = registerWrapper.find('input[name="firstName"]');
        firstNameWrapper.getDOMNode().value = 'Yariv1';
        firstNameWrapper.simulate('change');

        const lastNameWrapper = registerWrapper.find('input[name="lastName"]');
        lastNameWrapper.getDOMNode().value = 'Katz1';
        lastNameWrapper.simulate('change');

        registerWrapper.find('form').simulate('submit');

        setTimeout(() => {
            registerWrapper.update();
            console.log(axiosFake.lastArg);
            expect(axiosFake.lastArg).to.deep.equal({firstName: 'Yariv1', lastName: 'Katz1'});
            expect(historyRouter.location.pathname).to.equal('/dashboard')
            sinon.restore();
            done();
        })
    });

    // it('axios is sending the proper values from the form', function(done) {
    //     const fakeCb = sinon.fake();
    //     registerWrapper.setProps({
    //         cb: fakeCb
    //     });

    //     const axiosFake = sinon.fake.rejects({
    //         response: {
    //             status: 401,
    //             data: {message: 'You are not authorized'}
    //         }
    //     });
    //     sinon.replace(axios, 'post', axiosFake);
        
    //     const firstNameWrapper = registerWrapper.find('input[name="firstName"]');
    //     firstNameWrapper.getDOMNode().value = 'Yariv1';
    //     firstNameWrapper.simulate('change');

    //     const lastNameWrapper = registerWrapper.find('input[name="lastName"]');
    //     lastNameWrapper.getDOMNode().value = 'Katz1';
    //     lastNameWrapper.simulate('change');

    //     registerWrapper.find('form').simulate('submit');

    //     setTimeout(() => {
    //         registerWrapper.update();
    //         console.log(axiosFake.lastArg);
    //         expect(axiosFake.lastArg).to.deep.equal({firstName: 'Yariv1', lastName: 'Katz1'})
    //         expect(registerWrapper.find('.alert.alert-danger').hostNodes().length).to.equal(1);
    //         expect(fakeCb.callCount).to.equal(0);
    //         done();
    //     })
    // });

});