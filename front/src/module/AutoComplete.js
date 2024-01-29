import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const AutoComplete = ({ inputValue, onItemSelect }) => {
  const [dropDownList, setDropDownList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const delayTime = 500; // Set your desired delay time in milliseconds
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (inputValue === "") {
      setDropDownList([]);
    } else {
      clearTimeout(timeoutRef.current); // Clear previous timeout
      timeoutRef.current = setTimeout(() => {
        setLoading(true);
        axios
          .get(
            `http://localhost:8000/api/v1/home?search=${inputValue}&pageNo=${parseInt(
              page
            )}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            const data = response.data;
            if (Array.isArray(data)) {
              setDropDownList(data);
            } else if (typeof data === "object") {
              setDropDownList([data]);
            } else {
              console.error("Invalid data format:", data);
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          })
          .finally(() => {
            setLoading(false);
          });
      }, delayTime);
    }
    setPage(1);
  }, [inputValue, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !loading &&
        loaderRef.current &&
        window.innerHeight + window.scrollY >= loaderRef.current.offsetTop
      ) {
        setLoading(true);
        axios
          .get(
            `http://localhost:8000/api/v1/home?search=${inputValue}&pageNo=${parseInt(
              page
            )}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            const newData = Array.isArray(response.data) ? response.data : [];
            setDropDownList((prevList) => [...prevList, ...newData]);
            setPage((prevPage) => prevPage + 1);
          })
          .catch((error) => {
            console.error("Error fetching more data:", error);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutRef.current); // Clear timeout on component unmount
    };
  }, [inputValue, page, loading]);

  const handleItemClick = (item) => {
    onItemSelect(item.name);
  };

  return (
    <div className="CompletionContainer" style={{ maxHeight: "300px" }}>
      <div className="autocomplete-list">
        <div className="auto-lists">
          {dropDownList.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item.name}
            </li>
          ))}
          {loading && <div>Loading...</div>}
          <div ref={loaderRef}></div>
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
