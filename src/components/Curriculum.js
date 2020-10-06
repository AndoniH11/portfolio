import React from 'react';
import andoni from '../assets/img/andoni-cortadobw.jpg'
import { Link } from 'react-router-dom';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import js from '../assets/img/javascript.png';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'

const Curriculum = () => {
    return (
        <div className='curriculum-container'>
            <div className='andoni-imagen-container'>
                <img src={andoni} alt='imagen de Andoni' className='andoni-foto' />
                <div className='pantalla-azul'></div>
            </div>
            <div className='curriculum'>
                <Link to='/' className='inicio-link'>INICIO</Link>
                <div className='clearfix'></div>
                <h2>Andoni Hernandez</h2>
                <p className='subtitulo'>Front End Web Developer</p>
                <p className='andoni-descripcion'>
                    Apasionado de la programación y el diseño. Desarrollador Web Front End con altos conocimientos en HTML, CSS, JavaScript y React.
                    Mi objetivo es crear páginas web rápidas, intuitivas, dinámicas y adaptables a cualquier dispositivo. Soy una persona trabajadora,
                    con muchas ganas de seguir aprendiendo y con una gran capacidad de trabajo en equipo.
                </p>
                <div className='educacion-container'>
                    <div className='apartado'>
                        <h3>Estudios y certificaciones</h3>
                        <div className='mini-apartado'>
                            <h4>JavaScript Algorithms and Data Structures Certification</h4>
                            <p>Free Code Camp (Online) - <span>2020</span></p>
                            <ul>
                                <li>Aprendizaje de las diferentes estructuras de datos de JavaScript, así como de sus métodos</li>
                                <li>Aprendizaje de la programación orientada a objetos y la programación funcional</li>
                                <li>Conocimiento amplio del lenguaje JS</li>
                            </ul>
                        </div>

                        <div className='mini-apartado'>
                            <h4>Front End Currículum</h4>
                            <p>The Odin Project (Online) - <span>2020</span></p>
                            <ul>
                                <li>Profundo aprendizaje de los lenguajes HTML, CSS y JavaScript</li>
                                <li>Realización de proyectos reales de principio a fin</li>
                                <li>Aprender a pensar como un programador</li>
                            </ul>
                        </div>

                        <div className='mini-apartado'>
                            <h4>Advanced Level English</h4>
                            <p>Nativas (Brisbane - Australia) - <span>2017</span></p>
                        </div>
                    </div>

                    <div className='habilidades-idiomas-container'>
                        <div className='apartado habilidades'>
                            <h3>Conocimientos</h3>
                            <div className='mini-apartado'>
                                <h4>Lenguajes</h4>
                                <ul>
                                    <li>HTML <img src={html} alt='html icon' className='language-icon html' /></li>
                                    <li>CSS<img src={css} alt='css icon' className='language-icon' /></li>
                                    <li>JavaScript<img src={js} alt='javascript icon' className='language-icon' /></li>
                                </ul>
                            </div>
                            <div className='mini-apartado'>
                                <h4>Librerias y frameworks</h4>
                                <ul>
                                    <li>React</li>
                                    <li>Bootstrap</li>
                                    <li>React-Router-Dom</li>
                                    <li>Chartjs</li>
                                    <li>React-slider</li>
                                    <li>...</li>
                                </ul>
                            </div>
                        </div>

                        <div className='apartado idiomas'>
                            <h3>Idiomas</h3>
                            <div className='mini-apartado'>
                                <ul>
                                    <li><strong>ESPAÑOL</strong> - Nativo</li>
                                    <li><strong>INGLES</strong> - Experto. Hablado y escrito.</li>
                                    <li><strong>EUSKERA</strong> - Nativo</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className='contacto contacto-curriculum'>
                        <div className='metodo-contacto telefono'>
                            <FaPhone className='contacto-icon' />
                            <p>688 741 563</p>
                        </div>
                        <div className='metodo-contacto'>
                            <MdEmail className='contacto-icon' />
                            <p>andonihernandez@hotmail.com</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Curriculum