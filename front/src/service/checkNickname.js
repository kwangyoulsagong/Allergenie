import axios from "axios";
const checkNicknameService = async (nickname) => {
  try {
    const response = await axios.get(
      `https://port-0-allergenie-199u12dls2shgxu.sel5.cloudtype.app/api/v1/auth/checkNickname/${nickname}`,
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
