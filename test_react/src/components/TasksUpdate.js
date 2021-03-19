import React, { useState, useEffect, useContext } from "react";
import { Button, Form, Table } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

import { TasksContext } from "../context/ConTextTasks";
import { TasksContextUpdate } from "../context/ConTextTasksUpdate";

function TasksUpdate() {
  const cookies = new Cookies();
  const { TasksUpdateData, setTasksUpdateData } = useContext(
    TasksContextUpdate
  );
  const { Tasks, setTasks } = useContext(TasksContext);

  const handleInputChange = (event) => {
    setTasks({
      ...Tasks,
      [event.target.name]: event.target.value,
    });
  };
  const UpdateTableCheck = () => {
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
  const UpdateTable = (event) => {
    event.preventDefault();
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

  useEffect(() => {
    // UpdateTable();
  }, []);

  console.log(TasksUpdateData);

  const SendData = (event) => {
    if (Tasks.ID_project != null) {
      event.preventDefault();
      const urlProjectUPdate = `http://127.0.0.1:3333/api/v1/tasks/update/${TasksUpdateData.id}`;
      const token = cookies.get("token");
      console.log(token);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const bodyParameters = {
        description: `${Tasks.description}`,
        completed: `${Tasks.completed}`,
      };
      axios
        .patch(urlProjectUPdate, bodyParameters, config)
        .then(function (response) {
          console.log(response.data.id);
          alert(`Project update ok whit id ${response.data.id}`);
        })
        .catch(function (error) {
          console.log(error);
          alert("error datas");
        });
    } else {
      alert("please copy all datas");
    }
    UpdateTable();
  };

  const SendDataCheck = (idTasks, status) => {
    if (Tasks.ID_project != null) {
      const urlProjectUPdate = `http://127.0.0.1:3333/api/v1/tasks/update/${idTasks}`;
      const token = cookies.get("token");
      console.log(token);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const bodyParameters = {
        completed: !status,
      };
      axios
        .patch(urlProjectUPdate, bodyParameters, config)
        .then(function (response) {
          console.log(response.data.id);
          alert(`Project update ok whit id ${response.data.id}`);
          UpdateTableCheck();
        })
        .catch(function (error) {
          console.log(error);
          alert("error datas");
        });
    } else {
      alert("please copy all datas");
    }
  };
  const UpdateTableTasks = () => {
    return TasksUpdateData.map((data) => (
      <tr key={data.id}>
        <th>{data.id}</th>
        <td>{data.description}</td>
        <td>
          <Form.Check
            aria-label="option 1"
            name="completed"
            checked={data.completed}
            onChange={(e) => {
              SendDataCheck(data.id, data.completed);
            }}
          />
        </td>
      </tr>
    ));
  };
  return (
    <>
      <div>
        <Form onSubmit={UpdateTable}>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID Project</th>
              <th>Description at project</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>{UpdateTableTasks()}</tbody>
        </Table>
      </div>
    </>
  );
}

export default TasksUpdate;
