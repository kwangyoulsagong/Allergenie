import React, { useState, useEffect } from "react";
import axios from "axios";
import deleteCircle from "../img/MyDeleteCircle.svg";

const MedShouldNotTake = ({ prohibition }) => {
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
              <div key={index} className="addMedCircle">
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
