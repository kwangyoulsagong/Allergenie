import axios from "axios";

const sideEffectService = async (medicineId) => {
  console.log(medicineId);
  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/home/sideeffect/${medicineId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {}
};
export default sideEffectService;
