import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config'
import axios from 'axios'


class App extends Component {

    getRemoteTimestamp = async () => {
        try {
            const response = await axios.get(`${config.apiUrl}/`);
            return response.data.timestamp;
        } catch (error) {
            return Promise.reject(error);
        }
    };

    displayTimestamp = async () => {
        let ts = await this.getRemoteTimestamp();
        let date = new Date(ts * 1000);
        console.log(date.toTimeString());
        document.getElementById('time').innerText = date.toTimeString();
    };

    async componentDidMount() {
        setInterval(async () => {
            await this.displayTimestamp();
        }, 1000);
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p id="time">0</p>
            </header>
            </div>
        );
    }
}

export default App;
