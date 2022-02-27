import React, {useState} from "react";
import "../Form.css";

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    const [error, setError] = useState('');

    const createUser = (e) => {

        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };
    const valTitle = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.lengt < 2) {

        }
    };

    return(
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={passConfirm} onChange={ (e) => setPassConfirm(e.target.value) } />
                </div>
            </form>
            <list>
                <p>Form Data</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Password Confirm: {passConfirm}</p>
            </list>
        </div>
    );
};

export default Form;