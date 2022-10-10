import React from "react";
import { Card } from "react-bootstrap";

const AddStaff = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <>
      <Card>
        <div className="row g-3 m-4">
          <form onSubmit={submitHandler}>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
            <div className="col">
              <input
                type="submit"
                className="btn btn-success"
                value="Add Staff"
              />
            </div>
          </form>
        </div>
      </Card>
    </>
  );
};

export default AddStaff;
