import React, { Component } from 'react';
import { Button, InputGroup, FormControl, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
        e.preventDefault();
        window.location.href = "/infor";
        console.log(`
            User Information
            coodinateX: ${this.state.coodinateX},
            coodinateY: ${this.state.coodinateY}
            `)
        // const res = axios.get(`https://data.eodms-sgdot.nrcan-rncan.gc.ca/api/dhus/v1/products/Radarsat1/search?q=footprint:Intersects((${this.state.coodinateX},${this.state.coodinateY}))`, {
        //         auth: {
        //         username: 'codyzhang',
        //         password: 'Juanjuan780' 
        //         }
        //     }).catch(err => console.log(err));
        // console.log(res)
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
                    <div className="coodinateY">
                        <label htmlFor="coodinateY">CoodinateY</label>
                        <input
                            placeholder="coodinateY"
                            type="float"
                            name="coodinateY"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Summit</button>
                    </div>
                    <div>
                        { this.state.imageURL ? 
                        <Image className="realImage" src={this.state.imageURL}/>
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