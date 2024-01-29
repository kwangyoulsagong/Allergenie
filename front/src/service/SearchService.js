import axios from "axios";

const handleSearch = async (query, username, idFromQuery, navigate) => {
  try {
    var medicineName = query;
    const response = await axios.get(
      `http://localhost:8000/api/v1/home/${medicineName}`,
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
