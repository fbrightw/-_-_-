import React, {useEffect, useState} from 'react';
import Filter from "./Filter";
import GiftsContainer from "./GiftsContainer";
import {setGivenGiftsArray, setRemovedGiftsArray,} from "../../../slices/giftsSlice";
import {useDispatch, useSelector} from "react-redux";
import renderIf from "../../../utils/renderIf";

export default function() {

  const givenGifts = useSelector(state => state.giftArray.givenGifts);
  const [gifts, setGifts] = useState(givenGifts);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletedGiftObject, setDeletedGiftObject] = useState();
  const [ errors, setErrors ] = useState({});

  const dispatch = useDispatch();
  const removedGifts = useSelector(state => state.giftArray.removedGifts);

  const findFormErrors = (form) => {
    const { species, gender, age } = form
    const newErrors = {};
    if ( !species || species === 'Вид животного' )
      newErrors.species = 'Должен быть выбран вид животного'

    if ( !gender )
      newErrors.gender = 'Должен быть пол'

    if ( !age || age === '' )
      newErrors.age = 'Не указан возвраст'

    if ( parseInt(age) < 2 || parseInt(age) > 12 ) {
      newErrors.age = 'Возраст ребенка: от 2 до 12 лет'
    }
    return newErrors
  }

  function onAdd(obj, id) {
    const errors = findFormErrors(obj);
    if ( Object.keys(errors).length > 0 )
      setErrors(errors);
    else {
      setErrors({});
      setGifts(prev => [...prev,
        {
          ...obj,
          id: id
        }
      ])
    }
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
          errors={errors}
        />
        {renderIf(gifts.length > 0,
            <GiftsContainer
                gifts={gifts}
                onDelete={(id) => onDelete(id)}
            />
        )}
      </div>
  );
}
