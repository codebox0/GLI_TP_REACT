import React, { Component } from 'react';
import CostRow from './CostRow';
import { costs } from './costs-mock';
import './Body.css';

export class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            costs: costs
        }
    }

    render() {
        const costs = this.state.costs;
        const lines = costs.map((cost) => {
            return (
                <CostRow class="col-12" cost={cost} />
            );
        });

        return (
            <body className="container">
                <div className="row">
                    {lines}
                </div>
            </body>
        )
    }
}
