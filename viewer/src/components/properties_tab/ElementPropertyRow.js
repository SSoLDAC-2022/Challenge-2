import React from 'react';

const ElementPropertyRow = (key, name, value, graphDB_property=null) => {
  return (<div className = "property-line-wrapper"
               key={`${key}`}>
            <div className='property-title'>
              {name}
            </div>
            <div className='property-value'>
              {value}
            </div>
        </div>);
};
export default ElementPropertyRow