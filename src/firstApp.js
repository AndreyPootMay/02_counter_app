import React from 'react';
import PropTypes from 'prop-types';

const firstApp = ({greeting, subtitle}) => {
    const myPerson = {
        name: 'Andrey',
        age: 20
    };

    return (
    <>
        <h1> {greeting} </h1>
        <pre>{JSON.stringify(myPerson, null, 3)}</pre>
        <p> { subtitle } </p>
    </>
    );
};

firstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

firstApp.defaultProps = {
    subtitle: 'I am a subtitle!'
}

export default firstApp;