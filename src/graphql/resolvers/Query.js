import axios from "axios";

const Query = {
  agent: async (parent, args) => {
    try {
      const response = await axios.get(
        `http://localhost:3004/users/${args.id}`
      );
      return response.data;
    } catch (error) {
      return null;
    }
  },
  agents: async () => {
    const response = await axios.get("http://localhost:3004/users");
    return response.data;
  },
  multiply: (parent) => {
    const val = args.value * 10;
    return val;
  },
  msg: (parent, args) => {
    if (args.value.length) {
      return `Hello ${args.value[0]} ${args.value[1]}`;
    }
    return `Sorry, no values`;
  },
  posts: async () => {
    const response = await axios.get(`http://localhost:3004/posts`);
    return response.data;
  },
  post: async (parent, args) => {
    const response = await axios.get(`http://localhost:3004/posts/${args.id}`);
    return response.data;
  },
  pictures: async () => {
    const response = await axios.get(`http://localhost:3004/pictures`);
    return response.data;
  },
  getAnimal: () => {
    let response;
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random)
    if (random > 3) {
      response = {
        animal: "DOG",
        name: "Captain",
        hair: "lots",
      };
    } else {
      response = {
        animal: "CAT",
        name: "Fluffy",
        paws: "sharp",
      };
    }
    return response;
  },
};

export { Query };
