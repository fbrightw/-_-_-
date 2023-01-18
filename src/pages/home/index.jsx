import React, {useState} from 'react';
import Filter from "./Filter";
import GiftsContainer from "./GiftsContainer";

export default function () {

  const [gifts, setGifts] = useState([])

  function onAdd(obj, id) {
      setGifts(prev => [...prev,
        {
          ...obj,
          id: id
        }
      ])
  }

  function onDelete(id) {
    let newGiftArray = gifts.filter(element => (element.id !== parseInt(id)));
    setGifts(newGiftArray);
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
