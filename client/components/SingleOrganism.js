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
        const id = this.props.match.params.id
        console.log("**** id", id)
        axios.get(`/api/organisms/${id}`)
            .then(res => res.data)
            .then(organism => {
              console.log(organism)
              this.setState({organism})
            })
    }
    
    render(){
        return (
            <div>
              <h1>SINGLE ORGANISM COMPONENT</h1>
{/*               
              <p>{this.state.organism.species}</p> */}
              <div className="organism-container">
                                    
                  <div className="organism-left">
                    <img className="organism-image" src={this.state.organism.image} alt=""/>
                  </div>
                  <div className="organism-right">
                    <h1>Species - {this.state.organism.species}</h1>
                    <ul>
                      <li><strong>Kingdom: </strong>{this.state.organism.kingdom}</li>
                      <li><strong>Phylum: </strong>{this.state.organism.phylum}</li>
                      <li><strong>Classes: </strong>{this.state.organism.classes}</li>
                      <li><strong>Order: </strong>{this.state.organism.order}</li>
                      <li><strong>Family: </strong>{this.state.organism.family}</li>
                      <li><strong>Genus: </strong>{this.state.organism.genus}</li>
                    </ul>
                  </div>
                    
              </div>
            </div>
        )
    }
}