import { useState } from "react";

const useBindValues = (arr = []) => {
  const [values, setValues] = useState(arr);
  function handleValues(value) {
    return (e) => {
      const isChecked = e.target.checked;
      isChecked
        ? setValues([...values, value])
        : setValues(values.filter((val) => val !== value));
    };
  }
  return [values, handleValues];
};

export default useBindValues;
