import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';

export default function Login() {
    const dispatch = useDispatch();
    let history = useHistory()
    let [email, setEmail] = useState(null)
    let [password, setPassword] = useState(null)
    const login = (e) => {
        e.preventDefault();
        let user = { email: email, password: password };
        dispatch({ type: "LOGIN", payload: user });
        history.goBack();
        console.log("Aerf",user)
      };    
    return (
        <div>
            <div className="header">
                <img src="/images/IT-Viec-Logo.png" className="logoSize"/>
            </div>
            <div className="bgGray">
                <div className="randomBox">
                    <div className="loginBox">
                        Login
                    </div>
                    <Form onSubmit={(e)=>login(e)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Submit
                         </Button>
                    </Form>
                </div>
            </div>

        </div>
    )
}
