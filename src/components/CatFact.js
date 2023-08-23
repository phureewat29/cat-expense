import React, { useState } from 'react';

const CatFact = () => {
  const [fact, setFact] = useState(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => setFact(data.fact))
  })

  return (
    <blockquote className='blockquote'>
      <p className='mb-1'>{fact}</p>
    </blockquote>
  );
};

export default CatFact;
