import React from 'react';
import {Card, ListGroup} from "react-bootstrap";

function GiftsContainer(props) {
  return (
      <div className="gift-container-list">
        <Card className="card">
          <ListGroup variant="flush">
            {props.gifts.map(gift => (
              <>
                <ListGroup.Item>{gift.species}</ListGroup.Item>
                <ListGroup.Item>{
                  `Пол:  ${gift.gender} \n
                   Возраст:  ${gift.age}`}
                </ListGroup.Item>
              </>)
            )}
          </ListGroup>
        </Card>
      </div>
  );
}

export default GiftsContainer;