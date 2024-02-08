import React from 'react';

export const Header = () => {
    const headerStyle = {
        width: '100%',
        padding: '2%',
        backgroundColor: "#00ADB5",
        color: "#EEEEEE",
        textAlign: 'center',
        textTransform: 'uppercase', 
        letterSpacing: '2px', 
        fontWeight: 'bold', 
        fontSize: '2rem', 
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' 
    };

    return (
        <div style={headerStyle}>
            <h1>React With NodeJS</h1>
        </div>
    );
};
