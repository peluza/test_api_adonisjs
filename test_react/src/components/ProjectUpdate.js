import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

function ProjectUpdate() {
  const cookies = new Cookies();

  const [datas, setDatas] = useState({
    name_project: "",
    address: "",
    id_project: "",
  });

  const handleInputChange = (event) => {
    setDatas({
      ...datas,
      [event.target.name]: event.target.value,
    });
  };

  const SendData = (event) => {
    if (datas.id_project != null) {
      event.preventDefault();
      const urlProjectCreate = `http://127.0.0.1:3333/api/v1/projects/update/${datas.id_project}`;
      const token = cookies.get("token");
      console.log(token);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const bodyParameters = {
        name_project: `${datas.name_project}`,
        address: `${datas.address}`,
      };
      axios
        .patch(urlProjectCreate, bodyParameters, config)
        .then(function (response) {
          console.log(response.data.id);
          alert(`Project update ok whit id ${response.data.id}`);
          window.location.reload(false);
        })
        .catch(function (error) {
          console.log(error);
          alert("error datas");
        });
    } else {
      alert("please copy all datas");
    }
  };

  return (
    <Form onSubmit={SendData}>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>ID Project</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address the project"
          name="id_project"
          value={datas.id_project}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name of project</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name the project"
          name="name_project"
          value={datas.name_project}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Addres the project</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address the project"
          name="address"
          value={datas.address}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ProjectUpdate;
