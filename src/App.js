import React, { Component } from "react";
import './index.scss';
import IconDownload from './icons/download-solid.svg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <h6>Styled by attrs</h6>
                    <IconDownload width="50px" height="50px" color="red" />
                    <IconDownload width="50px" height="50px" color="green" />
                    <IconDownload width="50px" height="50px" color="blue" />
                </div>
                <div>
                    <h6>Styled by scss</h6>
                    <IconDownload className="img red" />
                    <IconDownload className="img green" />
                    <IconDownload className="img blue" />
                </div>
            </div>
        );
    }
}

export default App;
