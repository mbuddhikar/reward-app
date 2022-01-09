import React, { Component } from 'react';
import image from './DetailedPughMatrix.PNG';

class DetailedPughMatrix extends Component {
    render() {
        return (
            <div>
                <img src={image} alt="img" width="100%" height="600"></img>
                <br/>
                <br/>
                <iframe width="100%" height="700px" src={"https://docdro.id/EbrCl84"} title="documnts"></iframe>
                <br/>
                <br/>
                <iframe width="100%" height="700px" src={"https://docdro.id/v7RGEpt"} title="documnts"></iframe>
            </div>
        );
    }
}

export default DetailedPughMatrix;