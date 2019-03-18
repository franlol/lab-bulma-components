import React, { Component } from "react"
import classNames from "classnames"

class CoolNavBar extends Component {

    getNavbarColor(data) {
        return classNames({
        'is-primary': data.isPrimary,
        'is-link': data.isLink,
        'is-info': data.isInfo,
        'is-success': data.isSuccess,
        'is-warning': data.isWarning,
        'is-danger': data.isDanger,
        'is-black': data.isBlack,
        'is-dark': data.isDark,
        'is-light': data.isLight,
        'is-white': data.isWhite,
        });
    }

    render() {
        return (
            <nav className={`navbar ${this.getNavbarColor(this.props)}`} role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img alt="React makes me horny" src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>

                    <a href="#1" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="#1" className="navbar-item">Link 1</a>
                        <a href="#1" className="navbar-item">Link 2</a>

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a href="#1" className="button is-primary"><strong>Sign up</strong></a>
                                <a href="#1" className="button is-light">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

}

export default CoolNavBar;