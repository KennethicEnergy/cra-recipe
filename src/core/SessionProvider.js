import React from "react";
import Api from "./Api.js";
import SessionContext from "./SessionContext.js";

const api = new Api();
let isMounted = false;

class SessionProvider extends React.Component {
  state = {
    recipesPayload: [],
    specialsPayload: [],
    recipes: {},
    specials: {},
    specialIngredients: {},
  };

  initializeApp = async () => {
    isMounted = true;
    if (isMounted === true) {
      const recipesPayload = await api.getRecipes();
      const specialsPayload = await api.getSpecials();
      let specialIngredients = {};
      let recipes = {};
      let specials = {};
      Object.values(recipesPayload).forEach((recipe) => {
        recipes[recipe.uuid] = recipe;
      });
      Object.values(specialsPayload).forEach((special) => {
        specials[special.uuid] = special;
        specialIngredients[special.ingredientId] = special;
      });
      this.setState({
        recipesPayload,
        specialsPayload,
        recipes,
        specials,
        specialIngredients,
      });
    }
  };

  componentDidMount() {
    this.initializeApp();
  }

  componentWillUnmount() {
    isMounted = false;
  }

  render() {
    return (
      <SessionContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </SessionContext.Provider>
    );
  }
}

export default SessionProvider;
