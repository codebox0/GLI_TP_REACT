import React, { Component } from 'react';
import '../css/AddExpenseForm.css';

export class AddExpenseForm extends Component {
    render() {
        return (
            <div className="d-flex sticky-form align-items-center">
                <div className="container">
                    <form className="form-row align-items-center justify-content-center" onSubmit={(e) => this.props.onSubmit(e) }>
                        <div className="col-3">
                            <input className="form-control" type="text" name="what" id="what" placeholder="What ?" onChange={(e) => this.props.onChange(e)} required />
                        </div>
                        <div className="col-3">
                            <input className="form-control" type="text" name="who" id="who" placeholder="Who ?" onChange={(e) => this.props.onChange(e)} required />
                        </div>
                        <div className="col-3">
                            <input className="form-control" type="number" name="cost" id="cost" placeholder="€€€" onChange={(e) => this.props.onChange(e)} required />
                        </div>
                        <div className="col-1">
                            <button className="btn btn-primary" type="submit">+</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
