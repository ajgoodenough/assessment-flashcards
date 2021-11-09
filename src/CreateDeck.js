/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { createDeck } from "./utils/api";
import { useHistory, Link } from "react-router-dom";

function CreateDeck() {
  //empty formData for the initial formState to keep inputs blank on form, establish their key value pairs
  const initialFormState = { name: "", description: "" };
  //useState to handle the changes when inputting new fields
  const [formData, setFormData] = useState(initialFormState);
  const history = useHistory();
  //when a cancel is called, return to the homepage and
  const cancelHandler = () => {
    history.push("/");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const ac = new AbortController();
    createDeck(formData, ac.signal)
      .then((newDeck) => history.push(`/decks/${newDeck.id}`))
      .catch(console.error);
    return () => ac.abort();
  };

  //handle change for inputs of forms function
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Create Deck
        </li>
      </ol>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name" style={{ width: "100%" }}>
            <h6 style={{ marginBottom: "10px" }}>Name</h6>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="description" style={{ width: "100%" }}>
            <h6 style={{ marginBottom: "10px" }}>Description</h6>
            <textarea
              type="text"
              className="form-control"
              id="decription"
              name="description"
              placeholder="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-secondary"
          style={{ marginRight: "5px" }}
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateDeck;
