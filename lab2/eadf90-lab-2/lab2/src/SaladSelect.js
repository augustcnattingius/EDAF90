import React, { Component } from "react";

export default class SaladSelection extends Component{
    render() {
        return( 
            <div className="form-group">
                <select className="form-control"
                        value={this.props.init}
                        name={this.props.type}
                        onChange={this.props.handleChange}
                        required>
                        <option value="">Select</option>
                        {this.props.items.map(name => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                </select>
                <div className="invalid-feedback">Please choose something!</div>
            </div>
        )}
}