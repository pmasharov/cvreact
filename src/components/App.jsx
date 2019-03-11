import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import NavPanel from './NavPanel';
import Avatar from './Avatar';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Contacts from './Contacts';

class App extends Component {
    render() {
        return (
            <div>
                <Avatar />
                <NavPanel />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/skills" component={Skills} />
                        <Route path="/education" component={Education} />
                        <Route path="/experience" component={Experience} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/contacts" component={Contacts} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
