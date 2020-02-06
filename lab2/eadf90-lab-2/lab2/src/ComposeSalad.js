import React, { Component } from "react";

class ComposeSalad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foundation: "",
            proteins: [],
            extras: [],
            dressing: ""
        };
    }

    render() {
        const inventory = this.props.inventory;
        let foundations = Object.keys(inventory).filter(
        name => inventory[name].foundation
        );
        let proteins = Object.keys(inventory).filter(name => inventory[name].protein
        );
        let extras = Object.keys(inventory).filter(name => inventory[name].extra
        );
        let dressing = Object.keys(inventory).filter(name => inventory[name].dressing
        );
        return (
        <div className="container">
            <h4>Select salad</h4>
                <SaladSelect   value={this.foundation}
                                state = {this.state.foundations}></SaladSelect>
            <ul>
                {foundations.map(name => <li key={name}>{name}</li>)}
                {proteins.map(name => <li key={name}>{name}</li>)}
                {extras.map(name => <li key={name}>{name}</li>)}
                {dressing.map(name => <li key={name}>{name}</li>)}
            </ul>
        </div>
        );
    }
}

export default ComposeSalad;