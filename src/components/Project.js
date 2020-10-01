import React from 'react';
import Tilt from 'react-vanilla-tilt'
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

class Project extends React.Component {

    handleClick = (e) => {
        console.log(e.target.options)
    }
    

    render() {
        return (
            <Tilt className='tilt' onClick={(e) => this.handleClick(e)}>
                <div className='proyecto'>
                    <div className='img-container'>
                        <img
                            src={this.props.proyecto.img}
                            alt='miniatura del proyecto'
                            className='proyecto-img'
                        />
                    </div>
                    <div className='parte-posterior'>
                        <h3>{this.props.proyecto.name}</h3>
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
            </Tilt>

        )
    }
}

export default Project