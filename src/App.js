import React, { Component } from 'react';
import './App.css';
import BuildControls from './Components/BuildControls';
import Total from './Components/Total'; 
import ls from 'local-storage';

class App extends Component {
  
    constructor(){
      super();  
      this.state={
        items: [],
        totalPrice: 0,
        totalDiscount: 0,
        totalTypeDiscount: 0,
        totalQty: 0,
      }

      this.addItems = this.addItems.bind(this);
      this.removeItems = this.removeItems.bind(this);
      this.removeWholeItem = this.removeWholeItem.bind(this);
    }
     
    componentDidMount(){
      const items = [ { "id": 9090, "name": "Item1", "price": 200, "discount": 10, "type": "fiction", "img_url": "https://place-hold.it/40.jpg" }, { "id": 9091, "name": "Item2", "price": 250, "discount": 15, "type": "literature", "img_url": "https://place-hold.it/40.jpg" }, { "id": 9092, "name": "Item3", "price": 320, "discount": 5, "type": "literature", "img_url": "https://place-hold.it/40.jpg" }, { "id": 9093, "name": "Item4", "price": 290, "discount": 0, "type": "thriller", "img_url": "https://place-hold.it/40.jpg" }, { "id": 9094, "name": "Item5", "price": 500, "discount": 25, "type": "thriller", "img_url": "https://place-hold.it/40.jpg" }, { "id": 9095, "name": "Item6", "price": 150, "discount": 5, "type": "literature", "img_url": "https://place-hold.it/40.jpg" }, { "id": 9096, "name": "Item7", "price": 700, "discount": 22, "type": "literature", "img_url": "https://place-hold.it/40.jpg" }, { "id": 9097, "name": "Item8", "price": 350, "discount": 18, "type": "fiction", "img_url": "https://place-hold.it/40.jpg" } ];
      this.setState({
        items: items,
        totalPrice: items.reduce((accumulator, currentValue) => { return accumulator + currentValue.price }, 0),
        totalDiscount: items.reduce((accumulator, currentValue) => { return accumulator + currentValue.discount }, 0),
        totalTypeDiscount: items.reduce((accumulator, currentValue) => { 
          if (currentValue.type === "fiction") 
            return accumulator + (currentValue.price * 15 / 100) 
          else
            return accumulator
        }, 0),
        totalQty: items.length,
      })
    }
        
    addItems(id) {
      const updatedItems = this.state.items.map(item => {
        if(item.id === id)
        {
          item.qty = item.qty ? item.qty += 1 : 2;
          item.disable = false;

          this.setState({
            totalQty: this.state.totalQty + 1,
            totalDiscount: this.state.totalDiscount + item.discount,
            totalPrice: this.state.totalPrice + item.price,
            totalTypeDiscount: item.type === "fiction" ? this.state.totalTypeDiscount + (item.price * 15 / 100) : this.state.totalTypeDiscount
          })
        }     

        return item;
      });
      
      this.setState({
          items: updatedItems,        
      })
    }
        
          
    removeItems(id) {
      const updatedItems= this.state.items.map(item =>{
        if(item.id === id)
          {
            if(item.qty > 0)
            {
                item.qty--;
                this.setState({
                  totalPrice: this.state.totalPrice - item.price,
                  totalQty: this.state.totalQty -1,
                  totalDiscount: this.state.totalDiscount - item.discount,
                  totalTypeDiscount: item.type === "fiction" ? this.state.totalTypeDiscount - (item.price * 15 / 100) : this.state.totalTypeDiscount
                })
            } 
            if(item.qty === 1)
            {
                item.disable = true;
            } 
          }
            return item;
        });
      
      this.setState({
          items: updatedItems     
      })
    }
          
          
    removeWholeItem(id) {
      const updatedItems= this.state.items.filter(item =>{
        if(item.id === id)
        {
            this.setState({
              totalPrice: this.state.totalPrice - (item.price * (item.qty || 1)),
              totalQty: this.state.totalQty - (item.qty || 1),
              totalDiscount: this.state.totalDiscount - (item.discount*(item.qty || 1)),
              totalTypeDiscount: item.type === "fiction" ? this.state.totalTypeDiscount - ((item.price * 15 / 100) * (item.qty || 1)) : this.state.totalTypeDiscount
            })
        } 
        
        return item.id !== id;
      });
      
      this.setState({
          items: updatedItems,      
      }) 
    }
          
    
    render(){
        
    return (
      <div className="container">
        <div>
          <div className="row">
            <div className="col-md-8">
              <BuildControls removeItems={this.removeItems} addItems={this.addItems} totalPrice={this.state.totalPrice} totalQty={this.state.totalQty} items={this.state.items} 
                removeWholeItem= {this.removeWholeItem} totalTypeDiscount={this.state.totalTypeDiscount} totalDiscount={this.state.totalDiscount} />
            </div>
            <div className="col-md-4">
              <Total totalTypeDiscount={this.state.totalTypeDiscount} totalPrice={this.state.totalPrice} totalQty={this.state.totalQty} items={this.state.items} totalDiscount={this.state.totalDiscount} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;




