import React, { Component } from 'react';
import axios from 'axios';
import './index.scss';
import MovieTrailers from './components/MovieTrailers';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { data: null };
    }

    componentWillMount() {
        axios
            .get('http://localhost:8000/node/api/getData')
            .then(res => console.log(res) || this.setState(() => ({ data: res.data.data })))
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div>
                <MovieTrailers data={this.state.data} />
            </div>
        );
    }
}

export default App;
