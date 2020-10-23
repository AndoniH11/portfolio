import React from 'react';
import andoni from '../assets/img/andoni-cortadobw.jpg'

const Descripcion = () => {
    return (
        <div className='sobre-mi-descripcion-container'>
            <div className='sobre-mi-foto'>
                {<img src={andoni} alt='foto de Andoni'/>}
            </div>

            <div className='sobre-mi-descripcion'>
                <p>Hola, soy Andoni Hernandez y soy <strong>desarrollador web Front End</strong>. Soy un apasionado de la tecnología y me encanta darle vida a
                        esta a través de diseños modernos y elegantes. Mis páginas web se caracterizan por ser <strong>rápidas</strong>, <strong>fluidas, llenas de vida,
                        fáciles</strong> de usar y sobre todo <strong>adaptables</strong> a cualquier tamaño de pantalla.
                        </p>

                <p>Sobre mí, me definiría como una persona <strong> trabajadora, analítica, detallista</strong> pero también <strong>divertida, curiosa</strong> y con
                        ganas de <strong> aprender</strong> y seguir creciendo como <strong>profesional</strong>. Cualidades que creo que se adaptan a la perfección al ámbito del
                        desarrollo web, ya que me permiten diseñar webs <strong>sencillas, elegantes, cuidadas</strong> al más mínimo detalle pero a la vez <strong>dinámicas y entretenidas</strong>
                        .
                        </p>

                <p className='ultimo-parrafo'>
                    Para ello, me valgo de un profundo conocimiento de los lenguajes <strong>HTML5, CSS y JavaScript</strong>, combinándolo con el uso del framework
                            <strong> React</strong> y de diferentes <strong>librerias</strong> de este (react-router-dom, react-icons, chartjs...), así como de la utilización de <strong>peticiones AJAX.</strong>
                </p>
            </div>

            <div className='clearfix'></div>
        </div>
    )
}



export default Descripcion