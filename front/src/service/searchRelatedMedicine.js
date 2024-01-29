import axios from "axios";
const searchRelatedMedicine = async (medicineId) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/home/medicine/${medicineId}`,
      {
        headers: {
          "Content-Type": "applicaiton/json",
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
