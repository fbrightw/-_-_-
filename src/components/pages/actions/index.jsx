import React from 'react';
import TitleForm from "../../../utils/TitleForm";
import {Card, ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import ListItemForm from "../../../utils/ListItemForm";

export default function() {

  const removedGifts = useSelector(state => state.giftArray.removedGifts);
  const givenGifts = useSelector(state => state.giftArray.givenGifts);
  let navigate = useNavigate();

  function onClick() {
    navigate('/home')
  }

  return (
      <div className="centering-container">
        <TitleForm title="История действий:"/>
        <Card>
          <ListGroup variant="flush">
            {removedGifts.length > 0 ?
              removedGifts.map(gift =>
                <ListItemForm
                  key={gift.id}
                  status="Удален"
                  gift={gift}
                  buttonText="Вернуться"
                  onClick={() => onClick}
                />
                )
                :
                null
            }
            {givenGifts.length > 0 ?
                givenGifts.map(gift =>
                    <ListItemForm
                        key={gift.id}
                        status="Подарен"
                        gift={gift}
                        buttonText="Вернуться"
                        onClick={onClick}
                    />
                )
                :
                null
            }
          </ListGroup>
        </Card>
      </div>
  );
}