import React, { Component } from "react"
import classNames from "classnames"

class Message extends Component {

    messageStyle(data) {
        return classNames({
            'is-dark': data.isDark,
            'is-primary': data.isPrimary,
            'is-link': data.isLink,
            'is-info': data.isInfo,
            'is-success': data.isSuccess,
            'is-warning': data.isWarning,
            'is-danger': data.isDanger,
        })
    }

    render() {
        const { title, children } = this.props;

        return (
            <article className={`message ${this.messageStyle(this.props)}`}>
                <div className="message-header">
                    <p>{title}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    {children}
                </div>
            </article>
        );
    }

}

export default Message;