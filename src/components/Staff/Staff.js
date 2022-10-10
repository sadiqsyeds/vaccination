import axios from "axios";
import React from "react";
import { Card, Container, Row, Table } from "react-bootstrap";
import AddStaff from "./AddStaff";

const Staff = () => {
  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2NTUxNDk5NSwiaWF0IjoxNjY1MzM0OTk1fQ.qoN70opvyjqqPlqNYhW4al1KHz6oT9ZQNGlxZfm5zqxqjRQfFAsCShT5CNReaqpNdzyhOFXSXFl8g1JkecRFaw";
  axios
    .get("http://localhost:8084/admin/getAll", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log("Response", response.data);
    })
    .catch((e) => {
      console.log("Error: ", e.response.data);
    });
  return (
    <>
      <AddStaff />
      <Container>
        <Card className="m-2 border">
          <Row>
            <Table striped>
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Username</th>
                  <th>Added on</th>
                </tr>
              </thead>
              <tbody>
                {}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default Staff;
