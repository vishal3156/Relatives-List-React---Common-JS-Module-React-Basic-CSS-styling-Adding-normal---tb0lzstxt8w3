import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
                <ol key="relativeList">
                    <li key="relativeListItem1">Uncle</li>
                    <li key="relativeListItem2">Aunt</li>
                    <li key="relativeListItem3">Grandpa</li>
                </ol>
            </div>
        );
    }
};


export default App;
