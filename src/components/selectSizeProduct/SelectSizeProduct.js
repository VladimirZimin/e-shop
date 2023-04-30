import React from "react";
import Select from "react-select";

const tranformProductFormat = (products) => {
  const result = products.reduce((acc, product) => {
    acc.push(...product.availableSizes);
    return [...new Set(acc)].sort();
  }, []);

  return result.map((size) => ({ value: size, label: size }));
};

const SelectSizeProduct = ({ data, onSortBySize }) => {
  const options = tranformProductFormat(data);
  return <Select options={options} onChange={onSortBySize} />;
};

export default SelectSizeProduct;
