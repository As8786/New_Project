import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button, InputGroupAddon, InputGroupText, Input, InputGroup,Modal, ModalBody, ModalHeader,ModalFooter, ButtonGroup, DropdownItem,Dropdown, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown } from 'reactstrap';
import {Link} from 'react-router-dom'

import { getThemeColors } from 'utils/colors';
import Data from './Data'

const colors = getThemeColors();

const actualDate = new Date ().getFullYear()

const tableTypes = ['', 'bordered', 'striped', 'hover'];

class Stat extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      dropdownOpen: false,
      modal: false,
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }
  }

  exportExcel (data) {
    JSONToCSVConvertor(data, 'BIAT LABS', true)
  }

  render() {
    console.log(this.state.program)

    let applicants = Data

    applicants = applicants.filter(e=> {
     return (this.state.education ==="ALL" || !this.state.education  ? e :(this.state.education === "college" ? e.college !== "" : e.college === "") ) &&
            (this.state.gender ==="ALL" || !this.state.gender  ? e :(this.state.gender === "male" ? e.gender === "male" : e.gender === "female") ) && 
            (this.state.town ==="ALL" || !this.state.town  ? e : (e.governerat) === this.state.town) &&
            (this.state.name ==="" || !this.state.name  ? e : (e.firstName).toLowerCase() === (this.state.name).toLowerCase())&&
            (this.state.criteria ==="" || !this.state.criteria  ? e : (e.criteria && (e.criteria).length > 0 ? (e.criteria).indexOf((this.state.criteria).toLowerCase()) !==-1 : "") )&&
            (this.state.college ==="" || !this.state.college  ? e : ((e.college).toLowerCase()).indexOf((this.state.college).toLowerCase()) !==-1 || ((e.school).toLowerCase()).indexOf((this.state.college).toLowerCase()) !==-1)&&
            (this.state.bloomasters==="ALL" || !this.state.bloomasters ? e : ((this.state.bloomasters ==="1" ? (e.program.filter(el=> (el.training) === "bloomasters").length>0 ? e : "") : (e.program.filter(el=> (el.training) === "bloomasters").length===0 ? e : ""))))&& 
            (this.state.boursier==="ALL" || !this.state.boursier ? e : ((this.state.boursier ==="1" ? (e.program.filter(el=> (el.training) === "boursier d'élite").length>0 ? e : "") : (e.program.filter(el=> (el.training) === "boursier d'élite").length===0 ? e : ""))))&&
            (this.state.spark==="ALL" || !this.state.spark ? e : ((this.state.spark ==="1" ? (e.program.filter(el=> (el.training) === "spark").length>0 ? e : "") : (e.program.filter(el=> (el.training) === "spark").length===0 ? e : ""))))&&
            (this.state.edition==="ALL" || !this.state.edition ? e : (e.program.filter(el => el.year === Number(this.state.edition)).length>0 ? e : "")) &&
            (this.state.edition==="ALL" || !this.state.edition ? e : (e.program.filter(el => el.year === Number(this.state.edition)).length>0 ? e : "")) &&
            (this.state.min==="" || !this.state.min ? e : (actualDate - e.yearB >= this.state.min ? e : "")) &&    
            (this.state.max==="" || !this.state.max ? e : (actualDate - e.yearB <= this.state.max ? e : ""))          
                    
          })

    console.log(applicants)

  return <Page
      title="Filtred Selection"
      className="TablePage">
     
      <Row style={{border:"1px solid gainsboro ",margin:"auto",flexDirection:"column" ,marginBottom:"17px", justifyContent:"center", borderRadius:"3px", paddingTop:"10px"}} >
        <Row>
                <Col lg={12} md={12} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around", paddingLeft:"20px", paddingRight:"20px", color:"grey", textAlign:"center"}}>
                
                <div>
                <p style={{marginBottom:"5px"}}> BloomMasters </p>  
                <select className='form-control' onChange={this.onChange} name='bloomasters'>
                  <option value='ALL'> -- </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>                 
                </select>
               </div> 

               <div>
                <p style={{marginBottom:"5px"}}> Boursier d'élite </p>  
                <select className='form-control' onChange={this.onChange} name='boursier'>
                  <option value='ALL'>--</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>                
                </select>
               </div> 

               <div>
                <p style={{marginBottom:"5px"}}> Spark </p>  
                <select className='form-control' onChange={this.onChange} name='spark'>
                  <option value='ALL'>--</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>                
                </select>
               </div>         

               <div>
                <p style={{marginBottom:"5px"}}> Program Edition </p>  
                <select className='form-control' onChange={this.onChange} name='edition'>
                  <option value='ALL'>All</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>    
                  <option value="2015">2015</option>                  
                  <option value="2014">2014</option>                  
                                
                </select>
               </div>   

               <div>
                <p style={{marginBottom:"5px"}}>  Eductaion Courses </p>  
                <select className='form-control' onChange={this.onChange} name='education'>
                  <option value='ALL'>All</option>
                  <option value="school">School</option>
                  <option value="college">College</option>             
                </select>
               </div> 

               <div>
                <p style={{marginBottom:"5px"}}>  Gender </p>  
                <select className='form-control' onChange={this.onChange} name='gender'>
                  <option value='ALL'>All</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>             
                </select>
               </div>   

               <div>
                <p style={{marginBottom:"5px"}}>  Project Area </p>  
                <select className='form-control' onChange={this.onChange} name='project'>
                  <option value='ALL'>All</option>
                  <option value="it">IT</option>
                  <option value="social">Social</option>   
                  <option value="finance">Finance</option>             
                  <option value="agriculture">Agriculture</option>                                         
                </select>
               </div> 

               <div>
                <p style={{marginBottom:"5px"}}>  Town </p>  
                <select className='form-control' onChange={this.onChange} name='town'>
                  <option value='ALL'>All</option>
                  <option value="tunis">Tunis</option>
                  <option value="ben arous">Ben Arous</option>  
                  <option value="bizerte">Bizerte</option>  
                  <option value="kairouan">Kairouan</option>             
                  <option value="tabarka">Tabarka</option>                                         
                </select>
               </div>     

            </Col>

      </Row>  

      <Row style={{ justifyContent:"center"}}>      
      <Col lg={10} md={10} sm={12} xs={12}>
          <Card>
           
            <CardBody>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Search By Name</InputGroupText>
                </InputGroupAddon>
                <Input onChange={this.onChange} name="name" />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Search By Age</InputGroupText>
                </InputGroupAddon>
                <InputGroupAddon addonType="prepend" style={{marginLeft:"10px"}} >
                  <InputGroupText style={{fontSize:"12px"}} >min</InputGroupText>
                </InputGroupAddon>
                <Input onChange={this.onChange} name="min"/>
                <InputGroupAddon addonType="prepend" style={{marginLeft:"10px"}}>
                  <InputGroupText style={{fontSize:"12px"}}>max</InputGroupText>
                </InputGroupAddon>
                <Input onChange={this.onChange} name="max"/>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Search By Criteria</InputGroupText>
                </InputGroupAddon>
                <Input onChange={this.onChange} name="criteria"/>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Search By College, School</InputGroupText>
                </InputGroupAddon>
                <Input onChange={this.onChange} name="college"/>
              </InputGroup>
              
            </CardBody>
          </Card>
        </Col>
      </Row>
              <div style={{ marginTop:"7px", marginBottom:"7px", textAlign:"right"}}>
                <Button color="secondary" style={{marginRight:"10px"}} onClick={()=>window.location.reload()}>Remove All Filter</Button>
                <Button color="secondary" style={{marginRight:"10px"}} onClick={()=>this.exportExcel(applicants)}>Export Excel File </Button>
                <React.Fragment >
                    <Button onClick={this.toggle()} style={{marginRight:"10px"}}>Send Emails</Button>
                    <Modal
                      isOpen={this.state.modal}
                      toggle={this.toggle()}
                      className={this.props.className}
                      >
                      <div style={{margin:"17px 17px 0 17px"}}> <p> <b>Email</b> </p> </div>
                      <Input placeholder="Email Subject" style={{marginLeft:"17px",marginRight:"17px",width:"90%" }}/>
                      <Input type="textarea" placeholder="Email Content" style={{margin:"17px",width:"90%", minHeight:"300px"  }}/>
                      <ModalFooter>
                        <Button color="secondary" onClick={this.toggle()}>
                          Send to {applicants.length} Candidates
                        </Button>{' '}
                        <Button color="light" onClick={this.toggle()}>
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Modal>
                </React.Fragment>

              </div>
      </Row>
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader style={{display:"flex", justifyContent:"space-between"}}> Applicants List
            </CardHeader>
            <CardBody>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Birthday Date</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Town</th>
                    <th>Last Program</th>
                    <th>Edition</th>
                  </tr>
                </thead>
                <tbody>

                {applicants.map((e, i) => {return <tr>  
                  
                  <th scope="row">{i+1}</th>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.birthday}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td>{(e.governerat).toUpperCase()}</td>
                    <td>{(e.program[0].training).toUpperCase()}</td>
                    <td>{(e.program[0].year)}</td>
                  </tr>
                  
                  })}    


             
                </tbody>
              </Table>
            </CardBody>
               
          </Card>
        </Col>
      </Row>

    
    </Page>
  ;}
};

export default Stat;


function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
  //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
  var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

  var CSV = 'sep=|\n';
  //Set Report title in first row or line

  CSV += ReportTitle + '\r\n\n';

  //This condition will generate the Label/Header
  if (ShowLabel) {
      var row = "";

      //This loop will extract the label from 1st index of on array
      for (var index in arrData[0]) {

          //Now convert each value to string and comma-seprated
          row += index + '|';
      }

      row = row.slice(0, -1);

      //append Label row with line break
      CSV += row + '\r\n';
  }

  //1st loop is to extract each row
  for (var i = 0; i < arrData.length; i++) {
      var row = "";

 //2nd loop will extract each column and convert it in string comma-seprated

      for (var index in arrData[i]) {
          if(index==="program") {
            row += JSON.stringify(arrData[i][index]) + '|';
          } else {
          row += arrData[i][index] + '|';
          row.slice(0, row.length - 1);}
      }

      //add a line break after each row
      CSV += row + '\r\n';
      

      if (CSV == '') {
        alert("Invalid data");
        return;
      }
  }
  //Generate a file name
  var fileName = "MyReport_";
  //this will remove the blank-spaces from the title and replace it with an underscore
  fileName += ReportTitle.replace(/ /g,"_");

  //Initialize file format you want csv or xls
  var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

  // Now the little tricky part.
  // you can use either>> window.open(uri);
  // but this will not work in some browsers
  // or you will not get the correct file extension

  //this trick will generate a temp <a /> tag
  var link = document.createElement("a");
  link.href = uri;

  //set the visibility hidden so it will not effect on your web-layout
  link.style = "visibility:hidden";
  link.download = fileName + ".csv";

  //this part will append the anchor tag and remove it after automatic click
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
