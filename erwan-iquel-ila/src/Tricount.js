import React, { Component } from 'react';
import { Body } from './Body';
import { Header } from './Header';
import { Footer } from './Footer';
import './Tricount.css';

export class Tricount extends Component {
    render() {
        return (
            <div>
                    <Header />
                    <Body />
                    <Footer />
            </div>
        );
    }
}
