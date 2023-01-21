import React from 'react';
import TitleForm from "../../utils/TitleForm";
import {Card, ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";

export default function (props) {

  const removedGifts = useSelector(state => state.giftArray.removedGifts)
  console.log("removed", removedGifts)

  return (
      <div>
        <TitleForm title="История действий:"/>
        <Card className="card">
          <ListGroup variant="flush">
            {
              <div>
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
              </div>
            }
          </ListGroup>
        </Card>
      </div>
  );
}