import React, { useState } from 'react';

const ElementPropertyRow = ({key, name, value, isOpen}) => {

  const baseClass = 'property-line-wrapper'

  const [cls, setCls] = useState(baseClass);

  const onClick = () => {
    
    if (isOpen){
      setCls(cls===baseClass?`${baseClass} tab-active-selection`:baseClass)
    }
    console.log(isOpen)
  }

  return (<div className = {cls}
               key={`${key}`}
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