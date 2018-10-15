import React from 'react';
import CostRow from './CostRow';
import './Body.css';

export default function Body(props) {
        const costs = props.costs;
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
