import axios from "axios";

const sideEffectService = async (medicineId) => {
  console.log(medicineId);
  try {
    const response = await axios.get(
      `https://port-0-allergenie-199u12dls2shgxu.sel5.cloudtype.app/api/v1/home/sideeffect/${medicineId}`,
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
