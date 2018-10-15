import React, { Component } from 'react';
import Body from './Body';
import { Header } from './Header';
import { AddExpenseForm } from './AddExpenseForm';
import Footer from './Footer';
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

    handleSubmit(e) {
        alert('New line added ! :)');
        e.preventDefault();
    }

    render() {
        const total = this.state.selectedCosts.reduce((acc, value) => {
            return acc + value.amount;
        }, 0);

        return (
            <div>
                <Header
                    users={this.state.users}
                    onInput={(e) => this.handleInput(e)}
                />
                <Body costs={this.state.selectedCosts} />
                <AddExpenseForm onSubmit={(e) => this.handleSubmit(e)} />
                <Footer total={total} />
            </div>
        );
    }
}
