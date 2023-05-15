import axios from "axios";

const shloka = async () => {
  try {
    const res = await axios.get("http://localhost:9000/api/gita/shloka");
    // console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default shloka;
