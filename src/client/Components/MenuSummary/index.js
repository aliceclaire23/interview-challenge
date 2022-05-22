import React from 'react';
import DietaryTypeLabel from '../DietaryTypeLabel';

export default ({selectedItems}) => (
  <div className="menu-summary" data-testid="menu-summary">
    <div className="container">
      <div className="row">
        <div className="col-6 menu-summary-left">
          <span>{selectedItems.length} items</span>
        </div>
        <div className="col-6 menu-summary-right">
          6x <DietaryTypeLabel dietary='ve' />
          4x <DietaryTypeLabel dietary='v' />
          12x <DietaryTypeLabel dietary='n!' />
        </div>
      </div>
    </div>
  </div>
);