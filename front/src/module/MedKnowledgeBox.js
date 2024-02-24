import React from "react";

const MedKnowledgeBox = () => {
  return (
    <div className="MedKnowledgeContainer">
      <h1 className="MedKnowledge">구름 상식 </h1>
      <div className="KnowledgeBox1">
        <h1>Q. 약을 오래 먹으면 내성이 생긴다?</h1>
        <div>x</div>
        <span>
          대부분의 만성질환 치료제는 내성이 없으니 안심하고 드셔도 좋아요!
        </span>
      </div>
      <div className="KnowledgeBox2">
        <h1>Q. 숙취로 인한 두통에 진통제 복용, 괜찮을까?</h1>
        <div>x</div>
        <span>
          숙취로 인한 두통에 진통제를 복용할 경우 간 손상을 발생시킬 수 있어요.
        </span>
      </div>
      <div className="KnowledgeBox3"></div>
      <div className="KnowledgeBox4"></div>
      <div className="KnowledgeGoorm"></div>
    </div>
  );
};

export default MedKnowledgeBox;
