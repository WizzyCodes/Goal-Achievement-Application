import axios from "axios";
const url: string = "http://localhost:2222/api";

export const createGoal = async (data: {}) => {
  return await axios.post(`${url}/create-goal`, data).then((res) => {
    return res.data;
  });
};
export const readGoal = async () => {
  return await axios.get(`${url}/get-all-goal`).then((res) => {
    return res.data;
  });
};
export const readOneGoal = async (id: string) => {
  return await axios.get(`${url}/read-one-goal/${id}`).then((res) => {
    return res.data;
  });
};
export const updateGoal = async (goalID: string) => {
  return await axios
    .patch(`${url}/update-goal-status/${goalID}`)
    .then((res) => {
      return res.data;
    });
};
