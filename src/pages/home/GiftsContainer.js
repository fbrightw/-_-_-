import React from 'react';
import {Card, ListGroup} from "react-bootstrap";

function GiftsContainer(props) {

  function onDelete(id) {
    console.log("id", id)
  }

  return (
      <div className="gift-container-list">
        <Card className="card">
          <ListGroup variant="flush">
            {props.gifts.map(gift => (
              <div >
                <ListGroup.Item>
                  <div>
                  {gift.species}
                  <div className="delete-text" id={gift.id} onClick={(e) => onDelete(e.target.value)}>Удалить</div>
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