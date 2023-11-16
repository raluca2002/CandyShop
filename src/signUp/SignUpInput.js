import React from "react";

function SignUpInput(props) {
    return(
        <input type={props.type} className="input-group" name={props.name} required placeholder={props.placeholder}
        pattern={props.pattern} value={props.value}  onChange={(e) => props.setValue(e.target.value)} />
    );
}

export default SignUpInput;