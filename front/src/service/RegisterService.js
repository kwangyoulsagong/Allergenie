import axios from "axios";

const handleRegister = async (
  email,
  password,
  nickname,
  onRegister,
  navigate
) => {
  try {
    // 서버에 등록 요청 보냄
    const data = {
      email: email,
      password: password,
      nickname: nickname,
    };

    const response = await axios.post(
      `https://port-0-allergenie-199u12dls2shgxu.sel5.cloudtype.app/api/v1/auth/signup`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = response.data;
    console.log("Server Response:", responseData);
    if (responseData.success) {
      console.log("등록된 사용자:", responseData.nickname);
      // 등록 성공 후 부모 컴포넌트의 상태 업데이트
      onRegister(responseData.nickname);
      // 등록 성공 후 로그인 페이지로 이동
      navigate("/");
    }
  } catch (error) {
    // 등록 실패 처리: 에러 메시지 표시 등
    console.error("등록 실패", error);
  }
};
export default handleRegister;
