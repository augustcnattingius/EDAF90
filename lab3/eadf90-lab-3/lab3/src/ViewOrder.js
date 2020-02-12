import React from 'react';

export default class ViewOrder extends React.Component {
    render() {
        if(this.props.order.length > 0) {
        return (
            <>
            <ul className="list-group order-list">
                {this.props.order.map((key,index) => (
                    <li key={key.id} className="list-group-item">
                        {
                            index + 
                            1 +
                            ":" +
                            key.foundation +
                            ", "+
                            key.proteins +
                            ", " +
                            key.extras +
                            ", " + key.dressing

                        }
                    </li>
                )

                )

                }

            </ul>
            <button type="button" 
                    className="btn btn-danger clear"
                    onClick={this.props.clearOrder}>
                    Clear order
            </button>
            </>
        )}else{
            return(
                <p>Your order will display here!</p>
            )
        }
    }
}