import React from 'react';
import './NavPath.css';

class NavPath extends React.Component {
    render() {
        return (
            <div id="navPath">
                <h1>Home &gt; <span id="currentPath">{this.props.path}</span></h1>
            </div>
        )
    }
}

export default NavPath