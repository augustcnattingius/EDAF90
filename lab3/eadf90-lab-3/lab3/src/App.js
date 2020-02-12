import React from 'react';
import logo from './logo.svg';
import './App.css';
import inventory from './inventory.ES6';
import ComposeSalad from "./ComposeSalad";
import ViewOrder from './ViewOrder';
import shortid from "shortid";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
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
    const composeSaladElement =  (params) => <ComposeSalad {...params} inventory={inventory} addSalad={this.addSalad}/>;
    const viewOrderElement = (params) => <ViewOrder {...params} order={this.state.salads} clearOrder={this.clearOrder}/>;
    return (
      <Router>
      <div>
        <div className="jumbotron text-center">
          <h1>My Own Salad Bar</h1>
          <p>Here you can order custom made salads!</p> 
        </div>
        <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to="compose-salad">
                Compose salad
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="view-order">
                View order
              </Link>
            </li>
        </ul>
        <Route path = "/compose-salad" render={composeSaladElement}/>
        <Route path = "/view-order" render={viewOrderElement}/>
        
      </div>
      </Router>
    );
  }
}
export default App;
