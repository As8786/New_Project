import React from "react";

import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardLink,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
  Table
} from "reactstrap";

import { Line } from "react-chartjs-2";

import { overlayCards, bgCards, gradientCards } from "demos/cardPage";

import { getStackLineChart, stackLineChartOptions } from "demos/chartjs";

import Page from "components/Page";
import { UserCard } from "components/Card";

import bg1Image from "assets/img/bg/background_640-1.jpg";
import bg3Image from "assets/img/bg/background_640-3.jpg";
import bg11Image from "assets/img/bg/background_1920-11.jpg";
import bg18Image from "assets/img/bg/background_1920-18.jpg";
import user1Image from "assets/img/users/100_1.jpg";
import './userProfile.css'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditActionned: false,
      name: "Selma",
      occupation: "Project Manager",
      email: "selma@selma.com",
      phone: "52 48 79 96",
      linkedin: "selma LinkedIn"
    };
  }

  toggleIsEditActionned = () => {
    this.setState({
      isEditActionned: !this.state.isEditActionned
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Page title="User Profile">
        <Row style={{ textAlign: "center", justifyContent: "center", marginBottom:"27px" }}>
          <Col md={6} sm={6} xs={12}>
            <Card
              inverse
              className="text-center user-card"

              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                height: "420px",
                color:"grey",
                border:"1px solid #00000020"
              }}
            >
              <CardImgOverlay>
                <div style={{ marginButtom: "17px" }}>
                  <img
                    src="selma.jpg"
                    style={{ borderRadius: "500px", marginBottom: "27px" }}
                  />
                </div>
                {this.state.isEditActionned ? (
                  <div>
                    <CardText>
                      <div
                        style={{ display: "flex", justifyContent: "center", color:"grey" }}
                      >
                        <b>Name </b>
                        <input
                          className="modify-input"
                          value={this.state.name}
                          name="name"
                          onChange={this.onChange}
                        />
                      </div>
                    </CardText>
                    <CardText>
                      <div
                        style={{ display: "flex", justifyContent: "center",color:"grey" }}
                      >
                        <b>Occupation  </b>
                        <input
                          className="modify-input"
                          value={this.state.occupation}
                          name="occupation"
                          onChange={this.onChange}
                        />
                      </div>
                    </CardText>
                    <div style={{ display: "flex", flexDirection: "column", color:"grey" }}>
                      <div style={{ marginBottom: "7px" }}>
                        <b>Email </b>
                        <input
                          className="modify-input"
                          value={this.state.email}
                          name="email"
                          onChange={this.onChange}
                        />
                      </div>
                      <div style={{ marginBottom: "7px"}}>
                        <b>Phone </b>
                        <input
                          className="modify-input"
                          value={this.state.phone}
                          name="phone"
                          onChange={this.onChange}
                        />
                      </div>
                      <div style={{ marginBottom: "7px" }}>
                        <b>Linkedin </b>
                        <input
                          className="modify-input"
                          value={this.state.linkedin}
                          name="linkedin"
                          onChange={this.onChange}
                        />
                      </div>
                      <Button
                        color="primary"
                        style={{
                          width: "70px",
                          margin: "auto",
                          marginTop: "17px"
                        }}
                        onClick={this.toggleIsEditActionned}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div style={{color:"grey"}}>
                    <CardTitle>
                      <b>{this.state.name}</b>
                    </CardTitle>
                    <CardText>
                      <b>{this.state.occupation}</b>
                    </CardText>
                    <p>
                      <b>Email : &nbsp; </b> {this.state.email}
                    </p>
                    <p>
                      <b>Phone : &nbsp; </b>
                      {this.state.phone}
                    </p>
                    <p>
                      <b>LinkedIn : &nbsp; </b>
                      {this.state.linkedin}
                    </p>
                    <Button
                      color="primary"
                      onClick={this.toggleIsEditActionned}
                    >
                      Edit Profile
                    </Button>
                  </div>
                )}
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
        {/*
        <Row style={{justifyContent:"center"}} >  
        <Col lg={5} md={5} sm={9} xs={12}>    
          <Card inverse color="" style={{borderColor:"pink"}}>
              <CardBody style={{height:"270px", color:'grey'}}>
                <CardTitle className="text-capitalize">
                <b> Tasks</b>
                </CardTitle>
                <CardText>
                  <p style={{fontStyle:"bold"}}>  Rate same candidate :  Anis et Sameh</p>
                  <p style={{fontStyle:"bold"}}>  Do a coffee : with the team</p>
                  <p style={{fontStyle:"bold"}}>  Add new feature  </p>
                  <p style={{fontStyle:"bold"}}>  Send Email for applicants  </p>
                </CardText>
                <div style={{textAlign:"right"}}>
                  <Button style={{ marginBottom:"17px", marginRight:"7px"}} color="primary">Add New Task</Button>   
                  <Button style={{ marginBottom:"17px"}} color="primary">View All</Button>   
                  
                </div>
              </CardBody>
            </Card>   
            
        </Col>

         <Col lg={5} md={5} sm={9} xs={12}>    
          <Card inverse color="" style={{borderColor:"pink"}}>
              <CardBody style={{height:"270px", color:'grey'}}>
                <CardTitle className="text-capitalize">
                <b> Cards</b>
                </CardTitle>
                <CardText style={{minHeight:"140px"}}>
                  <p style={{fontStyle:"bold"}}> Metting  Monday 7th January </p>
                  <p style={{fontStyle:"bold"}}> New Feature : Team please use our new platform </p>
                </CardText>
                <div style={{textAlign:"right"}}>
                  <Button style={{ marginBottom:"17px", marginRight:"7px"}} color="primary">Add New Task</Button>   
                  <Button style={{ marginBottom:"17px"}} color="primary">View All</Button>   
                  
                </div>
              </CardBody>
            </Card>      
        </Col>

      </Row>
  */}
      </Page>
    );
  }
}

export default UserProfile;
