import axios from "axios";

export const getUser = async (userId) => {
  const { data } = await axios.get(`/api/users/prifile/${userId}`);
  return data;
};
