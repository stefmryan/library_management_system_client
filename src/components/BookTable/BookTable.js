import React from "react";
import { useState } from "react/cjs/react.development";
// import styles from "../BookTable/BookTable.module.css";

const BookTable = ({ items, setRenew }) => {
  const [error, setError] = useState(false);

  const handleRenew = async (id) => {
    await fetch(`http://localhost:8080/renew/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          setError(true);
        }
        return response.json();
      })
      .then((data) => {
        setRenew({ ...data });
      })
      .catch((error) => console.log("Something went wrong", error));
  };

  return items.map((item) => (
    <tr key={item.id}>
      <td data-testid="barcode">{item.barcode}</td>
      <td data-testid="title">{item.title}</td>
      <td data-testid="author">{item.author}</td>
      <td data-testid="dueDate">{item.dueDate}</td>
      <td>
        <button
          type="button"
          data-testid="renew-btn"
          onClick={() => handleRenew(item.id)}
        >
          Renew Item
        </button>
      </td>
      {error && <td>Item cannot be renewed</td>}
    </tr>
  ));
};

export default BookTable;
