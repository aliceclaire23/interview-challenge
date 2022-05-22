import React from 'react';
import DietaryTypeLabel from '../DietaryTypeLabel';

export default ({dietaries}) => (
  <p>
    { dietaries && dietaries.map(dietary => (
      <DietaryTypeLabel dietary={dietary} key={dietary} />
    ))}
  </p>
);