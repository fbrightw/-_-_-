import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {animalSpecies} from "../../../utils/data";
import TitleForm from "../../../utils/TitleForm";

const defaultGiftObject = {
  species: '',
  gender: '',
  age: ''
}

function Filter(props) {

  const [count, setCount] = useState(0);
  const [obj, setObj] = useState(defaultGiftObject);

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
      <div className="centering-container">
        <TitleForm title="Подарить подарок"/>
        <div className="filter">
            <Form.Group>
              <Form.Select
                  aria-label="Default select example"
                  name="species"
                  isInvalid={ !!props.errors.species }
                  onChange={(e) => onDropdownClick(e.target.value)}
              >
                <option>Вид животного</option>
                {animalSpecies.map(el => (
                    <option
                        value={el.name}
                        key={el.id}
                    >
                      {el.name}
                    </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type='invalid'>
                { props.errors.species }
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <div  key={`inline-radio`} className="mb-3">
                <Form.Check
                    label="М"
                    name="group1"
                    type={'radio'}
                    id={'inline-radio-1'}
                    inline
                    value="М"
                    onClick={(e) => onGenderClick(e.target.value)}
                    isInvalid={ !!props.errors.gender }
                />
                <Form.Check
                    label="Ж"
                    name="group1"
                    type={'radio'}
                    id={'inline-radio-2'}
                    inline
                    value="Ж"
                    onClick={(e) => onGenderClick(e.target.value)}
                    isInvalid={ !!props.errors.gender }
                />
                <Form.Control.Feedback type='invalid'>
                  { props.errors.gender }
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Control
                  size="df"
                  type="text"
                  value={obj.name}
                  onChange={(e) => onInput(e)}
                  placeholder="Укажите возраст"
                  isInvalid={ !!props.errors.age }
              />
              <Form.Control.Feedback type='invalid'>
                { props.errors.age }
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="dark" onClick={() => {
              props.onAdd(obj, count);
              setCount(count + 1);
            }}>
              Добавить
            </Button>
          </div>
        </div>
  );
}

export default Filter;