import React from 'react';
import useForms from '../use-forms';

export default function LoginControlled() {
    // {email: '...', password: '...'}
    const [values, somethingChanged] = useForms({email: 'yariv@nerdeez.com', password: '12345'});

    return (
        <form  onSubmit={handleLogin} noValidate>
            <input 
                value={values.email} type="email" name="email" placeholder="email" onChange={(event) => somethingChanged({...values, email: event.target.value})} />
            <br/>
            
            <input
                onChange={(event) => somethingChanged({...values, password: event.target.value})}
                value={values.password}  type="password" name="password" required placeholder="password" />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}