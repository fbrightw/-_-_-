import React, {useState} from 'react';
import Filter from "./Filter";
import GiftsContainer from "./GiftsContainer";

export default function () {

  const [gifts, setGifts] = useState([])

  function onAdd(obj) {
      setGifts(prev => [...prev, obj])
  }

  return (
      <div>
        <Filter
          onAdd={onAdd}
        />
        {gifts.length > 0 ?
            <GiftsContainer
                gifts={gifts}
            />
            :
            null
        }
      </div>
  );
}
