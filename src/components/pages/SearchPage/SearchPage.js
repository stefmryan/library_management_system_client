import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchPage.module.css";
import constants from "../../utilities/constants";

const SearchPage = () => {
  const [titleText, setTitleText] = useState("");
  const [authorText, setAuthorText] = useState("");
  const [, /*searchList*/ setSearchList] = useState([]);

  const handleSearch = async (e) => {
    let queryValue;
    let queryKey;

    if (e.target.name === "title") {
      queryKey = e.target.name;
      queryValue = titleText;
    } else {
      queryKey = "author";
      queryValue = authorText;
    }

    const queryString = `${constants.BASE_PATH}/catalog/search?${queryKey}=${queryValue}`;

    const response = await fetch(`${queryString}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      const data = response.json();
      console.log(data);
      setSearchList([data]);
    }
  };

  return (
    <div className={styles.container}>
      <h3>Search For Items</h3>
      <label>
        By Title
        <input type="text" onChange={(e) => setTitleText(e.target.value)} />
        <button type="button" name="title" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </label>

      <label>
        By Author
        <input type="text" onChange={(e) => setAuthorText(e.target.value)} />
        <button type="button" name="author" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </label>
    </div>
  );
};

export default SearchPage;
