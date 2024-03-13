import React, { useState } from 'react';

const Form = (props) => {
    const { input, setInput } = props;
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });

        let errorMessage = '';

        switch(name) {
            case 'firstName':
            case 'lastName':
                if (value.length < 2) {
                    errorMessage = `${name} must be at least 2 characters long!`;
                }
                break;
            case 'email':
                if (value.length < 5) {
                    errorMessage = 'Email must be at least 5 characters long!';
                }
                break;
            case 'password':
                if (value.length < 8) {
                    errorMessage = 'Password must be at least 8 characters long!';
                }
                break;
            case 'confirmPassword':
                if (value !== input.password) {
                    errorMessage = 'Passwords do not match!';
                }
                break;
            default:
                break;
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage
        }));
    };

    const createUser = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, confirmPassword } = input;
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return (
        <form onSubmit={createUser}>
            <h3>{formMessage()}</h3>
            <div>
                <label htmlFor='firstName'>First Name </label>
                <input onChange={onChange} type="text" name="firstName" />
                <p>{errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}</p>
            </div>
            <div>
                <label htmlFor="lastName">Last Name </label>
                <input onChange={onChange} type="text" name="lastName" />
                <p>{errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}</p>
            </div>
            <div>
                <label htmlFor="email">Email </label>
                <input onChange={onChange} type="text" name="email" />
                <p>{errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}</p>
            </div>
            <div>
                <label htmlFor="password">Password </label>
                <input onChange={onChange} type="password" name="password" />
                <p>{errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}</p>
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password </label>
                <input onChange={onChange} type="password" name="confirmPassword" />
                <p>{errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}</p>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
