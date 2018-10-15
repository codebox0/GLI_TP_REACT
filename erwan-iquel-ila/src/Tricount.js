import React, { Component } from 'react';
import Body from './Body';
import { Header } from './Header';
import { AddExpenseForm } from './AddExpenseForm';
import { costs } from './costs-mock';
import { users } from './users-mock';
import './Tricount.css';

export class Tricount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            costs: costs,
            users: users,
            selectedCosts: costs
        }
    }

    filterCostsByUser(user) {
        var selectedCosts = this.state.costs.slice();

        if(user !== 'all') {
            selectedCosts = selectedCosts.filter((value) => {
                return value.paidBy === user;
            });
        }

        this.setState({
            selectedCosts: selectedCosts
        });
    }

    handleInput(e) {
        const target = e.target;
        const options = target.options;

        if(typeof options !== 'undefined') {
            this.filterCostsByUser(options[target.selectedIndex].value);
        }
    }

    render() {
        const total = this.state.selectedCosts.reduce((acc, value) => {
            console.log('acc');
            console.log(acc);
            console.log('val');
            console.log(value);
            return (acc.amount || acc) + value.amount;
        });

        return (
            <div>
                <Header
                    users={this.state.users}
                    onInput={(e) => this.handleInput(e)}
                />
                <Body costs={this.state.selectedCosts} />
                <AddExpenseForm />
            </div>
        );
    }
}
