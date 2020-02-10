import React, { Component } from "react";
import SaladSelect from "./SaladSelect"
import SaladCheckbox from "./SaladCheckbox";

class ComposeSalad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foundation: "",
            proteins: [],
            extras: [],
            dressing: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSelectChange = event => {

        const name = event.target.getAttribute("name");
        const value = event.target.value;
        
        if (name === "foundation") {
            this.setState({foundation: value});
        } else if(name === "dressing") {
            this.setState({dressing: value})
        }
    };
    handleBoxChange = event => {
        console.log(event.target.checked);
        const name = event.target.getAttribute("name");
        const value = event.target.value;
        let index;

        if(name === "protein") {
            if(event.target.checked) {
                this.setState({proteins: [...this.state.proteins,value]});
            } else {
                index = this.state.proteins.indexOf(value);
                this.setState(this.state.proteins.splice(index, 1));
            } 
        }
        else if (name === "extras") {
            if(event.target.checked) {
                this.setState({extras: [...this.state.extras, value]});
            } else {
                index = this.state.extras.indexOf(value);
                this.setState(this.state.extras.splice(index,1));
            }
        }
    }
    handleSubmit = event => {
        event.preventDefault();

        if (event.target.checkValidity() === true) {
            const salad = this.state;
            this.props.addSalad(salad);

            this.setState({
                foundation: "",
                proteins: [],
                extras: [],
                dressing: ""
            });
        }
    }

    render() {
        const inventory = this.props.inventory;
        this.foundation = Object.keys(inventory).filter(
        name => inventory[name].foundation
        );
        this.proteins = Object.keys(inventory).filter(name => inventory[name].protein
        );
        this.extras = Object.keys(inventory).filter(name => inventory[name].extra
        );
        this.dressing = Object.keys(inventory).filter(name => inventory[name].dressing
        );
        return (
        <div className="container">
        <form onSubmit={this.handleSubmit}>
            <h4>Select foundations</h4>
            <SaladSelect 
                type="foundation"
                items={this.foundation}
                init={this.state.foundation}
                handleChange={this.handleSelectChange}
            />
            <h4>Select protein</h4>
            <SaladCheckbox
                type="protein"
                items={this.proteins}
                itemList={this.state.proteins}
                onChange={this.handleBoxChange}
            />
            <h4>Select extras</h4>
            <SaladCheckbox
                type="extras"
                items={this.extras}
                itemList={this.state.extras}
                onChange={this.handleBoxChange}
            />
            <h4>Select dressing</h4>
            <SaladSelect
                type="dressing"
                items={this.dressing}
                init={this.state.dressing}
                handleChange={this.handleSelectChange}
            />
            <button type="submit" className="btn btn-primary">
                    Lägg till salad
            </button>
        </form>
        </div>
        );
    }
}

export default ComposeSalad;