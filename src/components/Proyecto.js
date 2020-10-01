import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineDesktopComputer } from 'react-icons/hi'

class Proyecto extends React.Component {

    state = {
        hovered: false,
    }

    handleHover = () => {
        this.setState({
            hovered: true
        })
    }

    dishovered = () => {
        this.setState({
            hovered: false
        })
    }

    render() {
        return (
            <div className='proyecto'>
                
                <div className='img-container'>
                    <div className='oscuro'></div>
                    <img
                        src={this.props.proyecto.img}
                        alt='miniatura del proyecto'
                        className='proyecto-img'
                    />
                </div>

                <div className='parte-posterior'>
                    <h3 className='nombre-proyecto'>{this.props.proyecto.name}</h3>
                    <div className='proyecto-links'>
                        <div className='link-pagina'>
                            <a href={this.props.proyecto.codeUrl} target='_blank'><AiOutlineGithub className='icon-proyecto' /></a>
                            <a href={this.props.proyecto.codeUrl} target='_blank'><p>Ver Código</p></a>
                            
                        </div>
                        <div className='link-pagina'>
                            <a href={this.props.proyecto.url} target='_blank'><HiOutlineDesktopComputer className='icon-proyecto' /></a>
                            <a href={this.props.proyecto.url} target='_blank'><p>Ver Proyecto</p></a>
                        </div>
                    </div>
                </div>


            </div>
        )
    }

}

export default Proyecto