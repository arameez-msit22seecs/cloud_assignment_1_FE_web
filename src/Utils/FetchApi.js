const baseUrl = process.env.REACT_APP_BASEURL;

const fetchGet = async (token, endPoint) => {
  try {
    let response = await fetch(`${baseUrl}${endPoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Bearer " + token : "",
      },
    });
    let jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log("fetchGet error: " + error);
  }
};

const fetchPost = async (endPoint, token, data) => {
  try {
    let response = await fetch(`${baseUrl}${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Bearer " + token : "",
      },
      body: JSON.stringify(data),
    });
    let jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log("fetchPost error: " + error);
  }
};

const fetchPostFormData = async (endPoint, token, data) => {
  for (var pair of data.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }
  try {
    let response = await fetch(`${baseUrl}${endPoint}`, {
      method: "POST",
      body: data,
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
    });
    let jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log("fetchPost error: " + error);
  }
};

const fetchPut = async (token, endPoint, data) => {
  try {
    let response = await fetch(`${baseUrl}${endPoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Bearer " + token : "",
      },
      body: JSON.stringify(data),
    });
    let jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log("fetchGet error: " + error);
  }
};
