import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = ({ username, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const idFromQuery = params.get("id");

  // 사용자가 로그인되어 있으면서 username 또는 쿼리 매개변수에서 ID가 있는지 확인
  const isLoggedIn = !!username || !!idFromQuery;
  useEffect(() => {
    // Store the username in localStorage when it's available
    if (username) {
      localStorage.setItem("username", username);
    }
  }, [username]);
  const handleMypage = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/mypage/${username}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status == 200) {
        const userData = response.data;
        navigate(`/mypage?nickname=${username}`, { state: { userData } });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="nav">
      <div className="Ellipse">
        <div className="Profile_picture">
          <div className="Profile_Avatar"></div>
        </div>
      </div>
      <div
        className="greetings"
        dangerouslySetInnerHTML={{
          __html: isLoggedIn
            ? `${
                username || idFromQuery
              } <div class='word2'> 님, 안녕하세요</div>`
            : "",
        }}
      ></div>
      <div className="line-16"></div>
      <div className="my-page" onClick={handleMypage}>
        마이페이지
      </div>
      <div className="line-17"></div>
      <div className="logout" onClick={onLogout}>
        로그아웃
      </div>
    </div>
  );
};

export default Nav;
