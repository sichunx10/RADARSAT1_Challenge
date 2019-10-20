import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Button, Row, Col } from 'react-bootstrap';
import { withGoogleMap, GoogleMap, InfoWindow } from "google-map-react";
import Geolocation from "react-geolocation";
import location from '../asset/location.png';
import './Map.css'

const Marker = () => {
    return <div className="pin"></div>
}

export default class Map extends Component {

  constructor(props) {
    super(props);

    this.state = {
        center: { lat: 40.744679, lng: -73.948542 },
        zoom: 4.5
      };
    console.log(props)
  }
  
  geoSuccess = async () => {
    let coords = {
      lat: parseFloat(this.props.latitude),
      lng: parseFloat(this.props.longitude)
    }
    await this.setState({
      center: coords
    })
    console.log(this.state)
  };

  render() {
    return (
        <>
        <div
        className="google-map"
        style={{ height: "70vh", width: "100%" }}
        >
        <Button onClick={this.geoSuccess} variant="success">Get Location</Button>
        
        <GoogleMapReact
            
            bootstrapURLKeys={{
                key: 'AIzaSyDZ6LLCf_H_2jGMjh3oxB75j-lhUUel52A' }}
                center={this.state.center}
                zoom={this.state.zoom}
            >
            <Marker lat={this.state.center.lat} lng={this.state.center.lng} />
        </GoogleMapReact>
        </div>
        </>
    );
  }
}
