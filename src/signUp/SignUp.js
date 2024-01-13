import React, { useState } from "react";
import axios from "axios";
import SignUpInput from "./SignUpInput";
import "../login/LoginPage.css";

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phoneNr, setPhoneNr] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const inputs = [
        { type: 'text', name: 'firstname', placeholder: 'Firstname', pattern: '^[A-Z][a-z]+', value: firstname, setValue: setFirstname },
        { type: 'text', name: 'lastname', placeholder: 'Lastname', pattern: '^[A-Z][a-z]+', value: lastname, setValue: setLastname },
        { type: 'text', name: 'phoneNr', placeholder: 'Phone Number', pattern: '0[0-9]{9}', value: phoneNr, setValue: setPhoneNr },
        { type: 'text', name: 'address', placeholder: 'Address', pattern: '^[a-zA-Z0-9\s\.,#-]+$', value: address, setValue: setAddress },
        { type: 'text', name: 'city', placeholder: 'City', pattern: '^[A-Z][a-z\-]+', value: city, setValue: setCity },
        { type: 'text', name: 'country', placeholder: 'Country', pattern: '^[A-Z][a-z]+', value: country, setValue: setCountry },
    ]

    const handleCreateAccount = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password,
            firstname,
            lastname,
            phoneNr,
            address,
            city,
            country,
        };

        try {
            // Make a POST request using Axios
            const response = await axios.post('http://localhost:8080/users/add', user);

            if (response.status === 200) {
                // Registration successful, redirect to the dashboard or handle as needed
                window.location.href = '/dashboard';
            } else {
                // Handle other status codes or error cases
                console.error('Registration failed');
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error('Error during registration:', error);
        }
    };

    return(
        <div id="signUp">
            <div className="login-container">
                <div className="login-box">
                    <h2>Create Account to ByteMe</h2>
                    <form onSubmit={handleCreateAccount}>
                        <input className="input-group" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input  className="input-group" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {inputs.map((input, i) => <SignUpInput key={`${input.name}-index${i}`} type={input.type} name={input.name} placeholder={input.placeholder} pattern={input.pattern} value={input.value} setValue={input.setValue} />)}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;