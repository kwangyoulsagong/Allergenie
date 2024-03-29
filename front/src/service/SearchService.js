import axios from "axios";

const handleSearch = async (query, username, idFromQuery, navigate) => {
  try {
    var medicineName = query;
    const response = await axios.get(
      `https://port-0-allergenie-199u12dls2shgxu.sel5.cloudtype.app/api/v1/home/${medicineName}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error during search:", error);
    // Handle the error as needed
    return null;
  }
};

export default handleSearch;
