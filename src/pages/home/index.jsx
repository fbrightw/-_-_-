import React, {useEffect, useState} from 'react';
import Filter from "./Filter";
import GiftsContainer from "./GiftsContainer";
import {setGivenGiftsArray, setRemovedGiftsArray,} from "../../slices/giftsSlice";
import {useDispatch, useSelector} from "react-redux";

export default function() {

  const givenGifts = useSelector(state => state.giftArray.givenGifts);
  const [gifts, setGifts] = useState(givenGifts);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletedGiftObject, setDeletedGiftObject] = useState();
  const dispatch = useDispatch();
  const removedGifts = useSelector(state => state.giftArray.removedGifts)

  function onAdd(obj, id) {
    setGifts(prev => [...prev,
      {
        ...obj,
        id: id
      }
    ])
  }

  useEffect(() => {
      dispatch(setGivenGiftsArray(gifts));
      if (isDeleting && typeof deletedGiftObject !== 'undefined')
        dispatch(setRemovedGiftsArray(
            [
              ...removedGifts,
              deletedGiftObject
            ]
        ));
      setIsDeleting(false);
  }, [gifts])

  function onDelete(id) {
    let deletedObj = gifts.find(element => element.id === parseInt(id));
    setDeletedGiftObject(deletedObj)
    let newGiftArray = gifts.filter(element => (element.id !== parseInt(id)));
    setGifts(newGiftArray);
    setIsDeleting(true);
  }

  return (
      <div>
        <Filter
          onAdd={onAdd}
        />
        {gifts.length > 0 ?
            <GiftsContainer
                gifts={gifts}
                onDelete={(id) => onDelete(id)}
            />
            :
            null
        }
      </div>
  );
}
