import React from 'react';
import HomePage from './components/HomePage';
import Curriculum from './components/Curriculum';
import {Route, Switch} from 'react-router-dom';


class App extends React.Component{
    render(){
        return(
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/curriculum' component={Curriculum}/>
            </Switch>
        </React.Fragment>)
    }
}

export default App