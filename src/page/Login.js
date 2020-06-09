import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Login() {
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
                <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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
