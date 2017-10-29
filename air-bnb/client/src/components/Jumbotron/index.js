import React from "react";
import "./Jumbotron.css";

export default ({ imageUrl }) => {
    let jumbotronStyle = { backgroundImage: `url(${imageUrl} )` };
    return (
        <div className="Jumbotron" style={jumbotronStyle}></div>
    )
}

