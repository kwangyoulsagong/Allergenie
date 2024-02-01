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
      "https://port-0-allergenie-199u12dls2shgxu.sel5.cloudtype.app/api/v1/mypage/add",
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
