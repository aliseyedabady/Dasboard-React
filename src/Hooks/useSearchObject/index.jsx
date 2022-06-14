export const useSearchObject = () => {
  const findNestedObj = (entireObj, keyToFind, valToFind) => {
    let foundObj;
    JSON.stringify(entireObj, (_, nestedValue) => {
      if (nestedValue && nestedValue[keyToFind]) {
        foundObj = nestedValue;
      }
      return nestedValue;
    });
    return foundObj;
  };
  return {
    findNestedObj,
  };
};
