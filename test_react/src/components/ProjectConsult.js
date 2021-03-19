import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Table, Button } from "react-bootstrap";

function ProjectConsult() {
  const cookies = new Cookies();

  const [datas, setDatas] = useState([]);

  const UpdateTable = () => {
    const urlProjectConsul = "http://127.0.0.1:3333/api/v1/projects/consult";
    const token = cookies.get("token");
    console.log(token);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(urlProjectConsul, config)
      .then(function (response) {
        console.log(response.data);
        setDatas(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function DeleteData(argv) {
    const urlProjectConsul = `http://127.0.0.1:3333/api/v1/projects/delete/${argv}`;
    const token = cookies.get("token");
    console.log(token);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete(urlProjectConsul, config)
      .then(function (response) {
        console.log(response.data);

        UpdateTable();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const UpdateTableData = () => {
    return datas.map((datass) => (
      <tr>
        <th>{datass.id}</th>
        <td>{datass.user_id}</td>
        <td>{datass.name_project}</td>
        <td>{datass.address}</td>
        <td>{datass.created_at}</td>
        <td>{datass.updated_at}</td>
        <td>
          <Button
            variant="danger"
            type="submit"
            onClick={() => {
              DeleteData(datass.id);
            }}
          >
            (Delete)
          </Button>
        </td>
      </tr>
    ));
  };

  useEffect(() => {
    UpdateTable();
  }, []);

  return (
    <Fragment>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>user_id</th>
              <th>name_project</th>
              <th>address</th>
              <th>created_at</th>
              <th>updated_at</th>
              <th>Delete projects</th>
            </tr>
          </thead>
          <tbody>{UpdateTableData()}</tbody>
        </Table>
      </div>
    </Fragment>
  );
}

export default ProjectConsult;
