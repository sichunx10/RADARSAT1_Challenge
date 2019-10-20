import React, { Component } from 'react';
import { Button, DropdownButton, Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Map from '../../api/Map';
import './index.css';
import cities from '../../asset/CityDict.js';

class Index extends Component {
    state = {
        latitude:'',
        longitude:''
    }
    
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => console.log(this.state));
    };

    confirm =()=> {
        window.location.href=`/main/:(${this.state.latitude},${this.state.longitude})`;
    }

    city = async ()=> {
        let citiesArray = [];
        console.log(cities)
        for (let city in cities){
            citiesArray.push(city)
            console.log(citiesArray)
        }
    }
    
    render(){
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                            <div className="latitude">
                                <label htmlFor="latitude">latitude</label>
                                <input
                                    placeholder="latitude"
                                    type="float"
                                    name="latitude"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="longitude">
                                <label htmlFor="longitude">longitude</label>
                                <input
                                    placeholder="longitude"
                                    type="float"
                                    name="longitude"
                                    onChange={this.handleChange}
                                />
                            </div>
                </form>
                {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item ></Dropdown.Item>
                </DropdownButton> */}
                <Button onClick={this.city}>Confirm</Button>
                <Map 
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                />
                <Button onClick={this.confirm}>Confirm</Button>
                
            </>
        )
    }
    
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDTvim5iSgu4FyajIK4ZOXS7CgSqapq85g'
  })(Index);