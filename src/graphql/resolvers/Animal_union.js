const Animal = {
  __resolveType(obj, context, info) {
    if (obj.animal == "DOG") {
      return "Dog";
    }
    if (obj.animal == "CAT") {
      return "Cat";
    }
    return null;
  },
};

export { Animal };
