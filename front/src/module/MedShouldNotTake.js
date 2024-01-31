import React, { useState, useEffect } from "react";
import axios from "axios";
import deleteCircle from "../img/MyDeleteCircle.svg";
import { useDispatch } from "react-redux";
import { setProhibitionInfo } from "../slices/prohbitionInfoSlice";

const MedShouldNotTake = ({ username, prohibition }) => {
  const [selectMedicine, setSelectMedicine] = useState(null);
  const dispatch = useDispatch();
  const handleMedicne = async (index, medId, name) => {
    setSelectMedicine(index);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/mypage/medicine/info/${medId}/${name}`
      );
      console.log(response.data);
      dispatch(setProhibitionInfo(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="deleteMed">
        <img src={deleteCircle} alt="Delete Circle" />약 정보 삭제하기
      </div>
      <div className="MedShouldNotTakeContainer">
        <h1>먹으면 안되는 약</h1>
        <div className="Med">
          {Array.isArray(prohibition) && prohibition.length > 0 ? (
            prohibition.map((value, index) => (
              <div
                key={index}
                className={`addMedCircle ${
                  selectMedicine === index ? "selectedMedicine" : ""
                }`}
                onClick={() =>
                  handleMedicne(index, value.medicine_id, value.name)
                }
              >
                {value.name}
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
};

export default MedShouldNotTake;
