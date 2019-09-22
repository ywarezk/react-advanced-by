import React from 'react';


// export default class RegisterControlled extends FormComponentParentOfAllForms {

// }

export default class RegisterControlled extends React.Component {

    state = {
        firstName: 'Yariv',
        lastName: 'Katz',
        email: 'yariv@nerdeez.com',
        password: 'hello'
    }
    
    handleLogin = (event) => {
        console.log(`email: ${this.state.email} password: ${this.state.password}`);
        event.preventDefault();
    }

    somethingChanged = (stateKey, inputValue) => {
        this.setState({
            [stateKey] : inputValue
        })
    }

    somethingChanged2 = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    // emailChanged = (event) => {
    //     this.setState({
    //         email: event.target.value
    //     })
    // }

    // passwordChanged = (event) => {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    render() {
        return (
            <form  onSubmit={this.handleLogin} noValidate>
                
                <input 
                    value={this.state.email} type="email" name="email" placeholder="email" onChange={this.somethingChanged2} />
                <br/>
                
                <input
                    onChange={this.somethingChanged2} 
                    value={this.state.password}  type="password" name="password" required placeholder="password" />
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

// export default function LoginControlled() {
//     const [email, setEmail] = useState('yariv@nerdeez.com');
//     const [password, setPassword] = useState('hello');

//     const somethingChanged2 = (value, changeFunction) => {
//         changeFunction(value);
//     }

//     return (
//         <form  onSubmit={handleLogin} noValidate>
//             <input 
//                 value={email} type="email" name="email" placeholder="email" onChange={(event) => somethingChanged2(event.target.value, setEmail)} />
//             <br/>
            
//             <input
//                 onChange={(event) => somethingChanged2(event.target.value, setPassword)}
//                 value={password}  type="password" name="password" required placeholder="password" />
//             <br />
//             <button type="submit">Submit</button>
//         </form>
//     )
// }