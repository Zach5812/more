import React, {useState} from 'react'
import FormDisplay from '../components/FormDisplay'


const Form = () =>{
    const [firstName, setfirstName] =useState("John")
    const [lastName, setlastName] =useState("Smith")
    const [email, setEmail] =useState("johnsmith@email.com")
    const [password, setPassword] =useState("password")
    const [password2, setPassword2] =useState("password")

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <form onChange={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="first" id="" value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
                    { // if-else
                        firstName.length <2 && firstName.length !==0?
                        <p style={{color: "red"}}> First name must be at least 2 characters long</p>:
                        <p></p>
                    }
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="last" id="" value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
                    { // if-else
                        lastName.length <2 && lastName.length !==0?
                        <p style={{color: "red"}}> Last name must be at least 2 characters long</p>:
                        <p></p>
                    }
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" id="" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    { // if-else
                        email.length <5 && email.length > 0?
                        <p style={{color: "red"}}> Email must be at least 5 characters long</p>:
                        <p></p>
                    }
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" name="password" id="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    { // if-else
                        password.length <8 && password.length !==0?
                        <p style={{color: "red"}}> Password must be at least 8 characters long</p>:
                        <p></p>
                    }
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="text" name="confirm" id="" value={password2} onChange={(e)=>setPassword2(e.target.value)}/>
                    { // if-else
                        password !== password2?
                        <p style={{color: "red"}}> Passwords must match</p>:
                        <p></p>
                    }
                </div>
            </form>
            <FormDisplay firstName={firstName} lastName={lastName} email={email} password={password} password2={password2} />
        </div>
    )
}

export default Form