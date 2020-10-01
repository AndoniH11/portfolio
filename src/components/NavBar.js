import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';

class NavBar extends React.Component {

    state = {
        toggle: true
    }

    handleClick = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <header id='header'>
                <nav>
                    <p className= 'nombre'>Andoni Hernandez</p>
                    <GiHamburgerMenu className='burger-icon' onClick={() => this.handleClick()}/>
                    <ul className= {this.state.toggle ? 'apartados navBar-oculta' : 'apartados'}>
                        <li className='link link1'><a href='#sobremi-container'>Sobre mí</a></li>
                        <li className='link link2'><a href='#proyectos-container'>Proyectos</a></li>
                        <li className='link link3'><a href='#contacto-container'>Contacto</a></li> 
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar