import React from 'react';

function TitleForm({title}) {
  return (
      <div style={{fontSize: '2em', display: 'flex', justifyContent: 'center'}}>
        {title}
      </div>
  );
}

export default TitleForm;