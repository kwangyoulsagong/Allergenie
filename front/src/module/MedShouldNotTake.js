import React, { useState, useEffect } from "react";
import axios from "axios";
import deleteCircle from "../img/MyDeleteCircle.svg";
import { useDispatch } from "react-redux";
import { setProhibitionInfo } from "../slices/prohbitionInfoSlice";
import addCircle from "../img/MyPlusCircle.svg";
import { useNavigate } from "react-router-dom";

const MedShouldNotTake = ({ username, prohibition, setProhibition }) => {
  const [selectMedicine, setSelectMedicine] = useState(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();
  const handleMedicne = async (index, medId, name) => {
    setSelectMedicine(index);
    try {
      const response = await axios.get(
        `https://port-0-allergenie-199u12dls2shgxu.sel5.cloudtype.app/api/v1/mypage/medicine/info/${medId}/${name}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      dispatch(setProhibitionInfo(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  const goSearch = () => {
    navigate(`/searchList?id=${username}&query=`);
  };
  const deleteMed = async () => {
    try {
      if (selectMedicine !== null) {
        const medIdToDelete = prohibition[selectMedicine].medicine_id;
        const data = {
          medicineId: medIdToDelete,
          user_id: userId,
        };

        const response = await axios.post(
          "https://port-0-allergenie-199u12dls2shgxu.sel5.cloudtype.app/api/v1/mypage/delete",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response) {
          const updatedProhibition = [...prohibition];
          updatedProhibition.splice(selectMedicine, 1);
          setProhibition(updatedProhibition);

          // Reset the selected medicine index
          setSelectMedicine(null);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="MedShouldNotTakeContainer">
        <div className="addMedSearch" onClick={goSearch}>
          <img src={addCircle} alt="Add Circle" />
          <div style={{ textDecoration: "none", color: "inherit" }}>
            약 정보 추가하기
          </div>
        </div>
        <div className="deleteMed" onClick={deleteMed}>
          <img src={deleteCircle} alt="Delete Circle" />약 정보 삭제하기
        </div>
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
