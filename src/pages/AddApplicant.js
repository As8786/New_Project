import React from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from 'reactstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


import './userProfile.css'
import Page from 'components/Page';



class AddApplicant extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      town : ""
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render(){
  return (
    <Page title="Add Applicant" >
      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Applicant Information</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="Applicant First Name "
                  />
                </FormGroup>
                <FormGroup>
                  <Label >Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Applicant Last Name"
                  />
                </FormGroup>
                <FormGroup>
                <Label>Birth Date</Label>
                  <Input
                    type="date"
                    name="birthDate"
                  />
                </FormGroup>
                <FormGroup>
                <Label>Town</Label>
                  <Input
                      type="select"
                      name="town">
                      <option value=""> Select a Town </option>                     
                      <option value="tunis"> Tunis </option> 
                      <option value="ariana"> Ariana </option>
                      <option value="beja"> Beja </option>
                      <option value="ben arous"> Ben Arous </option> 
                      <option value="bizerte"> Bizerte </option> 
                      <option value="gabes"> Gabes </option> 
                      <option value="gafsa"> Gafsa </option> 
                      <option value="jendouba"> Jendouba </option> 
                      <option value="kairouan"> Kairouan </option> 
                      <option value="kasserine"> Kasserine </option> 
                      <option value="kebili"> Kebili </option> 
                      <option value="kef"> Kef </option> 
                      <option value="mahdia"> Mahdia </option> 
                      <option value="manouba"> Manouba </option> 
                      <option value="medenine"> Medenine </option> 
                      <option value="monastir"> Monastir </option>
                      <option value="nabeul"> Nabeul </option> 
                      <option value="sfax"> Sfax </option> 
                      <option value="sidi bouzid"> Sidi Bouzid </option> 
                      <option value="siliana"> Siliana </option> 
                      <option value="sousse"> Sousse </option> 
                      <option value="tatouine"> Tatouine </option> 
                      <option value="tozeur"> Tozeur </option> 
                      <option value="zaghouan"> Zaghouan </option> 
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Applicant Picture</Label>
                  <Input type="text" name="picture" placeholder="Applicant Picture Link"/>
                  {/*<Input type="file" name="file"/>
                    <FormText color="muted">
                    You can chose the picture file from your device.
                    </FormText>*/}
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Applicant Contact</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                  />
                </FormGroup>
                <FormGroup>
                  <Label >Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Applicant Email"
                  />
                </FormGroup>
                <FormGroup>
                <Label>Facebook Link</Label>
                  <Input
                    type="text"
                    name="applicantFacebookLink"
                    placeholder="Applicant Facebook Link"
                  />
                </FormGroup>
                <FormGroup>
                <Label>LinkedIn Link</Label>
                  <Input
                    type="text"
                    name="applicantLinkedInLink"
                    placeholder="Applicant LinkedIn Link"                    
                  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col xl={6} lg={12} md={12}lg={12}>
        <Card>
        <CardHeader>Applicant Programs</CardHeader>
          <CardBody>
            <FormGroup>
              <Label >Program Name</Label>
              <Input
                type="select"
                name="programName"
              >
                <option value=""> Select a Branch </option>                         
                <option value="bloomMasters"> BLOOM MASTERS </option>
                <option value="boursierDelite"> BOURSIER D'ELITE </option>
                <option value="spark"> SPARK </option>                
              </Input>
            </FormGroup>
            <FormGroup>
              <Label >Edition</Label>
              <Input
                type="text"
                name="programEdition"
                placeholder="Applicant University"
              />
            </FormGroup>
            <FormGroup>
              <Label >Program Rating</Label>
              <Input
                  type="select"
                  name="programRating">
                  <option value=""> Select a Rate </option>                         
                  <option value="1"> 1 </option>   
                  <option value="2"> 2 </option>                         
                  <option value="3"> 3 </option>   
                  <option value="4"> 4 </option>
                  <option value="5"> 5 </option>   
              </Input>    
            </FormGroup>  
            <FormGroup>
              <Label >Program Feedback</Label>
              <Input
                type="text"
                name="programFeedback"
                placeholder="Applicant University"
                />
            </FormGroup>  
          </CardBody>                     
          <Button color='primary'> + </Button>
        </Card>           
        </Col>  
        <Col xl={6} lg={12} md={12}lg={12}>
        <Card>
        <CardHeader>Applicant Studies</CardHeader>
          <CardBody>
            <FormGroup>
              <Label >School</Label>
              <Input
                type="text"
                name="school"
                placeholder="Applicant School"
              />
            </FormGroup>
            <FormGroup>
              <Label >University</Label>
              <Input
                type="text"
                name="university"
                placeholder="Applicant University"
              />
            </FormGroup>
            <FormGroup>
              <Label >Studies Branch</Label>
              <Input
                  type="select"
                  name="course">
                  <option value=""> Select a Branch </option>                         
                  <option value="art"> Art </option>   
                  <option value="engineering"> Engineering </option>                         
                  <option value="finance"> Finance </option>   
                  <option value="it"> IT </option>
                  <option value="literature"> Literature </option>   
                  <option value="management"> Managament </option>   
                  <option value="science"> Science </option>   
              </Input>    
            </FormGroup>  
          </CardBody>                     
        </Card>           
        </Col>
      </Row>  
    </Page>
  );
}
}

export default AddApplicant;



{/*<Select 
                    onChange={this.onChange}
                    value={this.state.town}
                    name="town"
                    multi={true}
                    options={[
                      { value: 'tunis', label: 'Tunis' },
                      { value: 'ariana', label: 'Ariana' },
                      { value: 'beja', label: 'Beja' },
                      { value: 'ben Arous', label: 'Ben Arous' },                      
                      { value: 'bizerte', label: 'Bizerte' },
                      { value: 'gabes', label: 'Gabes' },
                      { value: 'gafsa', label: 'Gafsa' },
                      { value: 'jendouba', label: 'Jendouba' },
                      { value: 'kairouan', label: 'Kairouan' },
                      { value: 'kasserine', label: 'Kasserine' },
                      { value: 'kebili', label: 'Kebili' },
                      { value: 'kef', label: 'Kef' },
                      { value: 'mahdia', label: 'Mahdia' },
                      { value: 'manouba', label: 'Manouba' },
                      { value: 'medenine', label: 'Medenine' },
                      { value: 'monastir', label: 'Monastir' },
                      { value: 'nabeul', label: 'Nabeul' },
                      { value: 'sfax', label: 'Sfax' },
                      { value: 'sidi Bouzid', label: 'Sidi Bouzid' },
                      { value: 'siliana', label: 'Siliana' },
                      { value: 'sousse', label: 'Sousse' },
                      { value: 'tatouine', label: 'Tatouine' },
                      { value: 'tozeur', label: 'Tozeur' },
                      { value: 'zaghouan', label: 'Zaghouan' }, 
                    ]}
                  />  */}