import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
    onSubmit(e) {
        alert('New line added ! :)');
        e.preventDefault();
    }

    render() {
        return (
            <footer className="d-flex footer align-items-center">
                <div className="container">
                    <form className="form-row align-items-center justify-content-center" onSubmit={(e) => { this.onSubmit(e) }}>
                        <div className="col-3">
                            <input className="form-control" type="text" name="what" id="what" placeholder="What ?" required />
                        </div>
                        <div className="col-3">
                            <input className="form-control" type="text" name="who" id="who" placeholder="Who ?" required />
                        </div>
                        <div className="col-3">
                            <input className="form-control" type="text" name="cost" id="cost" placeholder="$$$" required />
                        </div>
                        <div className="col-1">
                            <button className="btn btn-primary" type="submit">+</button>
                        </div>
                    </form>
                </div>
            </footer>
        );
    }
}
