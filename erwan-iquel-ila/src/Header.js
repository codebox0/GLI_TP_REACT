import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Integration Week-End',
        }
    }

    render() {
        const users = this.props.users;
        const options = users.map((user) => {
            return (
                <option value={user}>{user}</option>
            )
        });

        return (
            <nav className="navbar navbar-light bg-light mb-2">
                <a className="navbar-brand" href="#">{this.state.title}</a>
                <form className="form-inline">
                    <select name="users" className="form-control" aria-label="Filter by name" onInput={(e) => this.props.onInput(e)}>
                        <option value="all">Tous</option>
                        {options}
                    </select>
                </form>
            </nav>
        );
    }
}
