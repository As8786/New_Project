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
  Table,
  Input,
  Modal,
  ModalFooter
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

class ApplicantProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      modal: false,
    }
  }

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }
  }
  
  render() {
  return (
    <Page title="Houssem AZ">

      <Row>
        <Col md={3}>
          <UserCard
            avatar={user1Image}
            title="Houssem"
            subtitle="22 ans"
            text="Tunis"
            Good= "Artist, Creative, Hacker"
            style={{
              height: 270,
            }}
          />
        </Col>

        <Col>    
          <Card inverse color="" style={{borderColor:"pink"}}>
              <CardBody style={{height:"270px", color:'grey'}}>
                <CardTitle className="text-capitalize">
                <b> Contacts</b>
                </CardTitle>
                <CardText>
                  <p style={{fontStyle:"bold"}}> <b>Email : </b>  houssem@houssem.com</p>
                  <p style={{fontStyle:"bold"}}> <b>Phone : </b>52 48 79 96 89</p>
                  <p style={{fontStyle:"bold"}}> <b>Facebook : </b>Houssem Facebook </p>
                  <p style={{fontStyle:"bold"}}> <b>LinkedIn : </b>Houssem LinkedIn</p>

                   <React.Fragment >
                    <Button onClick={this.toggle()} style={{marginRight:"10px"}}>Send Email</Button>
                    <Modal
                      isOpen={this.state.modal}
                      toggle={this.toggle()}
                      className={this.props.className}
                      >
                      <div style={{margin:"17px 17px 0 17px"}}> <p> <b>Email</b> </p> </div>
                      <Input placeholder="Email Subject" style={{marginLeft:"17px",marginRight:"17px",width:"90%" }}/>
                      <Input type="textarea" placeholder="Email Content" style={{margin:"17px",width:"90%", minHeight:"300px"  }}/>
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggle()}>
                          Send
                        </Button>{' '}
                        <Button color="secondary" onClick={this.toggle()}>
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Modal>
                </React.Fragment>


                </CardText>
              </CardBody>
            </Card>      
        </Col>

         <Col>    
          <Card inverse color="" style={{borderColor:"pink"}}>
              <CardBody style={{height:"270px", color:'grey'}}>
                <CardTitle className="text-capitalize">
                <b>Houssem Activity Information</b>
                </CardTitle>
                <CardText>
                  <p style={{fontStyle:"bold"}}> <b>Last Program :</b> BLOOMMASTERS </p>
                  <p style={{fontStyle:"bold"}}> <b>Edition of Last Program Follow Up : </b>2017</p>
                  <p style={{fontStyle:"bold"}}> <b>Last Contact By Email :</b> 27/07/2017 </p>
                  <p style={{fontStyle:"bold"}}> <b>Last Profile Update :</b> 12/02/2017 </p>
                  

                </CardText>
              </CardBody>
            </Card>      
        </Col>

      </Row>

      <Row>
      <Col lg={9} md={9} sm={9} xs={12} >    
          <Card inverse color="" style={{borderColor:"pink"}}>
              <CardBody style={{height:"270px", color:'grey'}}>
                <CardTitle className="text-capitalize" >
                <b> Houssem Followed Trainning Program</b>
                </CardTitle>
                <CardText>
                <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Program</th>
                    <th>Edition</th>
                    <th>Project Idea</th>
                    <th>Rating</th>
                    <th>Feedback</th>
                   
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>BLOOMMASTERS</td>
                    <td>2017</td>
                    <td>Web Application</td>
                    <td>7</td>
                    <td>Good Idea with great team</td>
                   
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Boursier d'elite</td>
                    <td>2016</td>
                    <td> -- </td>
                    <td> -- </td>
                    <td> A future leader </td>
                    
                  </tr>
                  <tr>
                  <th scope="row">3</th>
                    <td>Spark</td>
                    <td>2014</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                   
                  </tr>
                </tbody>
              </Table>

                </CardText>
              </CardBody>
            </Card>      
        </Col>
        <Col lg={3} md={3} sm={3} xs={12} >    
          <Card inverse color="" style={{borderColor:"pink"}}>
              <CardBody style={{height:"270px", color:'grey'}}>
                <CardTitle className="text-capitalize" >
                <b>Education Course</b>
                </CardTitle>
                <CardText >
                  <p style={{fontStyle:"bold"}}> <b>School : </b>Lycee 9 Avril Tunis </p>
                  <p style={{fontStyle:"bold"}}> <b>College : </b>Faculté des Sciences de Tunis</p>
                  <p style={{fontStyle:"bold"}}> <b>Study Course :</b> Master IT </p>
                  <p style={{fontStyle:"bold"}}> <b>Current year : </b>1 </p>


                </CardText>
              </CardBody>
            </Card>      
        </Col>
      </Row>

    </Page>
    )
  };
};

export default ApplicantProfile;
