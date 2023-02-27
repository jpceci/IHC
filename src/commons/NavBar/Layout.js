import React from "react";
import Navigator from "./NavBar";

export default function Layout({ children }) {

    const containerStyle = {
        width: "90%",
        margin: "10px auto",
    }
    return (<div>
        <Navigator />
        <div style={containerStyle}>
            {children}
        </div>
    </div>);
}