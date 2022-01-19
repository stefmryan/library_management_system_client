import React, { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styles from "../CheckInComponent/CheckInComponent.module.css";

const CheckInComponent = () => {
  const [barcodes, setBarcodes] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = "";
  }, [barcodes]);

  const handleInput = (e) => {
    const value = e.target.value;
    if (e.key === "Enter") {
      setBarcodes([...barcodes, Number(value)]);
    }
  };

  const handleCheckin = async () => {
    await fetch(`http://localhost:8080/checkin`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(barcodes),
    })
      .then((response) => {
        if (response.status === 204) {
          setBarcodes([]);
        }
      })
      // .then((data) => {
      //   setBarcodes([]);
      // })
      .catch((error) => console.log("Something went wrong", error));
  };
  return (
    <div className={styles.container}>
      <label>
        Check In Item
        <input
          type="number"
          data-testid="checkInInput"
          ref={inputRef}
          onKeyDown={handleInput}
        />
      </label>
      <button type="button" data-testid="checkInBtn" onClick={handleCheckin}>
        Check In
      </button>
      <table data-testid="checkInTable">
        <thead>
          <tr>
            <th>Barcode</th>
          </tr>
          {barcodes.map((barcode, index) => (
            <tr key={index}>
              <td>{barcode}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default CheckInComponent;
