import React from 'react';
import logo from './logo.svg';
import './App.css';
import inventory from './inventory.ES6';
import ComposeSalad from "./ComposeSalad";
import ComposeSaladModal from "./ComposeSaladModal";
import ViewOrder from './ViewOrder';
import shortid from "shortid"

class App extends React.Component {
  state = {
    inventory: {},
    salads: []
  };
  addSalad = obj => {
    obj.id = shortid.generate();
    

    const salad = [...this.state.salads, obj];
    this.setState({salads: salad})
    

  }
  clearOrder = () => {
    this.setState({salads: []});
  }
  
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>My Own Salad Bar</h1>
          <p>Here you can order custom made salads!</p> 
        </div>
      <ComposeSaladModal inventory={inventory}
                          addSalad={this.addSalad} />
      <ViewOrder order={this.state.salads}
                  clearOrder={this.clearOrder}
                  
      />
    </div>
    );
  }
}
export default App;
