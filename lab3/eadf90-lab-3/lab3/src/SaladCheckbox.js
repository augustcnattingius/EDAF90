import React, { Component } from "react";

export default class SaladCheckbox extends React.Component {
    render() {
        return(
            <>
            {this.props.items.map(name =>(
                <div key={name} className="form-check">
                    <input 
                        className="form-check-input"
                        type="checkbox"
                        value={name}
                        name={this.props.type}
                        checked={
                            this.props.itemList.includes(name) || false
                        }
                        onChange={this.props.onChange}
                    />
                    <label className="form-check-label">{name}</label>
                </div>
            ))}
            </>
        )
    }
}