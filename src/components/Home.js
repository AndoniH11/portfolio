import React from 'react';

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
            </div>
       
        )
    }
}

export default Home