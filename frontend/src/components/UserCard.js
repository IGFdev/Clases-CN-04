import React from 'react';
import '../styles/styles.css';
import PropTypes from 'prop-types';

function UserCard(props) {
    return (
        <div className='user-card'>
            <h1>{props.nombre}</h1>
            <h2>{props.apellido}</h2>
            <h3>{props.edad}</h3>
        </div>
    );
}
// 
UserCard.defaultProps = {
    nombre: 'No se indicó nombre',
    apellido: 'No se indicó apellido',
    edad: 0
}

UserCard.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    edad: PropTypes.number
}

export default UserCard;