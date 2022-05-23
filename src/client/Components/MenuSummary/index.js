import React from 'react';
import DietaryTypeLabel from '../DietaryTypeLabel';

export default ({selectedItems}) => {
  // TODO: get dynamic list of types from the data
  const dietaryTypes = [ "v", "ve", "df", "gf", "n!", "rsf" ];
  const dietaries = dietaryTypes.map(type => ({
    name: type,
    count: selectedItems.filter(item => item.dietaries.includes(type)).length
  }));
  
  return(
    <div className="menu-summary" data-testid="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{selectedItems.length} items</span>
          </div>
          <div className="col-6 menu-summary-right">
            { dietaries.map(dietary => (
              <span key={dietary.name}>
                {dietary.count}x <DietaryTypeLabel dietary={dietary.name}/>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};
