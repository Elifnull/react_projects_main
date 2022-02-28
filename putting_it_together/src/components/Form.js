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
            setError("First Name must be 2 or more characters")};
        setLastName(e.target.value);
        
        }
    return(
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                    { firstName.length > 0 && firstName.length < 2 ? 
                        <p>First name should be more than 2 characters</p> :
                        null}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                    { lastName.length > 0 && lastName.length < 2 ? 
                        <p>Last name should be more than 2 characters</p> :
                        null}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                    { email.length > 0 && email.length < 5 ? 
                        <p>email should be 5 characters at least</p> :
                        null}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={passConfirm} onChange={ (e) => setPassConfirm(e.target.value) } />
                    { password !== passConfirm ? 
                        <p>passwords do not match</p> :
                        null}
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