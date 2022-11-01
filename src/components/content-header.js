import React from "react";

const Header = (props) => {
    return (
        <img src={props.image} className="content-image" alt={props.name} />
    )
}

export default Header;