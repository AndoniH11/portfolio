import React from 'react'
import {FaPhone} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'


const Contacto = () => {
    return(
        <div className='contacto-container' id='contacto-container'>
            <h2 className='titulo'>CONTACTO</h2>
            <p className='contacto-descripcion'>Si tienes alguna pregunta o estás interesado en trabajar conmigo, por favor, no dudes en contactar conmigo a través de cualquiera de los siguientes canales.</p>
            <div className='contacto'>
                <div className='metodo-contacto telefono'>
                    <FaPhone className='contacto-icon'/>
                    <p>688 741 563</p>
                </div>
                <div className='metodo-contacto'>
                    <MdEmail className='contacto-icon'/>
                    <p>andonihernandez@hotmail.com</p>
                </div>
            </div>

            <button className='contacto-button'><a href='#header'>Volver al inicio</a></button>
        </div>
    )
}

export default Contacto