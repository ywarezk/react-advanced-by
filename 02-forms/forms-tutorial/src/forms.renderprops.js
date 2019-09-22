/**
 * <StrongerForm>{ () => (<form> ... </form>) }</StrongerForm>
 */

import React from 'react';

export default class StrongerForm extends React.Component {
    somethingChanged = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return this.props.children(this.somethingChanged)
    }
}

