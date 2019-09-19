import React from 'react';
import formsHoc from '../forms.hoc';


class LoginControlled extends React.Component {

    // state = {
    //     email: 'yariv@nerdeez.com',
    //     password: 'hello'
    // }
    
    handleLogin = () => {
        console.log(this.props.values);
    }

    // somethingChanged = (stateKey, inputValue) => {
    //     this.setState({
    //         [stateKey] : inputValue
    //     })
    // }

    // somethingChanged2 = (event) => {
    //     this.setState({
    //         [event.target.name] : event.target.value
    //     })
    // }

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
            <StrongerForm initialValues={ { email: 'yariv@nerdeez.com', password: '12345'}}>
                {
                    (handleChange) => {
                        return (
                            <form  onSubmit={(event) => this.props.handleSubmit(event, this.handleLogin)} noValidate>
                                <input 
                                    value={this.props.values.email} type="email" name="email" placeholder="email" onChange={handleChange} />
                                <br/>
                                
                                <input
                                    onChange={handleChange} 
                                    value={this.props.values.password}  type="password" name="password" required placeholder="password" />
                                <br />
                                <button type="submit">Submit</button>
                            </form>
                        )
                    }
                }
            </StrongerForm>

            
        );
    }
}


export default formsHoc({
    email: 'yariv@nerdeez.com',
    password: 'hello'
})(LoginControlled);

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