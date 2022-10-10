import React from "react";
import { Button, Card, Row, Table } from "react-bootstrap";

const CenterList = (props) => {
  return (
    <Card className="m-2 border">
      <Row>
        <Table striped>
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Center Name</th>
              <th>Address</th>
              <th>Pincode</th>
            </tr>
          </thead>
          <tbody>
            {props.centers.map((center, i) => {
              return (
                <tr key={Math.random().toString()}>
                  <td>{i}</td>
                  <td>{center.name}</td>
                  <td>{center.address}</td>
                  <td>{center.pincode}</td>
                  <td>
                    <Button variant="danger">Register</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Card>
  );
};

export default CenterList;
