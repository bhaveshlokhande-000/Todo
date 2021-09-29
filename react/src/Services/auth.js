import ax from "axios";

const axios = ax.create({
  baseURL: "http://localhost:5000/api/v1/auth",
});

export async function auth(data) {
  try {
    const response = await axios.post("/", data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.data.success) {
      throw response;
    }
    const json_response = await response.data;
    return json_response;
  } catch (error) {
    if (error.response) throw new Error(error.response.data.error[0].msg);
    else throw new Error(error);
  }
}
