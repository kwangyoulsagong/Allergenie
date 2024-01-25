import axios from "axios";
const checkEmailService = async (email) => {
  console.log(email);
  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/auth/checkEmail/${email}`,
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
export default checkEmailService;
