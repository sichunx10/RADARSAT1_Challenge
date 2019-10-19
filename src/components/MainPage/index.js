import React, { Component } from 'react';
import { Button, InputGroup, FormControl, Image } from 'react-bootstrap';
import './index.css';
import axios from 'axios';

class Main extends Component {
    state = {
        coodinateX:'',
        coodinateY:'',
        imageURL:''
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        // Update State and Call Back State
        this.setState({ [name]: value }, () => console.log(this.state));
    };

    handleSubmit = (e) => {
    // Finish Sign Up & Get User Info
    e.preventDefault();
      console.log(`
        User Information
        coodinateX: ${this.state.coodinateX},
        coodinateY: ${this.state.coodinateY}
        `)
    }


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="coodinateX">
                        <label htmlFor="coodinateX">CoodinateX</label>
                        <input
                            placeholder="coodinateX"
                            type="float"
                            name="coodinateX"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="CoodinateY">
                        <label htmlFor="CoodinateY">CoodinateY</label>
                        <input
                            placeholder="CoodinateY"
                            type="float"
                            name="CoodinateY"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Submmit</button>
                    </div>
                    <div>
                        { this.state.imageURL ? 
                        <Image className="realImage" src={this.state.imageURL} />
                        :
                        <Image className="emptyImage" src={'http://sumeyyaarar.com/wp-content/uploads/2018/07/empty_baslik.png'} fluid />
                        }
                        
                        
                    </div>
              </form>
            </div>
        )
    }
    
}

export default Main;