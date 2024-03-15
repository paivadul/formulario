import React, { useState } from 'react';

const Form = ({ user, setUser }) => {
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const validateField = (name, value) => {
        let errorMessage = '';
        switch (name) {
            case 'firstName':
            case 'lastName':
                errorMessage = value.length < 2 ? `${name} must be at least 2 characters long!` : '';
                break;
            case 'email':
                errorMessage = value.length < 5 ? 'Email must be at least 5 characters long!' : '';
                break;
            case 'password':
                errorMessage = value.length < 8 ? 'Password must be at least 8 characters long!' : '';
                break;
            case 'confirmPassword':
                errorMessage = value !== user.password ? 'Passwords do not match!' : '';
                break;
            default:
                break;
        }
        return errorMessage;
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        setErrors({ ...errors, [name]: validateField(name, value) });
    };

    const formFields = Object.entries(user).map(([key, value]) => (
        <div key={key}>
            <label htmlFor={key}>{key}</label>
            <input onChange={onChange} type={key === "password" || key === "confirmPassword" ? "password" : "text"} name={key} />
            <p>{errors[key] && <span style={{ color: 'red' }}>{errors[key]}</span>}</p>
        </div>
    ));

    return (
        <form>
            <h1>Welcome!</h1>
            {formFields}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
