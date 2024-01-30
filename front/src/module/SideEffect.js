import React from "react";
import Sleepy from "../img/sleep.svg";
import Stomach from "../img/stomach.svg";
import Vomit from "../img/vomit.svg";
import Eyeloss from "../img/Eyeloss.svg";
import Boktong from "../img/boktong.svg";
import Headache from "../img/headache.svg";
import Dizzy from "../img/dizzy.svg";
import Sulsa from "../img/sulsa.svg";
import HungryLess from "../img/hungryles.svg";
import Heart from "../img/heart.svg";
import Insomnia from "../img/insomnia.svg";
import Honsu from "../img/honsu.svg";
import Breath from "../img/breath.svg";
import Depress from "../img/depress.svg";
import Amnesia from "../img/amnesia.svg";
import Soha from "../img/soha.svg";
import { useLocation } from "react-router-dom";
const SideEffect = () => {
  const location = useLocation();
  const { searchResults, sideEffectResult } = location.state || {};
  const sideEffectImages = {
    졸음: Sleepy,
    위장장애: Stomach,
    복통: Boktong,
    구토: Vomit,
    충혈: Eyeloss,
    두통: Headache,
    어지러움: Dizzy,
    설사: Sulsa,
    식욕부진: HungryLess,
    "심혈관 질환": Heart,
    불면증: Insomnia,
    혼수: Honsu,
    호흡곤란: Breath,
    우울증: Depress,
    "기억력 저하": Amnesia,
    소화불량: Soha,
  };

  return (
    <div>
      <div className="SideEffect-Container">
        <h1 className="sideEffectText">부작용</h1>
        <div className="sideEffectImgContainer">
          {sideEffectResult.sideEffect.map((value, index) => (
            <img
              key={index}
              src={sideEffectImages[value.name]}
              alt={value.name}
            />
          ))}
        </div>
        <div className="sideEffectTypeContainer">
          {sideEffectResult.sideEffect.map((value, index) => (
            <div key={index} className="sideEffectType">
              {value.name}
            </div>
          ))}
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
