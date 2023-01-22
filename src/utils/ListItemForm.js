import React from 'react';
import {ListGroup} from "react-bootstrap";;

function ListItemForm(props) {
  return (
      <div>
        <ListGroup.Item>
          <div className="card-header">
            [{props.status}]
            {props.gift.species}
            <button
                className="delete-text"
                value={props.gift.id}
                onClick={props.onClick}
            >
              {props.buttonText}
            </button>
          </div>
        </ListGroup.Item>
      </div>
  );
}

export default ListItemForm;