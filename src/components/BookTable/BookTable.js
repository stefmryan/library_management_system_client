import React, { useEffect } from "react";
// import styles from "../BookTable/BookTable.module.css";

const BookTable = ({ items }) => {
  useEffect(() => {
    console.log(items);
  }, [items]);

  return items.map((item) => (
    <tr key={item.id}>
      <td>{item.barcode}</td>
      <td>{item.title}</td>
      <td>{item.author}</td>
      <td>{item.dueDate}</td>
    </tr>
  ));
};

export default BookTable;
