import React from 'react';
import '../estilos/Perfil.css';

function Perfil(props) {
    return (
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
                src={require(`../imagenes/perfil-${props.imagen}.png`)}
                alt='Foto de las ecritoras' />
            <div className='contenedor-texto-perfil'>
                <p className='nombre-perfil'>
                    <strong>{props.nombre}</strong> de {props.pais}
                </p>
                <p className='cargo-perfil'>
                <strong>{props.cargo}</strong> en {props.Genero}
                </p>
                <p className='texto-perfil'>"{props.perfil}" </p>
            </div>
            {/* Agregamos los botones para seguir en Facebook, YouTube y Twitter */}
            <button onClick={() => window.open(props.facebook, '_blank')}><strong>
                Seguir en Facebook</strong>
            </button>
            <button onClick={() => window.open(props.youtube, '_blank')}><strong>
                Seguir en YouTube</strong>
            </button>
            <button onClick={() => window.open(props.adicional, '_blank')}><strong>
                Seguir en X</strong>
            </button>
        </div>
    );
}
export default Perfil; 