import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Organisms extends Component {
    constructor(){
        super();
        this.state = {
           organisms : []
        }
    }

    componentDidMount(){
        // axios.get('/api/organisms')
        //     .then(res => res.data)
        //     .then(organisms => this.setState({organisms}))
    }
    
    render(){
        return (
            <div>
                <h1>ALL ORGANISMS COMPONENT</h1>
                <div>
                    {/* {
                        this.state.organisms.map(organism=>{

                            return (
                                <div key={organism.id}>
                                    <Link to={`/organisms/${organism.id}`} >
                                        <div>
                                            {organism.species}
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    } */}
                </div>
                <div>
                    <button><Link to={`/addform`}>Add Organism</Link></button>
                </div>
            </div>
        )
    }
}