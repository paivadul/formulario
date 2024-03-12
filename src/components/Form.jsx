import React, { useState } from 'react';

const Form = props => {

    const { input, setInput } = props;

    const onChange = e => {
        setInput({
        ...input,
        [e.target.name] : e.target.value,
        })
    };

    return <form>
        <h1>Complete el Formulario</h1>
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
    </form>
};

export default Form;