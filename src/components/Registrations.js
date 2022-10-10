import React from "react";
import { Card, Container, Row, Table } from "react-bootstrap";

const Registrations = () => {
  return (
    <>
      <Container>
        <Card className="m-2 border">
          <Row>
            <Table striped>
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Pincode</th>
                  <th>Aadhar No.</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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

export default Registrations;
