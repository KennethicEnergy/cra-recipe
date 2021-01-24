const API_URL = "http://localhost:3001";

export default class Api {
  goFetch = (uri, inputOptions) => {
    const { headers, ...extraOpts } = inputOptions || {};
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(headers || {}),
      },
      mode: "cors",
      ...extraOpts,
    };
    return fetch(uri, options)
      .then((response) => {
        if (!response.ok) {
          const err = new Error(response.statusText);
          err.res = response;
          throw err;
        } else {
          return response.json();
        }
      })
      .catch((err) => {
        console.log("from fetch", err);
      });
  };

  getRecipes = async () => {
    const url = `${API_URL}/recipes`;
    const recipes = await this.goFetch(url, {
      method: "GET",
    });
    return recipes ? recipes : {};
  };

  getSpecials = async () => {
    const url = `${API_URL}/specials`;
    const specials = await this.goFetch(url, {
      method: "GET",
    });
    return specials ? specials : {};
  };

  deleteRecipe = async (uuid) => {
    const url = `${API_URL}/recipes/${uuid}`;
    const response = await this.goFetch(url, {
      method: "DELETE",
    });
    return response ? response : {};
  };
}
