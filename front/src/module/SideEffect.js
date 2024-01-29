import React from "react";
import Sleepy from "../img/sleep.svg";
import Stomach from "../img/stomach.svg";
import Vomit from "../img/vomit.svg";
import Eyeloss from "../img/Eyeloss.svg";
import { useLocation } from "react-router-dom";
const SideEffect = () => {
  const location = useLocation();
  const { searchResults } = location.state || {};
  return (
    <div>
      <div className="SideEffect-Container">
        <h1 className="sideEffectText">부작용</h1>
        <div className="sideEffectImgContainer">
          <img src={Sleepy}></img>
          <img src={Stomach}></img>
          <img src={Vomit}></img>
          <img src={Eyeloss}></img>
        </div>
        <div className="sideEffectTypeContainer">
          <div className="sideEffectType">복통</div>
          <div className="sideEffectType">복통</div>
          <div className="sideEffectType">복통</div>
          <div className="sideEffectType">복통</div>
        </div>
        <div className="sideEffectInfo">
          약물의 종류에 따라 정도가 다르지만 대표적인 부작용은 졸음, 진정작용과
          같은 중추신경계 부작용이다.
        </div>
        <h1 className="sideEffectWarning">주의사항 & 해결방안</h1>
        {searchResults.map((value, index) => (
          <div key={index} className="sideEffectWarningInfo">
            {value.caution}
          </div>
        ))}
      </div>
    </div>
  );
};
export default SideEffect;
