import React, { useEffect, useState } from 'react';

const CatFact = ({ show }) => {
  const [fact, setFact] = useState('')

  useEffect(() => {
    if (show) {
      fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => setFact(data.fact))
    }
  }, [show]);

  return (
    <blockquote className='blockquote'>
      <p className='mb-1'>{fact}</p>
    </blockquote>
  );
};

export default CatFact;
