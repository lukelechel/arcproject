import React from 'react';
import './NavPath.css';

function NavPath(props) {
    return (
        <div id="navPath">
            <h1>Home &gt; <span id="currentPath">{props.path}</span></h1>
        </div>
    )
}

export default NavPath