import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const urlRegister = "http://127.0.0.1:3333/api/v1/users/register";

function NewUser() {
  const [datas, setDatas] = useState({
    Email: "",
    Password_1: "",
    Password_2: "",
  });

  const handleInputChange = (event) => {
    setDatas({
      ...datas,
      [event.target.name]: event.target.value,
    });
  };

  const SendData = (event) => {
    event.preventDefault();
    if (datas.Password_1 !== datas.Password_2) {
      alert("passwords do not match");
    } else {
      axios
        .post(urlRegister, {
          email: `${datas.Email}`,
          password: `${datas.Password_1}`,
        })
        .then(function (response) {
          console.log(response.data.username);
        })
        .catch(function (error) {
          console.log(error);
        });
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
          name="Password_1"
          value={datas.Password_1}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label> Repeat Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="Password_2"
          value={datas.Password_2}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewUser;
