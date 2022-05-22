import React from 'react';
import DietaryTypeLabel from '../DietaryTypeLabel';

export default () => (
  <p>
    <DietaryTypeLabel dietary='ve' />
    <DietaryTypeLabel dietary='v' />
    <DietaryTypeLabel dietary='n!' />
  </p>
);