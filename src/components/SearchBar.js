import React, { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";

const SearchBar = () => {
  const [centerName, setCenterName] = useState("");

  const handleSubmitHandler = (e) => {
    e.preventDefault();
    if (centerName.length === 0) {
      alert("Please enter search keyword");
    }

    console.log(centerName);
  };

  return (
    <Row>
      <Card>
        <form onSubmit={handleSubmitHandler}>
          <input
            type="text"
            className="form-control"
            name="centerName"
            value={centerName}
            onChange={(e) => setCenterName(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Search
          </Button>
        </form>
      </Card>
    </Row>
  );
};

export default SearchBar;
