import React, { Component } from 'react';
import { Button, Image, Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './index.css';
import axios from 'axios';
import right from '../../asset/right.png';
import left from '../../asset/left.png';

class Main extends Component {
    constructor(props){
        super(props)
        console.log(this.props.location.pathname.slice(8,-1).split(',')[0])
        console.log(this.props.location.pathname.slice(8,-1).split(',')[1])
        this.state = {
            latitude:this.props.location.pathname.slice(8,-1).split(',')[0],
            longitude:this.props.location.pathname.slice(8,-1).split(',')[1],
            imageURL:[],
            imageDownload:[],
            summary:[],
            index:null
        }
    }

    showPicture = async (e) => {
        this.setState({imageURL:[],imageDownload:[],summary:[],index:null})
        e.preventDefault();

        const res = await axios.get(`https://data.eodms-sgdot.nrcan-rncan.gc.ca/api/dhus/v1/products/Radarsat1/search?q=footprint:Intersects((${this.state.longitude},${this.state.latitude}))`, {
                auth: {
                username: 'codyzhang',
                password: 'Juanjuan780' 
                }
            }).catch(err => console.log(err));
        const data = res.data.entry;
        const long = data.length;

        for (let i = 0; i < long; i++){
            this.setState(() => {
                this.state.summary.push(data[i].summary);
                this.state.imageURL.push(data[i].link[1].href);
                this.state.imageDownload.push(data[i].link[2].href);
                
            })
        }
        console.log(this.state.summary)
        this.setState({index:0});
    }

    clickLeft = e => {
        if (this.state.index === 0){
            return
        } else {
            this.setState({index: this.state.index - 1})
        }
    }

    clickRight = e => {
        if (this.state.index === 9){
            return
        } else {
            this.setState({index: this.state.index + 1})
        }
    }

    render(){
        return (
            <>
            <Button onClick={this.showPicture}>Show Pictures!</Button>
            <Link to='/'>Go back</Link>
                <Card style={{ width: '100%' }}>
                    <Row>
                        <Col lg={2}>
                            <Image src={left} onClick={this.clickLeft} />
                        </Col>
                        <Col lg={8} >
                            <Card.Img 
                                className="imageSize"
                                variant="top" 
                                src={this.state.imageURL[this.state.index]} 
                            />
                            <Card.Body className="summary">
                                <Card.Title>Picture Summary</Card.Title>
                                <Card.Text>
                                {this.state.summary[this.state.index]}
                                </Card.Text>
                                <Button variant="warning" >
                                    <a href={this.state.imageDownload[this.state.index]} download>
                                       Download HD Image
                                    </a>
                                </Button>
                            </Card.Body>
                        </Col>
                        <Col lg={2} >
                            <Image  src={right} onClick={this.clickRight} />
                        </Col>
                    </Row>
                        
                    
                </Card>
            </>
        )
    }
    
}

export default Main;