import React from "react";
import styles from "../BookTable/BookTable.module.css";

const BookTable = ({ item }) => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Barcode</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due Date</th>
          </tr>
          <tr>
            <td>{item.barcode}</td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.dueDate}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default BookTable;
