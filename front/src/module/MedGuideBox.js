import React from "react";
import cup from "../img/cup.svg";
import medIcon from "../img/mainMedicon.svg";
import medWater from "../img/medwater.svg";
const MedGuideBox = () => {
  return (
    <div className="MedGuideContainer">
      <h1 className="medGuide">지니가 알려주는 올바른 약 복용법</h1>
      <div className="medGuideBox1">
        <img className="guidimg1" src={cup}></img>
        <img className="guidimg2" src={medIcon}></img>
        <h1>약은 물과 함께,</h1>
        <span>
          약은 물과 함께 복용하는 것이 가장 좋습니다. 물과 함께 마시면 약을 녹여
          흡수를 돕고, 식도나 위에 달라붙지 않도록 해요. 또한 위장장애의 위험도
          줄일 수 있어요.
        </span>
      </div>
      <div className="goormGuide"></div>
      <div className="medGuideBox2">
        <img className="guidimg3" src={medWater}></img>
        <h1>온전한 상태로 복용</h1>
        <span>
          약을 씹거나 가루 내어 먹으면 위나 장에 도착할 때까지 견디지 못하는
          상황이 발생할 수 있어요. 결과적으로 약효를 제대로 발휘하지 못할 수
          있으니 주의가 필요해요.
        </span>
      </div>

      <div className="medGuideBox3"></div>
      <div className="goormGuideFooter"></div>
    </div>
  );
};

export default MedGuideBox;
