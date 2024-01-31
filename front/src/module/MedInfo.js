import React from "react";
import PlusCircle from "../img/plus-circle.svg";
import { useLocation } from "react-router-dom";
import addMedication from "../service/addMedication";
const MedInfo = () => {
  const location = useLocation();
  const { searchResults } = location.state || {};
  const userId = localStorage.getItem("userId");
  console.log(userId);
  const handleAddMed = async (medId) => {
    try {
      addMedication(userId, medId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {searchResults.map((result, index) => (
        <div className="AllergeContainer" key={index}>
          <div
            className="AllergicAdd"
            onClick={() => handleAddMed(result.medicine_id)}
          >
            <img className="plus-circle" src={PlusCircle} alt="Plus Circle" />
            <span>알러지 등록</span>
          </div>
          <div className="MedTitle">{result.name}</div>
          <div className="MedIngredients">
            <span>약의 성분</span>
            <div className="MedIngredientsInfo">{result.ingredient}</div>
          </div>
          <div className="MedEfficacy">
            <span>효능 및 효과</span>
            <div className="MedEfficacyInfo">{result.effect}</div>
          </div>
          <div className="MedImageContainer">
            <img src={result.image} alt="Med1" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default MedInfo;
