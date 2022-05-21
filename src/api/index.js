import axios from "axios";

const url = "https://backendnodejstzuzulcode.uw.r.appspot.com/api";
const instance = axios.create({
  baseURL: url,
});

const get = async (url) => {
  return await instance.get(url);
};

const post = async (url, data) => {
  return await instance.post(url, data);
};

const postWithToken = async (url, data) => {
  const token = localStorage.getItem("token");
  if (token) {
    return await instance.post(url, data, {
      headers: {
        Authorzation: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  return {
    data: {
      failed: true,
      message: "No tenes tokens",
    },
  };
};

const putWithToken = async (url, data) => {
  const token = localStorage.getItem("token");
  if (token) {
    return await instance.put(url, data, {
      headers: {
        Authorzation: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  return {
    data: {
      failed: true,
      message: "No tenes tokens",
    },
  };
};

const deleteWithToken = async (url, data) => {
  const token = localStorage.getItem("token");
  if (token) {
    return await instance.delete(url, data, {
      headers: {
        Authorzation: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  return {
    data: {
      failed: true,
      message: "No tenes tokens",
    },
  };
};

export default instance;
export { get, post, postWithToken, putWithToken, deleteWithToken };
