import axios from "axios";

export const fetchProducts = async (path) => {
  try {
    const { data } = await axios.get(
      `https://e-shop-e774b-default-rtdb.firebaseio.com/${path}.json`
    );
    const transformData = Object.keys(data).map((key) => {
      return {
        ...data[key],
        id: key,
      };
    });
    return transformData;
  } catch (error) {
    console.log(error);
  }
};
