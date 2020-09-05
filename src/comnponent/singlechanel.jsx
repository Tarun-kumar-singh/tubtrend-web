import React from 'react';

const SingleChanel = (props) => {
    const { index, value } = props;

    return ( 
        <div
        hidden={value !== index}
        >
            Single channel
        </div>
     );
}
 
export default SingleChanel;