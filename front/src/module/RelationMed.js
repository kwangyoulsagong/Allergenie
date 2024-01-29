import React from "react";
import girtec from "../img/girtec.svg";
import allegra from "../img/allegra.svg";
import ssizal from "../img/ssizal.svg";
import perinamin from "../img/perinamin.svg";
import { useLocation } from "react-router-dom";
const RelationMed = () => {
  const location = useLocation();
  const { relatedResults } = location.state || {};

  return (
    <div className="RelationMedContainer">
      <h1 className="RelationMedInfo">관련 약 정보</h1>
      {relatedResults.related.map((value, index) => (
        <div key={index} className="RelationMedImgContainer">
          <img className="RelationImg" src={value.image}></img>
          <div className="RelationMedTitle">
            <span>{value.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RelationMed;
