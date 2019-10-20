import React, { Component } from 'react';
import { Button, Row, Col, Badge, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { GoogleApiWrapper } from 'google-maps-react';
import Map from '../../api/Map';
import './index.css';

class Index extends Component {
    state = {
        latitude:'',
        longitude:'',
    }
    
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => console.log(this.state));
    };

    confirm =()=> {
        window.location.href=`/main/:(${this.state.latitude},${this.state.longitude})`;
    }
    
    render(){
        return (
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                {"RADARSAT Challenge"}
                </Navbar.Brand>
            </Navbar>
            <Row>
                <Col lg="3">
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Latitude</label>
                        <input
                            placeholder="Ex:43.6532"
                            type="float"
                            className="form-control"
                            id="formGroupExampleInput"
                            name="latitude"
                            onChange={this.handleChange}
                        />
                    </div>
                </Col>
                <Col lg="3">
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Longitude</label>
                        <input
                            placeholder="Ex:-79.3832"
                            type="float"
                            className="form-control"
                            id="formGroupExampleInput"
                            name="longitude"
                            onChange={this.handleChange}
                        />
                    </div>
                </Col>
                <Col>
                <Link to='/details' >City Details</Link>
                </Col>
            </Row>
            <Row>
                <Col lg="11">
                    <Map 
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}
                    />
                </Col>
                <Col lg="1">
                    <Button className="button" onClick={this.confirm}>Confirm</Button>
                </Col>
            </Row>
            <h5 className="words">@Copyright DSCX Team</h5>
            
            
            </>
        )
    }
    
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDTvim5iSgu4FyajIK4ZOXS7CgSqapq85g'
  })(Index);
