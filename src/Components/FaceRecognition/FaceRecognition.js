import React from 'react';


const FaceRecognition = ({imageUrl}) => {
    return (
        <div className='center'>
        <img src={imageUrl} alt='hovno'/>
        </div>
    );

}

export default FaceRecognition;