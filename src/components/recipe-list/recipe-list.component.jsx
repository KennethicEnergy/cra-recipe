import React from "react";
import SessionContext from "../../core/SessionContext";

import "./recipe-list.styles.css";

import Recipe from "../recipe/recipe.component";
import RecipeDetail from "../recipe-detail/recipe-detail.component";
import Header from '../header/header.component';

class RecipeList extends React.Component {
  state = {
    activeRecipe: false,
    toggledRecipe: false,
  };

  handleClick = (uuid) => {
    this.setState({
      activeRecipe: uuid,
      toggledRecipe: !this.state.toggledRecipe,
    });
  };

  render() {
    return (
      <SessionContext.Consumer>
        {(context) => {
          const { recipesPayload } = context.state;
          const recipes = recipesPayload.map((recipe, index) => {
            return (
              <li className="recipe" key={recipe.uuid}>
                <Recipe {...recipe} index={index} handleClick={this.handleClick}/>
              </li>
            );
          });

          return !this.state.toggledRecipe && !this.state.activeRecipe ? (
            <div className="recipe-container">
              <ul className="recipe-list">{recipes}</ul>
            </div>
          ) : (
            <div>
              <RecipeDetail
                uuid={this.state.activeRecipe}
                handleClick={this.handleClick}
              />
            </div>
          );
        }}
      </SessionContext.Consumer>
    );
  }
}

export default RecipeList;
