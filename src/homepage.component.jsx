import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">USA</h1>
                    <span classNamr="subtitle">EXPLORE</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">CANADA</h1>
                    <span classNamr="subtitle">EXPLORE</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">EUROPE</h1>
                    <span classNamr="subtitle">EXPLORE</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">ASIA</h1>
                    <span classNamr="subtitle">EXPLORE</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">MIDDLE EAST</h1>
                    <span classNamr="subtitle">EXPLORE</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;