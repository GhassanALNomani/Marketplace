import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import axios from "axios";

export default function Reset(props) {
    const history = useHistory();
    const email = props.user.email;
    console.log("email", email);

    const [pass, setPass] = useState({}); // pass info

    //to add the input inside user
    const onChangeInput = ({
        target: { name, value } }) => {
        setPass({ ...pass, [name]: value });
    };

    // to add the user info to database
    const onSubmit = (e) => {
        e.preventDefault();
        // console.log("pass", pass);
        axios
            .post("http://localhost:5000/api/user/reset", { email: email, password: pass.password })
            .then((res) => {
                console.log(res);
                history.push("/profile");
            })
            .catch((err) => console.log(err));
    };


    return (
        <>
            <Form className="mt-5">
                <Row className="justify-content-center mt-5">
                    <Col md={8}>
                        <Form.Row>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={(e) => onChangeInput(e)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={(e) => onSubmit(e)}
                        >
                            Submit
                       </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}