import React from 'react';

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
} from 'reactstrap';

import { Line } from 'react-chartjs-2';

import { overlayCards, bgCards, gradientCards } from 'demos/cardPage';

import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';

import Page from 'components/Page';
import { UserCard } from 'components/Card';

import bg1Image from 'assets/img/bg/background_640-1.jpg';
import bg3Image from 'assets/img/bg/background_640-3.jpg';
import bg11Image from 'assets/img/bg/background_1920-11.jpg';
import bg18Image from 'assets/img/bg/background_1920-18.jpg';
import user1Image from 'assets/img/users/100_1.jpg';

class UserProfile extends React.Component {
  
  render() {
  return (
    <Page title="User Profile">

      <Row style={{textAlign:"center", justifyContent:"center"}}>
        <Col md={4} sm={4} xs={12} style={{height:"390px"}}>
              <Card inverse className="text-center" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", alignContent:"center", height:"390px"}}>
                <CardImg width="100%" src='background_1920-5.jpg' alt="Card image cap" style={{height:"390px"}}/>
                <CardImgOverlay>
                  <div style={{marginButtom:"17px"}} >
                      <img src="selma.jpg" style={{borderRadius:"500px", marginBottom:"27px"}}/>
                  </div>  
                  <CardTitle><b>Selma</b></CardTitle>
                  <CardText><b>Project Manager</b></CardText>
                  <p style={{fontStyle:"bold"}}> <b>Email : </b>  selma@selma.com</p>
                  <p style={{fontStyle:"bold"}}> <b>Phone : </b>52 48 79 96 89</p>
                  <p style={{fontStyle:"bold"}}> <b>LinkedIn : </b>selma LinkedIn</p>
                  <Button color="secondary">Edit Profile</Button>
                </CardImgOverlay>
              </Card>
        </Col>
        </Row>

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
                  <Button style={{ marginBottom:"17px", marginRight:"7px"}} color="secondary">Add New Task</Button>   
                  <Button style={{ marginBottom:"17px"}} color="secondary">View All</Button>   
                  
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
                  <Button style={{ marginBottom:"17px", marginRight:"7px"}} color="secondary">Add New Task</Button>   
                  <Button style={{ marginBottom:"17px"}} color="secondary">View All</Button>   
                  
                </div>
              </CardBody>
            </Card>      
        </Col>

      </Row>
    </Page>
  );
}};

export default UserProfile;
