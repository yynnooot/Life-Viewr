import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AddForm extends Component {
  constructor(){
    super();
    this.state = {
        species: "",
        image: "",
        kingdom:"",
        phylum:"",
        classes:"",
        order:"",
        family:"",
        genus:""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
}

handleInputChange(event) {
   
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

handleSubmit(event){
    event.preventDefault();
    
    axios.post('/api/organisms', {
      species: this.state.species,
      image: this.state.image,
      kingdom:this.state.kingdom,
      phylum:this.state.phylum,
      classes:this.state.classes,
      order:this.state.order,
      family:this.state.family,
      genus:this.state.genus
    })
    .then(res => res.data)
    .then(newOrganism => {
        console.log(newOrganism)
        const organismId = newOrganism.id;
        this.props.history.push(`/organisms/${organismId}`);
    })
}


render() {
    return (
        <div id="addcampus-div">
            <div>
                <h1>Input Animal Below:</h1>
            </div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Species:
                </label>
                <input
                    name="species"
                    type="text"
                    value={this.state.species}
                    onChange={this.handleInputChange} />
                
                <br/>
                <label>
                    Image:
                </label>
                <input
                    name="image"
                    type="text"
                    value={this.state.image}
                    onChange={this.handleInputChange} />
                
                <br/>
                <label>
                    Kingdom:
                </label>
                <input
                    name="kingdom"
                    type="text"
                    value={this.state.kingdom}
                    onChange={this.handleInputChange} />          
                <br/>

                <label>
                    Phylum:
                </label>
                <input
                    name="phylum"
                    type="text"
                    value={this.state.phylum}
                    onChange={this.handleInputChange} />
                <br/>

                <label>
                    Classes:
                </label>
                <input
                    name="classes"
                    type="text"
                    value={this.state.classes}
                    onChange={this.handleInputChange} />
                <br/>

                <label>
                    Order:
                </label>
                <input
                    name="order"
                    type="text"
                    value={this.state.order}
                    onChange={this.handleInputChange} />
                
                <br/>
                <label>
                    Family:
                </label>
                <input
                    name="family"
                    type="text"
                    value={this.state.family}
                    onChange={this.handleInputChange} />
                
               <br/>

               <label>
                    Genus:
                </label>
                    <input
                        name="genus"
                        type="text"
                        value={this.state.genus}
                        onChange={this.handleInputChange} />
                        <br/>
                <input id="addform-submit-btn" type="submit" name="submit"/>
            </form>
        </div>
    )
  }
}