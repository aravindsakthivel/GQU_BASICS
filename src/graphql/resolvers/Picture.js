import axios from "axios";

const Picture = {
  author: async (parent) => {
    const response = await axios.get(
      `http://localhost:3004/users/${parent.author}`
    );
    return response.data;
  },
  post: async (parent) => {
    const response = await axios.get(
      `http://localhost:3004/pictures/${parent.post}`
    );
    return response.data;
  },
};

export { Picture };
