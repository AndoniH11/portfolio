import React from 'react';
import andoni from '../assets/img/andoni-cortado.png'

class Home extends React.Component {

    state = {
        show: false,
    }

    onHover = () => {
        this.setState({
            show: true
        })
    }

    onHoverOut = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div className='home-container'>
                <h1>Bienvenidos!</h1>
                <h2>Soy <span onMouseOver={() => this.onHover()} onMouseOut={() => this.onHoverOut()}>Andoni Hernandez</span>,</h2>
                <h3 >Desarrollador Front End.</h3>
                <p>React  /  CSS  /  JavaScript</p>
                
                <a href='#contacto-container'>
                    <button>
                        Contactar
                    </button>
                </a>

                <img src={andoni} className='andoni' style={this.state.show ? {opacity: 1} : {opacity:0}}/>
            </div>
       
        )
    }
}

export default Home