import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';


class App extends React.Component{
    render(){
        return(
        <React.Fragment>
            <NavBar/>
            <Home/>
            <SobreMi/>
            <Proyectos/>
            <Contacto />
        </React.Fragment>)
    }
}

export default App