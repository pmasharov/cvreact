import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import NavPanel from './NavPanel';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Contacts from './Contacts';


import '../css/App.sass';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import combinedReducer from '../redux/reducers';
// let store = createStore(combinedReducer);

class App extends Component {
    render() {
        return (
            <section className='wrapper'>
                <section className='fix'>
                    <BrowserRouter>
                        {/* <Provider store={store}> */}
                        <Switch>
                            <Route exact path="/" render={(props) => <NavPanel props={props} />} />
                            <Route path="/skills" component={Skills} />
                            <Route path="/education" component={Education} />
                            <Route path="/experience" component={Experience} />
                            <Route path="/portfolio" component={Portfolio} />
                            <Route path="/contacts" component={Contacts} />
                        </Switch>
                        {/* </Provider> */}
                    </BrowserRouter>
                </section>
            </section>
        )
    }
}

export default App;
