import React from 'react'
import {FaPhone} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import 'aos/dist/aos.css';
import AOS from 'aos';


class Contacto extends React.Component {

    componentDidMount = () => {
        AOS.init({
            duration: 2000
        })
    }
    render(){
        return(
            <div className='contacto-container' id='contacto-container' data-aos='zoom-in'>
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
    
                <a href='#header'> <button className='contacto-button'>Volver al inicio</button></a>
            </div>
        )
    }
    
}

export default Contacto