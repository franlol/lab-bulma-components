import React, { Component } from "react";
import classNames from "classnames"

class CoolButton extends Component {

    getStyles(props) {
        return classNames({
            "is-active": props.isActive,
            "is-black": props.isBlack,
            "is-centered": props.isCentered,
            "is-danger": props.isDanger,
            "is-dark": props.isDark,
            "is-focused": props.isFocused,
            "is-grouped": props.isGrouped,
            "is-hovered": props.isHovered,
            "is-info": props.isInfo,
            "is-inverted": props.isInverted,
            "is-large": props.isLarge,
            "is-light": props.isLight,
            "is-link": props.isLink,
            "is-loading": props.isLoading,
            "is-medium": props.isMedium,
            "is-outlined": props.isOutlined,
            "is-primary": props.isPrimary,
            "is-right": props.isRight,
            "is-rounded": props.isRounded,
            "is-selected": props.isSelected,
            "is-small": props.isSmall,
            "is-static": props.isStatic,
            "is-success": props.isSuccess,
            "is-text": props.isText,
            "is-warning": props.isWarning,
            "is-white": props.isWhite,
        });
    }

    render() {
        const { children } = this.props;
        return (
            // <button className={`button ${isSmall ? 'is-small' : ''} ${isDanger ? 'is-danger' : ''} ${isSuccess ? 'is-success' : ''}`}>{children}</button>
            <button className={`button ${this.getStyles(this.props)}`}>{children}</ button>
        );
    }

}

export default CoolButton;