import React, { useContext } from "react";
import SessionContext from "../../core/SessionContext";

import { Container, Row, Col, Button } from "react-bootstrap";

import "./recipe-detail.styles.css";

const RecipeDetail = (props) => {
  const sessionContext = useContext(SessionContext);
  const { state: { specialIngredients, recipes } } = sessionContext;
  const recipe = recipes[props.uuid];
  const specialIngredientsIds = Object.keys(specialIngredients);

  const ingredients = recipe.ingredients.map((ingredient) => {
    return (
      <li key={ingredient.uuid}>
        {specialIngredientsIds.includes(ingredient.uuid) ? (
          <div>
            <p>{ingredient.name}</p>
            <div className="specialCard">
              <h4>special</h4>
              <p>{specialIngredients[ingredient.uuid].title}</p>
              <p>{specialIngredients[ingredient.uuid].type}</p>
              <p>{specialIngredients[ingredient.uuid].text}</p>
            </div>
          </div>
        ) : (
          <div>
            <p>{ingredient.name}</p>
          </div>
        )}
      </li>
    );
  });

  const directions = recipe.directions.map((direction, index) => {
    return (
      <li key={index}>
        {
          direction.optional ? (
            <div>
              <p>{direction.instructions}</p>
            </div>
          ) : (
            <div>
              <p>
                {direction.instructions} - <span className="optional">optional</span>
              </p>
            </div>
          )
        }
      </li>
    );
  });

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <img src={`http://localhost:3001${recipe.images.medium}`} alt={recipe.title} />
          <h1>{recipe.title}</h1>
          <p>{recipe.postDate}</p>
          <p>{recipe.editDate}</p>
        </Col>
        <Col lg={6}>
          <Button className="btn-close" variant="danger" onClick={() => props.handleClick(false)}>&times;</Button>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <h3>Ingredients</h3>
          <ul>{ingredients}</ul>
        </Col>
        <Col lg={6}>
          <h3>Directions</h3>
          <ol>{directions}</ol>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDetail;
