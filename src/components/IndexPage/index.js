import React, { Component } from 'react';
import { Button, Image, Card, Row, Col } from 'react-bootstrap';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from '../../api/Map';
import './index.css';

class Index extends Component {
    state = {
        latitude:'',
        longitude:'',
        showingInfoWindow: false,
        origin: null,
        destination: null,
        activeMarker: {},
        selectedPlace: {}
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => console.log(this.state));
    };

    handleSubmit = async (e) => {
        e.preventDefault();

    }
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };

    render(){
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
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
                        </Col>
                        <Col>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </Col>
                    </Row>
                    
                   
                </form>
                <CurrentLocation 
                    centerAroundCurrentLocation 
                    google={this.props.google}
                    newLongitude = {this.state.longitude}
                    newLatitude = {this.state.latitude}
                >
                    <Marker onClick={this.onMarkerClick} name={'current location'} />
                    <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                    >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                    </InfoWindow>
                </CurrentLocation>
            </>
        )
    }
    
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDTvim5iSgu4FyajIK4ZOXS7CgSqapq85g'
  })(Index);