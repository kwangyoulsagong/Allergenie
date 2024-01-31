import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const MedSideEffect = () => {
  const prohibitionInfo = useSelector(
    (state) => state.prohibitionInfo.prohibitionInfo || []
  );
  return (
    <div className="MyPage-main">
      <section className="Mypage-se">
        <div className="Mypage-se-title">부작용</div>
        <div className="Mypage-se-container"></div>
      </section>
      <section className="Mypage-caution">
        <div className="Mypage-se-title">주의사항</div>
        <div className="Mypage-caution-container">
          <div className="Mypage-caution-img">
            <img src={prohibitionInfo.image} />
          </div>
          <div className="Mypage-caution-content">
            <div className="Mypage-caution-name">{prohibitionInfo.name}</div>
            <div className="Mypage-caution-about">
              {prohibitionInfo.caution}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedSideEffect;
