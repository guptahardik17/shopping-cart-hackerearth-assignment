import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl'; 


const buildControls = (props) => {

    return (
        <div className= "BuildControls">
          <table className="table">
            <thead>
                <tr>
                  <th scope="col">Items ({props.totalQty})</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove Item</th>
                </tr>
            </thead>

            <tbody>
              {props.items.map(item =>
                <BuildControl
                  key={item.id}
                  name={item.name}
                  addItems={() => props.addItems(item.id)}
                  removeItems={() => props.removeItems(item.id)} 
                  disable={item.disable === false ? false : true}
                  qty={item.qty || 1}
                  price={item.price} 
                  removeWholeItem={() =>props.removeWholeItem(item.id)}  
                />
              )}
            </tbody>
          </table>
      </div>
    );
}

export default buildControls;