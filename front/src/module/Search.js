import React, { useState, useEffect, useRef } from "react";
import MedIcon from "../img/medIcon.svg";
import SearchIcon from "../img/SearchIcon.svg";
import AutoComplete from "./AutoComplete";

const SearchBar = ({ onSearch, value }) => {
  const [inputValue, setInputValue] = useState(value || ""); // Initialize with the value from props
  const [searchCompletionVisible, setSearchCompletionVisible] = useState(false);
  const [shouldNotHideCompletion, setShouldNotHideCompletion] = useState(false);
  const searchbarRef = useRef(null);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(inputValue);
      setSearchCompletionVisible(false);
    }
  };

  const handleInputClick = () => {
    setSearchCompletionVisible(true);
  };
  const handleSearchIconClick = () => {
    onSearch(inputValue);
    setSearchCompletionVisible(false);
  };

  const handleItemSelect = (selectedItem) => {
    setInputValue(selectedItem);
    setSearchCompletionVisible(false);
  };

  useEffect(() => {
    return () => {
      setInputValue("");
      setSearchCompletionVisible(false);
    };
  }, []);

  const handleBodyClick = (e) => {
    if (!searchbarRef.current.contains(e.target) && !shouldNotHideCompletion) {
      setSearchCompletionVisible(false);
    }
    setShouldNotHideCompletion(false);
  };

  useEffect(() => {
    document.body.addEventListener("mousedown", handleBodyClick);

    return () => {
      document.body.removeEventListener("mousedown", handleBodyClick);
      setInputValue("");
      setSearchCompletionVisible(false);
    };
  }, []);

  return (
    <div ref={searchbarRef}>
      <div className="search"></div>
      <img className="MedIcon" src={MedIcon} alt="MedIcon"></img>
      <div className="line"></div>
      <input
        className="searchbar"
        type="text"
        placeholder="  약 이름을 검색해보세요."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        onClick={handleInputClick}
      />
      <img
        className="searchIcon"
        src={SearchIcon}
        onClick={handleSearchIconClick}
        alt="SearchIcon"
      ></img>
      {searchCompletionVisible && (
        <AutoComplete
          inputValue={inputValue}
          onItemSelect={handleItemSelect}
          onSearch={onSearch}
        />
      )}
    </div>
  );
};

export default SearchBar;
