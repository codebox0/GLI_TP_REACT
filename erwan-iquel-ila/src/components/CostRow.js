import React from 'react';
import './CostRow.css';

export default function CostRow(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">{props.cost.paidBy}</div>
                <div className="col-4">{props.cost.title}</div>
                <div className="col-4">{props.cost.amount}€</div>
            </div>
        </div>
    );
}
