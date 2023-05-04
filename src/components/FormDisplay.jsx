import React from 'react';

const FormDisplay = (props) =>{
    return(
        <div>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.email}</p>
            <p>{props.password}</p>
            <p>{props.password2}</p>
        </div>
    )
}

export default FormDisplay