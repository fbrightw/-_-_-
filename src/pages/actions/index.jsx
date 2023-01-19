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
                <div>
                  <ListGroup.Item>

                  </ListGroup.Item>
                </div>
          </ListGroup>
        </Card>
      </div>
  );
}