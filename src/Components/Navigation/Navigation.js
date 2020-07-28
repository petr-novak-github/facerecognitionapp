import React from 'react';

const Navigation = () => {
    return (
        <nav style={
                    {display: 'flex', 
                     justifyContent: 'flex-end'}
                     }> {/*prni zavorky jsou asi, ze piseme JS do JSX a druhe zavorky jakoze objekt */}
            <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    );

}

export default Navigation;