import axios from "axios";
import React, { useEffect } from "react";
import { Card, Container, Row, Table } from "react-bootstrap";
import AddStaff from "./AddStaff";
import Cookies from "js-cookie";

const Staff = () => {
  useEffect(() => {
    let token;
    if (Cookies.get("adminToken")) {
      token = JSON.parse(Cookies.get("adminToken"));
    }

    const req_url = `${process.env.BASE_URL}/vaccinationcenter/getAll`;
    console.log(req_url);
    axios
      .get(req_url, {
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
  }, []);
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
