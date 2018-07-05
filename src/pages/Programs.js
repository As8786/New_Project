import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button, ButtonGroup } from 'reactstrap';
import { Line, Pie, Doughnut, Bar} from 'react-chartjs-2';


import Data from './Data'
import { randomNum } from 'utils/demos';
import { getColor } from 'utils/colors';

const tableTypes = ['', 'bordered', 'striped', 'hover'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const YEAR = [2015, 2016, 2017, 2018]
 
class Programs extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      program :"Bloom Masters"
    }
  }

  onChange = e => {
    this.setState({
      program : e.target.value
    })
  }

  

  render() {
  return (
    <Page
      title="Programs" 
      breadcrumbs={[{ name: this.state.program, active: true }]}
      className="TablePage">

      <Row>
        <Col lg={12} md={12} sm={12} xs={12} style={{display:"flex", justifyContent:"space-around"}}>
          {this.state.program ==="Bloom Masters" ?  <Button  value="Bloom Masters" onClick={this.onChange}> Bloom Masters Program </Button> : <Button outline color="secondary" value="Bloom Masters" onClick={this.onChange}> Bloom Masters Program </Button>}
          {this.state.program ==="Boursier d'Elite" ?  <Button  value="Boursier d'Elite" onClick={this.onChange}> Boursier d'Elite Program </Button> : <Button outline color="secondary" value="Boursier d'Elite" onClick={this.onChange}> Boursier d'Elite Program </Button>}
          {this.state.program ==="Spark" ?  <Button  value="Spark" onClick={this.onChange}> Spark Program </Button> : <Button outline color="secondary" value="Spark" onClick={this.onChange}> Spark Program </Button>}
          <Button outline color="secondary"> + Add New Program</Button>                                                          
        </Col>  
      </Row>  
         
      <Row>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader> {this.state.program} program  Total Applicants By Year</CardHeader>
            <CardBody>
              <Line data={genLineData1({ fill: false }, { fill: false })} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader> {this.state.program} program by Gender 2018 Applicants  </CardHeader>
            <CardBody>
              <Bar data={genLineData()} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      {  (this.state.program === "Spark" || this.state.program === "Boursier d'Elite") ||
      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>{this.state.program} program applicants average age   </CardHeader>
            <CardBody>
              <Doughnut data={genPieData1()} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>{this.state.program} program applicants by studies branch  </CardHeader>
            <CardBody>
              <Doughnut data={genPieData()} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      }
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>{this.state.program} Applicants</CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Birthday Date</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Town</th>
                  
                  </tr>
                </thead>
                <tbody>
                {Data.map((e, i) => {
                  return <tr>  
                  
                  <th scope="row">{i+1}</th>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.birthday}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td>{(e.governerat).toUpperCase()}</td>
                    
                  </tr>
                })}
    
                </tbody>
              </Table>
            </CardBody>
                <div style={{display:"flex",flexDirection:"row-reverse", marginBottom:"17px"}}>
                <Button color="secondary" style={{marginRight:"10px"}}>Export Excel File </Button>
                <Button color="secondary" style={{marginRight:"10px"}}>View All</Button>
                </div>
          </Card>
        </Col>
      </Row>

    
    </Page>
  )};
};

export default Programs;

const genLineData = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'Male',
        backgroundColor: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData,
      },
      {
        label: 'Female',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData2,
      },
    ],
  };
};

const genLineData1 = (moreData = {}, moreData2 = {}) => {
  return {
    labels: YEAR,
    datasets: [
      {
        label: 'Applicants',
        backgroundColor: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData,
      },
    ],
  };
};
const genPieData = () => {
  return {
    datasets: [
      {
        data: [randomNum(), randomNum(), randomNum(), randomNum(), randomNum()],
        backgroundColor: [
          getColor('info'),
          getColor('danger'),
          getColor('success'),
          getColor('secondary'),
          getColor('primary'),
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['IT', 'Science', 'Management', 'Finance', ' Literature'],
  };
};

const genPieData1 = () => {
  return {
    datasets: [
      {
        data: [randomNum(), randomNum(), randomNum(), randomNum(), randomNum()],
        backgroundColor: [
          getColor('info'),
          getColor('danger'),
          getColor('success'),
          getColor('secondary'),
          getColor('primary'),
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['20-22', '22-24', '24-26', '26-28', '28-30'],
  };
};