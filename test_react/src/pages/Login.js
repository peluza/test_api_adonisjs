import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

const urlLogin = "http://127.0.0.1:3333/api/v1/users/login";

const cookies = new Cookies();

function Login() {
  const [datas, setDatas] = useState({
    Email: "",
    Password: "",
  });

  const handleInputChange = (event) => {
    setDatas({
      ...datas,
      [event.target.name]: event.target.value,
    });
  };

  const SendData = (event) => {
    event.preventDefault();
    if (datas.Email != null && datas.Password != null) {
      axios
        .post(urlLogin, {
          email: `${datas.Email}`,
          password: `${datas.Password}`,
        })
        .then(function (response) {
          console.log(response.data.token);
          cookies.set("token", response.data.token, { path: "/" });
          alert(`welcome ${datas.Email}`);
        })
        .catch(function (error) {
          console.log(error);
          alert("error password");
        });
    } else {
      alert("Email and password invalid");
    }
  };

  return (
    <Form onSubmit={SendData}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="Email"
          value={datas.Email}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="Password"
          value={datas.Password}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
