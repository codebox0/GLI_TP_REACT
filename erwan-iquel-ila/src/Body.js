import React, { Component } from 'react';
import CostRow from './CostRow';
import './Body.css';

export class Body extends Component {
    renderCostRow() {
        return (
            <CostRow class="col-12" />
        );
    }

    render() {
        return (
            <body className="container">
                <div className="row">
                    {this.renderCostRow()}
                    {this.renderCostRow()}
                    {this.renderCostRow()}
                    {this.renderCostRow()}
                    {this.renderCostRow()}
                </div>
            </body>
        )
    }
}
