import axios from "axios";

const addMedication = async (userId, medId) => {
  console.log(userId);
  console.log(medId);
  const data = {
    medicineId: medId,
    user_id: userId,
  };
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/mypage/add",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
export default addMedication;
