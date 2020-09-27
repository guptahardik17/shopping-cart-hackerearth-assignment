import React from 'react';
import './Total.css';

const Total =(props)=> {
    
   
    let order_total, totalPrice, totalDiscount, totalTypeDiscount;
    if(props.totalQty!==0){
        totalPrice= props.totalPrice+'.00 Rs';
        totalDiscount= props.totalDiscount +'.00 Rs';
        totalTypeDiscount= props.totalTypeDiscount +' Rs';
        order_total= props.totalPrice - props.totalDiscount - props.totalTypeDiscount +' Rs';
    }else{
        totalPrice= '0.00 Rs';
        totalDiscount= '0.00 Rs';
        totalTypeDiscount= '0.00 Rs';
        order_total= '0.00 Rs';
    }
    
 
    return (    
        <div className="body">
        <b className="total">Total</b>
        
        <hr/>
        
        <p>Items({props.totalQty}):&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;{totalPrice}</p>
        <p>Discount:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-{totalDiscount}</p>
        <p>Type discount:&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;-{totalTypeDiscount}</p>
        <hr/>
            
        <p><b>Order total</b>:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;{order_total}</p>
        </div>
       )
       
}

export default Total;