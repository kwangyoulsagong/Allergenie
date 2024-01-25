import axios from "axios";
const checkNicknameService = async (nickname) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/auth/checkNickname/${nickname}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const check = response.data;
    return check;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export default checkNicknameService;
