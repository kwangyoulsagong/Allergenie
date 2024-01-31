import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
const MedSideEffect = () => {
  const prohibitionInfo = useSelector(
    (state) => state.prohibitionInfo.prohibitionInfo || []
  );
  const sideEffectResult = prohibitionInfo.sideEffectResult || [];
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
    <div className="MyPage-main">
      <section className="Mypage-se">
        <div className="Mypage-se-title">부작용</div>

        <div className="Mypage-se-container">
          <div className="Mypage-se-img">
            {sideEffectResult.map((value, index) => (
              <img
                key={index}
                src={sideEffectImages[value.name]}
                alt={value.name}
              />
            ))}{" "}
          </div>
          {sideEffectResult.map((value, index) => (
            <div key={index} className="Mypage-se-content">
              {value.name}
            </div>
          ))}
        </div>
        {/* <div className="Mypage-se-container">
          {prohibitionInfo.sideEffectResult.name}
        </div> */}
      </section>
      <section className="Mypage-caution">
        <div className="Mypage-se-title">주의사항</div>
        <div className="Mypage-caution-container">
          <div className="Mypage-caution-img">
            <img src={prohibitionInfo.medResult?.image} />
          </div>
          <div className="Mypage-caution-content">
            <div className="Mypage-caution-name">
              {prohibitionInfo.medResult?.name}
            </div>
            <div className="Mypage-caution-about">
              {prohibitionInfo.medResult?.caution}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedSideEffect;
