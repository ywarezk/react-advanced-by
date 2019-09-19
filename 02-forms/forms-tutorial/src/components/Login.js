import React from 'react';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    handleLogin = (event) => {
        console.log(`email: ${this.emailInput.current.value} password: ${this.passwordInput.current.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form  onSubmit={this.handleLogin} noValidate>
                <input ref={this.emailInput} type="email" name="emailField" placeholder="email" />
                <br/>
                
                <input ref={this.passwordInput} type="password" name="passwordField" required placeholder="password" />
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}



// export default function Login() {
//     const emailInput = React.createRef();
//     const passwordInput = React.createRef();

//     const handleLogin = (event) => {
//         console.log(`email: ${emailInput.current.value} password: ${passwordInput.current.value}`);
//         event.preventDefault();
//     }

//     return (
//         <form  onSubmit={handleLogin} noValidate>
//             <input ref={emailInput} type="email" name="emailField" placeholder="email" />
//             <br/>
            
//             <input ref={passwordInput} type="password" name="passwordField" required placeholder="password" />
//             <br />
//             <button type="submit">Submit</button>
//         </form>
//     )
// }