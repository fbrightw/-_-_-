import React from 'react';
import {Card, ListGroup} from "react-bootstrap";

function GiftsContainer(props) {

  return (
      <div className="gift-container-list">
        <Card className="card">
          <ListGroup variant="flush">
            {props.gifts.map(gift => (
              <div key={gift.id}>
                <ListGroup.Item>
                  <div className="card-header">
                    {gift.species}
                    <button
                        className="delete-text"
                        value={gift.id}
                        onClick={(e) => props.onDelete(e.target.value)}
                    >
                      Удалить
                    </button>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <>
                    <div>{`Пол:  ${gift.gender}`}</div>
                    <div>{`Возраст:  ${gift.age}`}</div>
                  </>
                </ListGroup.Item>
              </div>)
            )}
          </ListGroup>
        </Card>
      </div>
  );
}

export default GiftsContainer;