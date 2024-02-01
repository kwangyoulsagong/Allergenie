import axios from "axios";

const handleLogin = async (email, password, onLogin, navigate) => {
  try {
    const request = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      "https://port-0-allergenie-199u12dls2shgxu.sel5.cloudtype.app/api/v1/auth/login",
      request,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log(response);
    const data = response.data;
    if (data.nickname) {
      // 토큰을 로컬 스토리지에 저장
      // 사용자 로그인 처리
      onLogin(data.nickname);
      console.log(data.user_id);
      localStorage.setItem("userId", data.user_id);

      // 페이지 이동
      navigate(`/home?id=${data.nickname}`);
    } else {
      console.error("로그인 실패:", "서버 응답에 필요한 데이터가 부족합니다.");
    }
  } catch (error) {
    console.error("로그인 중 에러:", error);
  }
};

export default handleLogin;
