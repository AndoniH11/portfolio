import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Contacto from './Contacto';
import Proyectos from './Proyectos';
import SobreMi from './SobreMi';

class HomePage extends React.Component {

    componentDidMount(){
        window.scrollTo(0,0)
    }
    render(){
        return(
            <div>
                <NavBar/>
                <Home/>
                <SobreMi/>
                <Proyectos/>
                <Contacto/>
            </div>
        )
    }
}

export default HomePage