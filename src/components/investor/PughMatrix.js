import React, { Component } from 'react';
import image from './PughMatrix.PNG';

class PughMatrix extends Component {
    render() {
        return (
            <div>
                <img src={image} alt="img" width="100%" height="600"></img>
            </div>
        );
    }
}

export default PughMatrix;