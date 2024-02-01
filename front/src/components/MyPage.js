import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../module/Logo";
import Nav from "../module/Nav";
import MyProfile from "../module/MyProfile";
import MedShouldNotTake from "../module/MedShouldNotTake";
import MedSideEffect from "../module/MedSideEffect";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../module/Footer";
import { Provider } from "react-redux";
import store from "../store";

const MyPage = ({ username, onLogout }) => {
  const [email, setEmail] = useState(null);
  const [prohibition, setProhibition] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const nickname = username;
  const storedUsername = localStorage.getItem("username");
  const userData = location.state.userData;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Check if location state contains user data
        if (location.state && location.state.userData) {
          const fetchedUsername = userData.emailResult[0].nickname;
          const fetchedProhibition = userData.prohibitionResult;
          const fetchedEmail = userData.emailResult[0].email;

          setEmail(fetchedEmail);
          setProhibition(fetchedProhibition);
          localStorage.setItem("username", fetchedUsername);
          localStorage.setItem("userEmail", fetchedEmail);
          localStorage.setItem(
            "prohibition",
            JSON.stringify(fetchedProhibition)
          );
        } else {
          console.log(
            "User data not available in location state. Display a message or perform another action."
          );
        }
      } catch (error) {
        console.error("Error during data retrieval:", error.message);
      }
    };

    fetchUserData();
  }, [location, nickname, username]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("prohibition");

    // 로그아웃 로직
    onLogout();
    // 홈페이지로 리다이렉트 또는 다른 동작을 수행할 수 있습니다.
    navigate("/");
  };

  return (
    <div>
      <Logo />
      <Nav username={username} onLogout={handleLogout} />
      <MyProfile username={username} email={email} />
      <Provider store={store}>
        <MedShouldNotTake
          username={username}
          prohibition={prohibition}
          userData={userData}
          setProhibition={setProhibition}
        />
        <MedSideEffect />
      </Provider>
      <Footer footerTop={"1500px"} />
    </div>
  );
};

export default MyPage;
