import React from 'react';

export default function RegisterControlled() {
    const [email, setEmail] = useState('yariv@nerdeez.com');
    const [password, setPassword] = useState('hello');
    const [firstName, setFirstName] = useState('Yariv');
    const [lastName, setLastName] = useState('Katz');

    const somethingChanged2 = (value, changeFunction) => {
        changeFunction(value);
    }

    return (
        <form  onSubmit={handleLogin} noValidate>
            <input 
                value={email} type="email" name="email" placeholder="email" onChange={(event) => somethingChanged2(event.target.value, setEmail)} />
            <br/>
            
            <input
                onChange={(event) => somethingChanged2(event.target.value, setPassword)}
                value={password}  type="password" name="password" required placeholder="password" />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}