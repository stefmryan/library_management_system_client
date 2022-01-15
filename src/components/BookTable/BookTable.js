import React from "react";
// import styles from "../BookTable/BookTable.module.css";

const BookTable = ({ items }) => {
  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

  const handleRenew = (id) => {
    console.log(id);
  };

  return items.map((item) => (
    <tr key={item.id}>
      <td>{item.barcode}</td>
      <td>{item.title}</td>
      <td>{item.author}</td>
      <td>{item.dueDate}</td>
      <td>
        <button type="button" onClick={() => handleRenew(item.id)}>
          Renew Item
        </button>
      </td>
    </tr>
  ));
};

export default BookTable;
