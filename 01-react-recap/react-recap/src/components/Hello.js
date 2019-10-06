
import React from 'react';
import PropTypes from 'prop-types';


class Hello extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired
    }

    static defaultProps = {
        message: 'default value'
    }

    state = {
        isVisible : true,
        message: 'hello'
    }

    // toggleVisibility() {
    //     // this will be determined on runtime
    // }

    toggleVisibility = () => {
        // this === instance Hello
        // alert('hello');

        // this.setState({
        //     isVisible : false
        // });

        // this.setState({
        //     isVisible : !this.state.isVisible
        // });

        this.setState((yarivState) => {
            return {
                isVisible: !yarivState.isVisible
            }
        })
    }

    render() {
        return (
            <>
                {/* {
                     this.state.isVisible || <h1>not visible</h1>        
                }
                {
                    (this.state.isVisible && true) ? <h1>Hello World from component {this.props.message}</h1> : null
                } */}
                {
                    this.state.isVisible && <h1>Hello World from component {this.props.message}</h1>
                }
                
                <button onClick={this.toggleVisibility}>Toggle Visibility</button>
            </>
            
        );    
    }
}

export default Hello;

export const stam = 'yariv'
export const stamArray = []