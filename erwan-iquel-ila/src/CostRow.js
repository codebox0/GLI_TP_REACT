import React, { Component } from 'react';
import './CostRow.css';

export default class CostRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const paidBy = 'Amine';
        const title = 'Beer';
        const amount = 15;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">{paidBy}</div>
                    <div className="col-4">{title}</div>
                    <div className="col-4">{amount}</div>
                </div>
            </div>
        );
    }
}
