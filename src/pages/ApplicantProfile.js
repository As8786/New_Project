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
  Table,
  Input,
  Modal,
  ModalBody,
  ModalFooter
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

const starts =[1,2,3,4,5]

class ApplicantProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalFeedBack: false,
      feed1 :"Good Idea with great team",
      feed2:"A future leader",
      feed3:"--",
      star:4
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleFeedBack = () => {
    this.setState({
      modalFeedBack: !this.state.modalFeedBack,
      feedCopy : this.state.feed1
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  cancelOnclickFeedBackModal = () => {
    this.setState({
      feed1 : this.state.feedCopy
    })
  }

  haveCliquedStarPosition = (e) => {
    this.setState({
      star : e
    })
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
              Good="Artist, Creative, Hacker"
              style={{
                height: 270,
                border:"1px solid #00000020"
              }}
            />
          </Col>

          <Col>
            <Card inverse color="" style={{ borderColor: "#00000020" }}>
              <CardBody style={{ height: "270px", color: "grey" }}>
                <CardTitle className="text-capitalize">
                 
                    <b> Contacts</b>
                  
                </CardTitle>
                <CardText style={{ fontSize: "14px", marginTop: "30px" }}>
                  <p style={{ fontStyle: "bold" }}>
                    
                    <b>Email : </b> houssem@houssem.com
                  </p>
                  <p style={{ fontStyle: "bold" }}>
                    <b>Phone : </b>52 48 79 96 89
                  </p>
                  <p style={{ fontStyle: "bold" }}>
                    
                    <b>Facebook : </b>Houssem Facebook
                  </p>
                  <p style={{ fontStyle: "bold" }}>
                    
                    <b>LinkedIn : </b>Houssem LinkedIn
                  </p>

                  <React.Fragment>
                    <Button
                      onClick={this.toggle}
                      style={{ marginRight: "10px" }}
                      color="primary"
                    >
                      Send Email
                    </Button>
                    <Modal
                      isOpen={this.state.modal}
                      toggle={this.toggle}
                      className={this.props.className}
                    >
                      <div style={{ margin: "17px 17px 0 17px" }}>
                        <p>
                          <b>Email</b>
                        </p>
                      </div>
                      <Input
                        placeholder="Subject"
                        style={{
                          marginLeft: "17px",
                          marginRight: "17px",
                          width: "90%"
                        }}
                      />
                      <Input
                        type="textarea"
                        placeholder="Content"
                        style={{
                          margin: "17px",
                          width: "90%",
                          minHeight: "300px"
                        }}
                      />
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>
                          Send
                        </Button>
                        <Button color="light" onClick={this.toggle}>
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
            <Card inverse color="" style={{ borderColor: "#00000020" }}>
              <CardBody style={{ height: "270px", color: "grey" }}>
                <CardTitle className="text-capitalize">
                 
                    <b> Activity Information</b>
                  
                </CardTitle>
                <CardText style={{ fontSize: "14px", marginTop: "30px" }}>
                  <p style={{ fontStyle: "bold" }}>
                    
                    <b>Last Program :</b> BLOOMMASTERS
                  </p>
                  <p style={{ fontStyle: "bold" }}>
                    
                    <b>Edition of Last Program Follow Up : </b>2017
                  </p>
                  <p style={{ fontStyle: "bold" }}>
                    
                    <b>Last Contact By Email :</b> 27/07/2017
                  </p>
                  <p style={{ fontStyle: "bold" }}>
                    
                    <b>Last Profile Update :</b> 12/02/2017
                  </p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={9} md={9} sm={9} xs={12}>
            <Card inverse color="" style={{ borderColor: "#00000020" }}>
              <CardBody style={{  color: "grey" }}>
                <CardTitle className="text-capitalize">
                 
                    <b>  Followed Trainning Program</b>
                  
                </CardTitle>
                <CardText style={{ fontSize: "14px", marginTop: "30px" }}>
                  <Table striped style={{tableLayout: "fixed", textAlign:"center"}}>
                    <thead>
                      <tr>
                        <th style={{width: "5%"}}>#</th>
                        <th style={{width: "20%"}}>Program</th>
                        <th style={{width: "8%"}}>Edition</th>
                        <th style={{width: "20%"}}>Project Idea</th>
                        <th style={{width: "17%"}}>Rating</th>
                        <th style={{width: "30%"}}>Feedback</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>BLOOMMASTERS</td>
                        <td>2017</td>
                        <td>Web Application</td>
                        <td>{starts.map((e,i)=> this.state.star>= (i+1) ?<span onClick={()=>this.haveCliquedStarPosition(i+1)} style={{color:"gold", fontWeight:"bold",fontSize:"18px"}}> ☆ </span> : <span onClick={()=>this.haveCliquedStarPosition(i+1)} style={{fontWeight:"bold",fontSize:"18px"}}> ☆ </span>)}</td>
                        <td onClick={this.toggleFeedBack}>
                          {this.state.feed1}
                          <Modal
                            isOpen={this.state.modalFeedBack}
                            toggle={this.toggleFeedBack}
                            className={this.props.className}
                          >
                            <ModalBody onClick={e=>e.stopPropagation()}>
                              <div
                                style={{ margin: "17px 17px 0 17px" }}
                              >
                                <p>
                                  <b>FeedBack</b>
                                </p>
                              </div>
                              <Input
                                name="feed1"
                                value={this.state.feed1}
                                placeholder="FeedBack"
                                style={{ margin: "17px", width: "90%" }}
                                onChange={this.onChange}
                              />
                            </ModalBody>
                            <ModalFooter onClick={e=>e.stopPropagation()}>
                              <Button color="primary" 
                                onClick= {this.toggleFeedBack}
                              >Save</Button>
                              <Button color="light"
                                onClick= {()=>{this.toggleFeedBack()
                                              this.cancelOnclickFeedBackModal()}}
                              >Cancel</Button>
                            </ModalFooter>
                          </Modal>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Boursier d'elite</td>
                        <td>2016</td>
                        <td> -- </td>
                        <td> <span style={{color:"gold", fontWeight:"bold",fontSize:"18px"}}> ☆ </span> 
                        <span style={{color:"gold", fontWeight:"bold",fontSize:"18px"}}> ☆ </span> 
                        <span style={{color:"gold", fontWeight:"bold",fontSize:"18px"}}> ☆ </span> 
                        <span style={{color:"gold",fontWeight:"bold",fontSize:"18px"}}> ☆ </span> 
                        <span style={{color:"gold", fontWeight:"bold",fontSize:"18px"}}> ☆ </span> 
                        </td>
                        <td>
                          {this.state.feed2} 
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Spark</td>
                        <td>2014</td>
                        <td>--</td>
                        <td><span style={{color:"gold", fontWeight:"bold",fontSize:"18px"}}> ☆ </span> 
                        <span style={{color:"gold", fontWeight:"bold",fontSize:"18px"}}> ☆ </span> 
                        <span style={{color:"gold", fontWeight:"bold",fontSize:"18px"}}> ☆ </span> 
                        <span style={{fontWeight:"bold",fontSize:"18px"}}> ☆ </span> 
                        <span style={{ fontWeight:"bold",fontSize:"18px"}}> ☆ </span> </td>
                        <td >
                          {this.state.feed3}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={3} sm={3} xs={12}>
            <Card inverse color="" style={{ borderColor: "#00000020" }}>
              <CardBody style={{ height: "270px", color: "grey" }}>
                <CardTitle className="text-capitalize">
                 
                    <b>Education Course</b>
                  
                </CardTitle>
                <CardText style={{ fontSize: "14px", marginTop: "30px" }}>
                  <p style={{ fontStyle: "bold" }}>
                    
                    <b>School : </b>Lycee 9 Avril Tunis
                  </p>
                  <p style={{ fontStyle: "bold" }}>
                    
                    <b>College : </b>Faculté des Sciences de Tunis
                  </p>
                  <p style={{ fontStyle: "bold" }}>
                    
                    <b>Study Course :</b> Master IT
                  </p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default ApplicantProfile;
