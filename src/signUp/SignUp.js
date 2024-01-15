import React, { useState } from "react";
import axios from "axios";
import SignUpInput from "./SignUpInput";
import "../login/LoginPage.css";
import CreateOrder from "../cart/CreateOrder";

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhoneNr] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [isIdUserInitialized, setIsIdUserInitialized] = useState(false);
    const [idUser, setIdUser] = useState('');

    const inputs = [
        { type: 'text', name: 'firstname', placeholder: 'Firstname', pattern: '^[A-Z][a-z]+', value: firstname, setValue: setFirstname },
        { type: 'text', name: 'lastname', placeholder: 'Lastname', pattern: '^[A-Z][a-z]+', value: lastname, setValue: setLastname },
        { type: 'text', name: 'phoneNr', placeholder: 'Phone Number', pattern: '0[0-9]{9}', value: phone, setValue: setPhoneNr },
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
            phone,
        };

        try {
            const response = await axios.post('http://localhost:8080/users/add', user);
            if (response.status === 200) {

                const id_user = response.data;
                setIdUser(response.data);
                setIsIdUserInitialized(true);
                console.log('response',response.data)
                const useraddress = {
                    id_user,
                    address,
                    city,
                    country,
                }
                const responseUA = await axios.post('http://localhost:8080/useraddress/add', useraddress);
                if (responseUA.status === 200) {
                    window.location.href = '/dashboard';
                } else {
                    console.error('Post creation failed');
                }
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
            {console.log(idUser)}
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
            {isIdUserInitialized && <CreateOrder idUser={idUser} />}
        </div>
    );
}

export default SignUp;