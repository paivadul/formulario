import React, { useState } from 'react';

const Form = props => {
    const { input, setInput } = props;
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const onChange = e => {
        setInput({
        ...input,
        [e.target.name] : e.target.value,
        })
    };

    const createUser = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, confirmPassword} = input;
        const newUser = { firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };

    return <form onSubmit={ createUser }>
        <h3>{ formMessage() }</h3>
        <div>
            <label htmlFor='firstName'>First Name </label>
            <input onChange={onChange} type="text" name="firstName"/>
        </div>
        <div>
            <label htmlFor="lastName">Last Name </label>
            <input onChange={onChange} type="text" name="lastName"/>
        </div>
        <div>
            <label htmlFor="email">Email </label>
            <input onChange={onChange} type="text" name="email"/>
        </div>
        <div>
            <label htmlFor="password">Password </label>
            <input onChange={onChange} type="password" name="password" />
        </div>
        <div>
            <label htmlFor="confirmPassword">Confirm Password </label>
            <input onChange={onChange} type="password" name="confirmPassword" />
        </div>
        <button type="submit">Submit</button>
    </form>
};

export default Form;