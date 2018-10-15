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
        if(this.state.what && this.state.who && this.state.cost) {
            var amount = parseInt(this.state.cost, 10);

            if(!isNaN(amount)) {
                var cost = {};

                cost.paidBy = this.state.what.slice();
                cost.title = this.state.who.slice();
                cost.amount = amount;

                var partialState = {
                    users: this.state.users.concat([cost.paidBy]),
                    costs: this.state.costs.concat([cost])
                }

                if(this.state.selectedCosts[0].paidBy === cost.paidBy) {
                    console.log('coucou');
                    partialState.selectedCosts = this.state.selectedCosts.concat([cost]);
                }

                this.setState(partialState);

                alert('New line added! :)');
            }
        }

        e.preventDefault();
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ?  target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const total = this.state.selectedCosts.reduce((acc, value) => {
            return acc + value.amount;
        }, 0);

        console.log(this.state);

        return (
            <div>
                <Header
                    users={this.state.users}
                    onInput={(e) => this.handleInput(e)}
                    />
                <Body costs={this.state.selectedCosts} />
                <AddExpenseForm onSubmit={(e) => this.handleSubmit(e)} onChange={(e) => this.handleInputChange(e)} />
                <Footer total={total} />
            </div>
        );
    }
}
