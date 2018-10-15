import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        const title = 'Integration Week-End';

        return (
            <nav className="navbar navbar-light bg-light mb-2">
                <a className="navbar-brand" href="#">{title}</a>
                <form className="form-inline">
                    <select name="users" className="form-control" aria-label="Filter by name">
                        <option value="all">Tous</option>
                    </select>
                </form>
            </nav>
        );
    }
}
