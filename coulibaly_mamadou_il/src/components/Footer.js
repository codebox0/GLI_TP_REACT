import React from 'react';
import '../css/Footer.css';

export default function Footer(props) {
    return (
        <footer className="footer d-flex justify-content-center align-items-center bg-primary text-light font-weight-bold">
            Total Expenses: {props.total}€
        </footer>
    );
}
