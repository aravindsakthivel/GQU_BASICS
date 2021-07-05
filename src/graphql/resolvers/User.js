import axios from "axios";


const User = {
  posts: async (parent) => {
    const response = await axios.get(
      `http://localhost:3004/posts?author=${parent.id}`
    );
    return response.data;
  },
  pictures: async (parent) => {
    const response = await axios.get(
      `http://localhost:3004/pictures?author=${parent.id}`
    );
    return response.data;
  },
};


export { User };
