import { useState } from "react";

export const useArr = () => {
  const [selected, setSelected] = useState(false);

  const isInArray = id => {
    let result = false;
    selected.map(element => {
      if (element === id) {
        result = true;
      }
    });
    return result;
  };

  const toggleSelect = id => {
    if (id == selected) {
      setSelected(false);
    } else {
      setSelected(id);
    }
  };

  const arrLength = () => {
    return selected.length;
  };

  return {
    selected,
    setSelected,
    isInArray,
    toggleSelect,
    arrLength,
  };
};
