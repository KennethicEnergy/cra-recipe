import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import "./recipe.styles.css";

const Recipe = (props) => {
  const { cookTime, prepTime, servings, title, images, description, uuid } = props;
  return (
    <Container>
      <Card style={{ background: "#f5d9d6" }}>
        <Row>
          <Col lg={{ span: 6, order: props.index % 2 === 0 ? 'first' : 'last' }}>
            <h5>{title}</h5>
            <span>{description}</span>
            <Container>
              <hr className="card-read" onClick={() => props.handleClick(uuid)}/>
            </Container>
            <Container>
              <Row>
                <Col>
                  <p> <i class="fas fa-fire"></i> {cookTime}</p>
                </Col>
                <Col>
                  <p><i class='far fa-clock'></i> {prepTime}</p>
                </Col>
                <Col>
                  <p> <i class='fas fa-user-friends'></i> {servings}</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={{ span: 6, order: props.index % 2 === 0 ? 'last' : 'first' }}>
            <img
              className="media"
              src={`http://localhost:3001${images.full}`}
              alt={title}
            />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Recipe;
