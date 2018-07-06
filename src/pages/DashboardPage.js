import React from 'react';

import { getColor } from 'utils/colors';
import { randomNum } from 'utils/demos';

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardGroup,
  CardDeck,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
  Button,
} from 'reactstrap';

import {
  MdInsertChart,
  MdBubbleChart,
  MdPieChart,
  MdShowChart,
  MdPersonPin,
  MdRateReview,
  MdThumbUp,
  MdShare,
} from 'react-icons/lib/md';

import InfiniteCalendar from 'react-infinite-calendar';

import { Line, Bar } from 'react-chartjs-2';

import {
  supportTicketsData,
  productsData,
  userProgressTableData,
  avatarsData,
  todosData,
  chartjs,
} from 'demos/dashboardPage';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';

import Page from 'components/Page';

import SupportTicket from 'components/SupportTicket';
import ProductMedia from 'components/ProductMedia';
import UserProgressTable from 'components/UserProgressTable';

import { AnnouncementCard, TodosCard } from 'components/Card';

import { NumberWidget, IconWidget } from 'components/Widget';

import MapWithBubbles from 'components/MapWithBubbles';
import HorizontalAvatarList from 'components/HorizontalAvatarList';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novmeber', 'Decembder'];
const YEAR = [2014,2015, 2016, 2017, 2018]

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  genLineDataGender = (moreData = {}, moreData2 = {}) => {
    return {
      labels: YEAR,
      datasets: [
        {
          label: 'Male',
          backgroundColor: "#151547",
          borderColor: "#151547",
          borderWidth: 1,
          data: [
            randomNum(),
            randomNum(),
            randomNum(),
            randomNum(),
            randomNum(),
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
          backgroundColor: "#d7790e",
          borderColor: "#d7790e",
          borderWidth: 1,
          data: [
            randomNum(),
            randomNum(),
            randomNum(),
            randomNum(),
            randomNum(),
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

  genLineDataProgram = (moreData = {}, moreData2 = {}) => {
    return {
      labels: YEAR,
      datasets: [
        {
          label: 'BloomMasters',
          backgroundColor: "#151547",
          borderColor: "#151547",
          borderWidth: 1,
          data: [
            randomNum(),
            randomNum(),
            randomNum(),
            randomNum(),
            randomNum(),
          
          ],
          ...moreData,
        },
        {
          label: "Bourse d'élite",
          backgroundColor:"#d7790e",
          borderColor:"#d7790e",
          borderWidth: 1,
          data: [
            randomNum(),
            randomNum(),
            randomNum(),
            randomNum(),
            randomNum(),
           
          ],
          ...moreData2,
        },
        {
          label: 'SPARK',
          backgroundColor: getColor('success'),
          borderColor: getColor('success'),
          borderWidth: 1,
          data: [
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

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        >
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="All Programs"
              color="secondary"
              number= {6200}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Bloom Masters"
              number={1200}
              color="secondary"
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Boursier d'Elite"
              number={2200}
              color="secondary"
             
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="SPARK "
              color="secondary"
              number={2800}
            />
          </Col>
        </Row>

        

      <Row>
        <Col xl={6} lg={12} md={12} >
          <Card>
            <CardHeader>Applicants by program by year </CardHeader>
            <CardBody>
              <Line data={this.genLineDataProgram({ fill: false }, { fill: false })} />
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12} >
          <Card>
            <CardHeader>Applicants by gender</CardHeader>
            <CardBody>
              <Bar data={this.genLineDataGender()} />
            </CardBody>
          </Card>
        </Col>
      </Row>

       {/* <CardGroup style={{ marginBottom: '1rem' }}>
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdThumbUp}
            title="50+ Likes"
            subtitle="People you like"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdRateReview}
            title="10+ Reviews"
            subtitle="New Reviews"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdShare}
            title="30+ Shares"
            subtitle="New Shares"
          />
            </CardGroup>*/}

 

       {/*     
        <Row >
          <Col lg="4" md="12" sm="12" xs="12">
            <InfiniteCalendar
              selected={today}
              minDate={lastWeek}
              width="100%"
              height={390}
              theme={{
                accentColor: primaryColor,
                floatingNav: {
                  background: secondaryColor,
                  chevron: primaryColor,
                  color: '#FFF',
                },
                headerColor: primaryColor,
                selectionColor: secondaryColor,
                textColor: {
                  active: '#FFF',
                  default: '#333',
                },
                todayColor: secondaryColor,
                weekdayColor: primaryColor,
              }}
              
            />
          </Col>

          <Col lg="8" md="12" sm="12" xs="12">
            <AnnouncementCard
              color="gradient-secondary"
              header="Announcement"
              avatarSize={60}
              name="Selma"
              date="1 day ago"
              text="Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna"
              buttonProps={{
                children: 'show',
              }}
              style={{ height: 500 }}
            />
          </Col>

        </Row>


        <Row>
          
          <Col lg="6" md="12" sm="12" xs="12">
            <Card >
              <CardHeader style={{height:"145px"}}>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Support Tickets</span>
                  <Button>
                    <small>View All</small>
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {supportTicketsData.map(supportTicket => (
                  <SupportTicket key={supportTicket.id} {...supportTicket} />
                ))}
              </CardBody>
            </Card>
          </Col>

          <Col lg="6" md="12" sm="12" xs="12">
            <TodosCard todos={todosData} />
          </Col>
        </Row>
              */}
      </Page>
    );
  }
}
export default DashboardPage;
