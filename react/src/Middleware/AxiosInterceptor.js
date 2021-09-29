import ax from "axios";

const axios = ax.create({
  baseURL: "http://localhost:5000/api/v1/article",
});

async function getTutorialsService() {
  try {
    const response = await axios.get("/", {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
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

async function addTutorialService(data) {
  try {
    const response = await axios.post("/", data, {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
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

async function updateTutorialService(id, data) {
  try {
    const response = await axios.put(`/${id}`, data, {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
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

async function deleteTutorialService(id) {
  try {
    const response = await axios.delete(`/${id}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
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

async function deleteTutorialsService() {
  try {
    const response = await axios.get("/deleteAll", {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
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

export {
  getTutorialsService,
  addTutorialService,
  updateTutorialService,
  deleteTutorialService,
  deleteTutorialsService,
};
