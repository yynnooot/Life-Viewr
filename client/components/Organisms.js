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
        axios.get('/api/organisms')
            .then(res => res.data)
            .then(organisms => this.setState({organisms}))
    }
    
    render(){
        return (
            <div>
                <h1>ALL ORGANISMS COMPONENT</h1>
                <div>
                    <button><Link to={`/addform`}>Add Organism</Link></button>
                </div>
                <div>
                    {
                        this.state.organisms.map(organism=>{

                            return (
                              <Link to={`/organisms/${organism.id}`} >
                                <div key={organism.id} className="organism-container">
                                    

                                          <div className="organism-left">
                                            <img src={organism.image} alt=""/>
                                          </div>
                                          <div className="organism-right">
                                            <h1>Species - {organism.species}</h1>
                                            <ul>
                                              <li><strong>Kingdom: </strong>{organism.kingdom}</li>
                                              <li><strong>Phylum: </strong>{organism.phylum}</li>
                                              <li><strong>Classes: </strong>{organism.classes}</li>
                                              <li><strong>Order: </strong>{organism.order}</li>
                                              <li><strong>Family: </strong>{organism.family}</li>
                                              <li><strong>Genus: </strong>{organism.genus}</li>
                                            </ul>
                                          </div>
                                      
                                </div>
                              </Link>
                            )
                        })
                    }
                </div>
                
            </div>
        )
    }
}