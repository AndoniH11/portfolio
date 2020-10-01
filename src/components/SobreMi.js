import React from 'react';
import mobile from '../assets/img/mobile-pentagon.png';
import rocket from '../assets/img/rocket-pentagon1.png';
import bombilla from '../assets/img/bombilla-pentagon.png';
import Descripcion from './Descripcion'

class SobreMi extends React.Component {
    render() {
        return (
            <div className='sobremi-container' id='sobremi-container'>
                <h2 className='titulo'>SOBRE MI</h2>
                <div className='caracteristicas'>
                    <div>
                        <div className='caracteristicas-iconos'>
                            <img src={mobile} alt='mobile icon' className='caracteristica-icons' />
                        </div>
                        <h3>Responsive</h3>
                        <p>Mis diseños se adaptan perfectamente al tamaño de cualquier dispositivo.</p>
                    </div>

                    <div>
                        <div className='caracteristicas-iconos'>
                            <img src={rocket} alt='rocket icon' className='caracteristica-icons' />
                        </div>
                        <h3>Dinámicas</h3>
                        <p>Me encanta dar vida a mis páginas web a través de diferentes animaciones.</p>
                    </div>

                    <div>
                        <div className='caracteristicas-iconos'>
                            <img src={bombilla} alt='bombilla icon' className='caracteristica-icons' />
                        </div>
                        <h3>Intuitivas</h3>
                        <p>Diseños únicos pero fáciles de usar para cualquier usuario.</p>
                    </div>
                </div>

                <Descripcion/>
            </div>
        )
    }
}

export default SobreMi