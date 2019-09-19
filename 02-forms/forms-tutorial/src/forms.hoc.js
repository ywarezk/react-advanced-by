/**
 * Create Higher Order Component
 * The wraps forms
 * and encapsulated common form actions:
 *     somethingChanged
 *     state
 *     event.preventDefault
 */

 import React from 'react';

 // formsHoc(configuration)(LoginForm) => formsHoc( {email: 'yariv@...', password: ...} )
 // formsHoc(LoginForm, configuration)
 // <StrongerForm stamProperty={}  />
 export default function formsHoc(initialValues) {
    return function(FormComponent) {
        
        return class StrognerForm extends React.Component {
            constructor(props) {
                super(props);
                this.state = initialValues;
            }

            somethingChanged = (event) => {
                this.setState({
                    [event.target.name] : event.target.value
                })
            }

            handleSubmit = (event, cb) => {
                event.preventDefault();
                cb();
            }
            
            render() {
                return (
                    <FormComponent {...this.props} handleChange={this.somethingChanged} values={this.state} handleSubmit={this.handleSubmit}  />
                )
            }
    
        }

    }

    
 }