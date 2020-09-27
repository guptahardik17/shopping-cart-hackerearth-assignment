import React from 'react';
import './BuildControl.css';

const buildControl =(props)=> {
 
    return (
        // <img src={} />
        <tr>
          <td className= "Label">{props.name}</td>
          
          <td>
            <button disabled={props.disable} className="btn btn-secondary" onClick={props.removeItems}> - </button>
            &nbsp;&nbsp;{props.qty}&nbsp;&nbsp;
            <button className='btn btn-primary' onClick={props.addItems}> + </button>
          </td>
          
          <td>{props.price} Rs</td>
          <td><button className='btn btn-danger' onClick={props.removeWholeItem}> X </button></td>
        </tr>
       )

    
}

export default buildControl;