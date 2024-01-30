import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../module/Logo";
import Nav from "../module/Nav";
import MyProfile from "../module/MyProfile";
import MedShouldNotTake from "../module/MedShouldNotTake";
import MedSideEffect from "../module/MedSideEffect";
import { useNavigate } from "react-router-dom";
import Footer from "../module/Footer";

const MyPage = ({ username, onLogout }) => {
  const [email, setEmail] = useState(null);
  const [prohibition, setProhibition] = useState([]);

  const navigate = useNavigate();
  const nickname = username;
  const storedUsername = localStorage.getItem("username");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedEmail = localStorage.getItem("userEmail");
        const storedProhibition = JSON.parse(
          localStorage.getItem("prohibition")
        );

        if (storedUsername && storedEmail && storedProhibition) {
          setEmail(storedEmail);
          setProhibition(storedProhibition);
        } else {
          const response = await axios.get(
            `http://localhost:8000/api/v1/mypage/${nickname}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.status === 200) {
            const userData = response.data;
            console.log(userData);
            const fetchedUsername = username;
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
            console.error("Error during data retrieval:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error during data retrieval:", error.message);
      }
    };

    fetchUserData();
  }, [nickname, username, storedUsername]);

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
      <MedShouldNotTake username={username} prohibition={prohibition} />
      <MedSideEffect />
      <Footer footerTop={"1500px"} />
    </div>
  );
};

export default MyPage;
