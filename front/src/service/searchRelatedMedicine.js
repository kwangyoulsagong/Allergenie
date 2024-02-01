import axios from "axios";
const searchRelatedMedicine = async (medicineId) => {
  try {
    const response = await axios.get(
      `https://port-0-allergenie-199u12dls2shgxu.sel5.cloudtype.app/api/v1/home/medicine/${medicineId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default searchRelatedMedicine;
