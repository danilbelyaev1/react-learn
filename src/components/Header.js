import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                {/* принимаю пропс */}
                { this.props.title }
            </header>
        )
    }
}

export default Header