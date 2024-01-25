import axios from "axios";

const handleSearch = async (query, username, idFromQuery, navigate) => {
  try {
    var medicineId = query;
    const response = await axios.get(
      `http://localhost:8000/api/v1/home/${medicineId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Log the entire response
    console.log("Full response from the backend:", response);

    // Handle the response as needed
    console.log("Search results:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during search:", error);
    // Handle the error as needed
    return null;
  }
};

export default handleSearch;
