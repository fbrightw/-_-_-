import React from 'react';
import {Button, Dropdown, Form} from "react-bootstrap";
import {animalSpecies} from "../../utils/data";

function Filter() {
  return (
      <>
      <div>Подарить подарок</div>
      <div className="filter">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Вид животного
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {animalSpecies.map(el =>
              <Dropdown.Item eventKey={el.id}>{el.name}</Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
        <Form>
          {['radio'].map((type) => (
              <div key={`reverse-${type}`} className="mb-3">
                <Form.Check
                    reverse
                    label="М"
                    name="group1"
                    type={type}
                    id={`reverse-${type}-1`}
                    inline={true}
                />
                <Form.Check
                    reverse
                    label="Ж"
                    name="group1"
                    type={type}
                    id={`reverse-${type}-2`}
                    inline={true}
                />
              </div>
          ))}
        </Form>
        <Form>
          <Form.Control size="df" type="text" placeholder="Large text" />
        </Form>
        <Button variant="dark">Добавить</Button>
      </div>
      </>
  );
}

export default Filter;