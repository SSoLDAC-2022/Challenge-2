import React, { useState } from 'react';

const ElementPropertyRow = ({name, value, isOpen}) => {

  const baseClass = 'property-line-wrapper'

  const [cls, setCls] = useState(baseClass);

  const onClick = () => {
    
    if (isOpen){
      setCls(cls===baseClass?`${baseClass} tab-active-selection`:baseClass)
    }
  }

  return (<div className = {cls}
               onClick={onClick}>
            <div className='property-title'>
              {name}
            </div>
            <div className='property-value'>
              {value}
            </div>
        </div>);
};
export default ElementPropertyRow