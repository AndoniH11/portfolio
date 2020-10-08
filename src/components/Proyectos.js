import React from 'react';
import {proyectos} from '../data';
import Project from './Project';

class Proyectos extends React.Component{
    render(){
        return(
        <div className='proyectos-container' id='proyectos-container'>
                <h2 className='titulo'>PROYECTOS</h2>
                <div className='proyectos'>
                    {proyectos.map((proyecto) => {
                        return(
                        <Project key={proyecto.id} proyecto={proyecto}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Proyectos