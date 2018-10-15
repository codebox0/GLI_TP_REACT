import React from 'react';
import CostRow from './CostRow';
import './Body.css';

export default function Body(props) {
        const costs = props.costs;
        const lines = costs.map((cost, index) => {
            return (
                <CostRow class="col-12" cost={cost} key={index} />
            );
        });

        return (
            <main className="container">
                <div className="row">
                    {lines}
                </div>
            </main>
        )
}
