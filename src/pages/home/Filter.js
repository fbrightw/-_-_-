import React, {useEffect, useState} from 'react';
import {Button, Dropdown, Form} from "react-bootstrap";
import {animalSpecies} from "../../utils/data";
import {useDispatch, useSelector} from "react-redux";
import {setGiftToArray} from "../../slices/giftsSlice";

const defaultGiftObject = {
  species: '',
  gender: '',
  age: ''
}

function Filter(props) {

  const [count, setCount] = useState(0);
  const [obj, setObj] = useState(defaultGiftObject)

  const dispatch = useDispatch();
  const gifts = useSelector(state => state.giftArray.gifts);

  function onDropdownClick(value) {
      setObj({
        ...obj,
        species: value
      })
  }

  function onInput(e) {
    setObj({
      ...obj,
      age: e.target.value
    })
  }

  function onGenderClick(value) {
    setObj({
      ...obj,
      gender: value
    })
  }

  return (
      <div style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
        <div style={{fontSize: '2em', display: 'flex', justifyContent: 'center'}}>Подарить подарок</div>
        <div className="filter">
          <Dropdown onSelect={(value) => onDropdownClick(value)}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {obj.species === '' ? 'Вид животного' : obj.species}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {animalSpecies.map(el =>
                  <Dropdown.Item eventKey={el.name} key={el.id}>{el.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form>
            <div  key={`inline-radio`} className="mb-3">
              <Form.Check
                  label="М"
                  name="group1"
                  type={'radio'}
                  id={'inline-radio-1'}
                  inline
                  value="М"
                  onClick={(e) => onGenderClick(e.target.value)}
              />
              <Form.Check
                  label="Ж"
                  name="group1"
                  type={'radio'}
                  id={'inline-radio-2'}
                  inline
                  value="Ж"
                  onClick={(e) => onGenderClick(e.target.value)}
              />
            </div>
          </Form>
          <Form>
            <Form.Control
                size="df"
                type="text"
                value={obj.name}
                onChange={(e) => onInput(e)}
                placeholder="Укажите возраст"
            />
          </Form>
          <Button variant="dark" onClick={() => {
            props.onAdd(obj, count);
            dispatch(setGiftToArray([...gifts, obj]));
            setCount(count + 1);
          }}>
              Добавить
          </Button>
        </div>
      </div>
  );
}

export default Filter;