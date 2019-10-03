/**
 * <h1> styled
 */

import styled from 'styled-components';

// <H1 disabled />
export default styled.h1`
    font-size: 20px;
    color: red;
    background-color: blue;
    border-color: ${(props) => {
        if (props.disabled) {
            return 'red';
        } else {
            return 'blue';
        }
    }}
`

// function h1(h1Styles, num1, num2) {

// }

// h1(
//     `
//         hello %
//         world 
//         foo %
//         bar
//     `, 1 + 5, 10 / 2
// )

// // h1(['hello', 'world foo', 'bar'], 1 + 5, 10 / 2)
// h1`
//     hello ${1 + 5}
//     world 
//     foo ${10 / 2}
//     bar
// `