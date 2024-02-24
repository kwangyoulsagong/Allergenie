import axios from "axios";

const handleSearchList = async (query, pageNo) => {
  const search = query;
  try {
    const response = await axios.get(
      `https://port-0-allergenie-199u12dls2shgxu.sel5.cloudtype.app/api/v1/home?search=${search}&pageNo=${pageNo}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error during search:", error.message);
    return null;
  }
};

export default handleSearchList;
