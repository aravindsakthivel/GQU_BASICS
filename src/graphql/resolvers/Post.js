import axios from "axios";

const Post = {
  author: async (parent) => {
    try {
      const response = await axios.get(
        `http://localhost:3004/users/${parent.author}`
      );
      return response.data;
    } catch (error) {
      return null
    }
  },
  picture: async (parent) => {
    const response = await axios.get(
      `http://localhost:3004/pictures/${parent.picture}`
    );
    return response.data;
  },
};

export { Post };
