import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Button, Row, Col, Container } from 'react-bootstrap';
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
        center: { lat: 43.650, lng: -79.380 },
        zoom: 5.5
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
        <Container className="map">
        <Row>
          <Col lg="11">
          <div
          className="google-map"
          style={{ height: "75vh", width: "100%"}}
          >
        
            <GoogleMapReact
              
                bootstrapURLKeys={{
                    key: 'AIzaSyDZ6LLCf_H_2jGMjh3oxB75j-lhUUel52A' }}
                    center={this.state.center}
                    zoom={this.state.zoom}
                >
                <Marker lat={this.state.center.lat} lng={this.state.center.lng} />
            </GoogleMapReact>
          </div>
          </Col>
          <Col lg="1">
          <Button className="button" onClick={this.geoSuccess} variant="success">Get Location</Button>
          </Col>
        </Row>
        
       
        </Container>
        

        
        </>
    );
  }
}
