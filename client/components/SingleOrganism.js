import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleOrganism extends Component {
    constructor(){
        super();
        this.state = {
           organism : {}
        }
    }

    componentDidMount(){
        axios.get('/api/organisms/:id')
            .then(res => res.data)
            .then(organism => this.setState({organism}))
    }
    
    render(){
        return (
            <div>
              <h1>SINGLE ORGANISM COMPONENT</h1>
                {this.state.organism}
            </div>
        )
    }
}