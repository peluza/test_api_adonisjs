import React, { useState, useEffect, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

import { TasksContext } from "../context/ConTextTasks";
import { TasksContextUpdate } from "../context/ConTextTasksUpdate";

function TasksCreate() {
  const cookies = new Cookies();
  const { Tasks, setTasks } = useContext(TasksContext);
  const { TasksUpdateData, setTasksUpdateData } = useContext(
    TasksContextUpdate
  );

  const handleInputChange = (event) => {
    setTasks({
      ...Tasks,
      [event.target.name]: event.target.value,
    });
  };

  const SendData = (event) => {
    event.preventDefault();
    if (Tasks.ID_project != null && Tasks.description != null) {
      const urlTasksCreate = `http://127.0.0.1:3333/api/v1/tasks/create/${Tasks.ID_project}`;
      const token = cookies.get("token");
      console.log(token);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const bodyParameters = {
        description: `${Tasks.description}`,
      };
      axios
        .post(urlTasksCreate, bodyParameters, config)
        .then(function (response) {
          console.log(response.data.id);
          alert(`Project create ok whit id ${response.data.id}`);
          UpdateTable();
        })
        .catch(function (error) {
          console.log(error);
          alert("error datas");
        });
    } else {
      alert("please copy all datas");
    }
  };

  const UpdateTable = (event) => {
    const urlGetTasks = `http://127.0.0.1:3333/api/v1/tasks/consult/${Tasks.ID_project}`;
    const token = cookies.get("token");
    console.log(token);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(urlGetTasks, config)
      .then(function (response) {
        console.log(response.data);
        setTasksUpdateData(response.data);
        console.log(TasksUpdateData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={SendData}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>ID project</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name the project"
          name="ID_project"
          value={Tasks.ID_project}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Description the tasks</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address the project"
          name="description"
          value={Tasks.description}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TasksCreate;
