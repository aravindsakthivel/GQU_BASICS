import axios from "axios";

const Mutation = {
  createAgent: async (parent, args) => {
    const response = await axios.post(`http://localhost:3004/users`, {
      name: args.data.name,
      age: args.data.age,
      married: args.data.married,
      status: args.data.status,
      average: 0,
    });
    return response.data;
  },
  createPost: async (parent, args) => {
    const response = await axios.post(`http://localhost:3004/posts`, {
      title: args.title,
      content: args.content,
      author: 1,
      picture: 1,
    });
    return response.data;
  },
  deletePost: async (parent, args) => { 
    const response = await axios.delete(
      `http://localhost:3004/posts/${args.id}`
    );
    if (Object.keys(response.data).length === 0) {
      return true;
    }
    return false;
  },
  deleteAgent: async (parent, args) => {
    const response = await axios.delete(
      `http://localhost:3004/users/${args.id}`
    );
    if (Object.keys(response.data).length === 0) {
      return true;
    }
    return false;
  },
  updateAgent: async (parent, args) => {
    let data = {};
    if (args.name !== undefined) {
      data.name = args.name;
    }
    if (args.age !== undefined) {
      data.age = args.age;
    }
    if (args.married !== undefined) {
      data.married = args.married;
    }
    if (args.average !== undefined) {
      data.average = args.average;
    }

    const response = await axios.post(`http://localhost:3004/posts`, data);
    return response.data;
  },
};

export { Mutation };
