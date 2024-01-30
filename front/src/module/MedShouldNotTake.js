import React, { useState, useEffect } from "react";
import axios from "axios";
import deleteCircle from "../img/MyDeleteCircle.svg";

const MedShouldNotTake = ({ username, medicineName }) => {
  return (
    <>
      <div className="deleteMed">
        <img src={deleteCircle} alt="Delete Circle" />약 정보 삭제하기
      </div>
      <div className="MedShouldNotTakeContainer">
        <h1>먹으면 안되는 약</h1>
        <div className="Med">
          <div className="addMedCircle"></div>
        </div>
      </div>
    </>
  );
};

export default MedShouldNotTake;
