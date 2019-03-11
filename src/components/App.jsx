import React, { Component } from 'react';
import Avatar from './Avatar';
import NavPanel from './NavPanel';

class App extends Component {
    render() {
        return (
            <div>
                <Avatar />
                <NavPanel />
            </div>
        )
    }
}

export default App;
